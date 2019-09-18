<?php

namespace App\Http\Controllers\API\Product;

    use App\Http\Controllers\Controller;
    use App\Models\Configuration;
    use App\Models\Item;
    use App\Models\ProductMeasurement;
    use App\Models\ProductMeasurementCategory;
    use GuzzleHttp\Client;
    use GuzzleHttp\Cookie\FileCookieJar;
    use Illuminate\Http\Request;

require 'selector.inc';
require 'snake_case_custom.php';

class MobileDataScrapping extends Controller
{
    public $dimension_claculator = null;

    public function getDetail(Request $request)
    {
        foreach ($request->items as $req) {
            preg_match( '/[^\/dp\/]\w+(?=\/)/', $req['url'], $asin );
            $data = $this->parseAsin( $req['url'] );
            $originalData = $data;
            $originalData['imageUrl'] = str_replace( '_SS40_', '_SS300_', $req['img'] );
            $originalData['sku'] = $asin[0];
            $originalData['qty'] = $req['qty'];
            if (array_key_exists( 'product_dimensions', $data ) or array_key_exists( 'package_dimensions', $data )) {
                $originalData['dimension'] = $this->getValue( $data['product_dimensions'] ?? $data['package_dimensions'] );
                $originalData['product_dimension_unit'] = $this->getUnit( $data['product_dimensions'] ?? $data['package_dimensions'] );
            }

            if (array_key_exists( 'item_weight', $data )) {
                $originalData['item_weight'] = $this->getValue( $data['item_weight'] );
                $originalData['item_weight_unit'] = $this->getUnit( $data['item_weight'] );
            } elseif (array_key_exists( 'product_dimensions', $data ) && !array_key_exists( 'package_dimensions', $data )) {
                $originalData['item_weight'] = $this->itemWeightFromDimension( $data['product_dimensions'] );
                $originalData['item_weight_unit'] = $this->itemUnitFromDimension( $data['product_dimensions'] );

            }

            if (array_key_exists( 'shipping_weight', $data )) {
                $originalData['item_weight'] = $this->getValue( $data['shipping_weight'] );
                $originalData['item_weight_unit'] = $this->getUnit( $data['shipping_weight'] );
            }

            $originalData['item_weight'] = $originalData['item_weight'] ?? 0;
            $originalData['available_quantity'] = $this->availableItem( $data['availability'] );
            $originalData['volumetric_weight'] = 0;
            $originalData['user_id'] = $request->userId;
            $originalData['session_id'] = $request->sessionId;

            $currentPrice = str_replace( ['$', ','], '', $originalData['current_price'] ?? $originalData['item_price'] ?? null );
            $currentPrice = str_replace( ' ', '.', trim( $currentPrice ) );
            $itemPrice = str_replace( ['$', ','], '', $originalData['item_price'] ?? $originalData['current_price'] ?? null );
            $itemPrice = str_replace( ' ', '.', trim( $itemPrice ) );
            $discount = str_replace( ['$', ','], '', $originalData['discount_price'] ?? null );
            $discountEndAt = $originalData['discount_expire'] ?? null;

            if ($discountEndAt) {
                $discountEndAt = str_ireplace( 'Ends in ', '', $discountEndAt );
                $discountEndAt = str_ireplace( 'Ends in ', '', $discountEndAt );
                $discountEndAt = \Carbon\Carbon::now()->add( \Carbon\CarbonInterval::fromString( $discountEndAt ) )->toDateTimeString();
            }


            //if item price is not available then set the shipping cost as zero (0)
            if (!$itemPrice) {
                $originalData['shipping_cost'] = 0;
            }

            $item = Item::whereSessionId( $originalData['session_id'] )->whereOrderId( null )->where( 'sku', $originalData['sku'] )->first();
            if (!$item) {
                $pm = ProductMeasurement::where( 'sku', $originalData['sku'] )->first();
                if ($pm && $pm->approved_weight > 0) {
                    $originalData['volumetric_weight'] = $pm->approved_weight;
                } else {
                    $itemWeight = $this->weightCalculate( $originalData );
                    $originalData['item_weight'] = !empty( $originalData['item_weight'] ) ? $originalData['item_weight'] . ' ' . $originalData['item_weight_unit'] : 0;
                    $originalData['dimension'] = !empty( $originalData['dimension'] ) ? $originalData['dimension'] . ' ' . $originalData['product_dimension_unit'] : 0;
                    if (empty( $pm )) {
                        $pm = ProductMeasurement::create( [
                            'title' => $originalData['title'],
                            'sku' => $originalData['sku'],
                            'weight' => $originalData['item_weight'],
                            'dimension' => $originalData['dimension'],
                            'volumetric_weight' => $itemWeight ?? 0,
                            'approved_by' => false,
                        ] );
                        $pm->save();
                    }

                    if (!$itemWeight) {
                        if (!$itemWeight && isset( $originalData['category'] )) {
                            $categories = explode( '>', $originalData['category'] );
                            krsort( $categories );
                            foreach ($categories as $category) {
                                $reviewCategory = ProductMeasurementCategory::whereTitle( trim( $category ) )->first();
                                if ($reviewCategory) {
                                    $originalData['volumetric_weight'] = $reviewCategory->volumetric_weight;
                                    break;
                                }
                            }
                        }

                    } else {
                        $originalData['volumetric_weight'] = $itemWeight;
                    }
                }
                $item = new Item();
                $originalData['weight'] = $originalData['item_weight'];
                $item->fill( $originalData );
                $item->store_id = 1;
                $item->save();
                $itemprice['discount'] = $discount;
                $itemprice['current_price'] = $currentPrice;
                $itemprice['item_price'] = $itemPrice;
                $itemprice['item_id'] = $item->id;
                $itemprice['discount_end_at'] = $discountEndAt;
                $itemprice['quantity'] = $originalData['qty'];
                $itemprice['shipping_cost'] = $originalData['shipping_cost'] ?? 0;
                $item->itemPrice()->create( $itemprice );
            } elseif ($item->itemPrice && ($item->itemPrice->item_price !== $itemPrice || $item->itemPrice->current_price !== $currentPrice)) {
                $item->itemPrice->item_price = $itemPrice;
                $item->itemPrice->current_price = $currentPrice;
                $item->itemPrice->discount = $discount;
                $item->itemPrice->shipping_cost = $originalData['shipping_cost'] ?? 0;;
                $item->itemPrice->quantity += 1;
                $item->itemPrice->discount_end_at = $discountEndAt;
                $item->itemPrice->save();
            } elseif (!$item->itemPrice) {
                $itemprice['discount'] = $discount;
                $itemprice['current_price'] = $currentPrice;
                $itemprice['item_price'] = $itemPrice;
                $itemprice['item_id'] = $item->id;
                $itemprice['discount_end_at'] = $discountEndAt;
                $itemprice['quantity'] = $originalData['qty'];
                $itemprice['shipping_cost'] = $originalData['shipping_cost'] ?? 0;
                $item->itemPrice()->create( $itemprice );
            }
        }
        return response()->json( ['message' => 'product details'], 200 );
    }

    public function storeEbay(Request $request)
    {
        foreach ($request->items as $item) {

            $price = trim( str_replace( ['US', '$', ','], '', $item['price'] ) );
            $title = $item['title'] . '-' . $item['variation'] ?? '';
            $sku = $item['variableId'] ? $item['sku'] . '_' . $item['variableId'] : $item['sku'];
            $qty = (int)$item['qty'] ?? 1;
            $existsItem = Item::whereSessionId( $request->sessionId )->whereOrderId( null )->where( 'sku', $sku )->first();
            $pm = ProductMeasurement::where( 'sku', $sku )->first();
            if (empty( $pm )) {
                $p = ProductMeasurement::create( [
                    'title' => $title,
                    'store_id' => $request->store_id,
                    'sku' => $sku,
                    'approved_by' => false
                ] );
                $p->save();
            }
            if (isset( $existsItem )) {
                $existsItem->itemPrice()->increment( 'quantity', $qty );
            } else {
                $item['title'] = $title;
                $item['store_id'] = $request->store_id;
                $item['url'] = str_replace( config( 'configuration.ebay_sub_domain' ) . '.' . config( 'configuration.base_domain' ), 'ebay.com', $item['link'] );
                $item['sku'] = $sku;
                $item['imageUrl'] = str_replace( 'http://', 'https://', $item['image'] );
                $item['session_id'] = $request->sessionId;
                $item['available_quantity'] = $item['availableItem'];
                $item['user_id'] = $request->user_id ?? null;

                if ($pm && $pm->approved_weight && $pm->approved_by)
                    $item['volumetric_weight'] = $pm->approved_weight;
                elseif ($reviewItem = Item::whereSku( $sku )->whereNotNull( 'volumetric_weight' )->first()) {
                    $item['volumetric_weight'] = $reviewItem->volumetric_weight;
                } else {
                    $item['volumetric_weight'] = 0;
                }

                $storedItem = Item::create( $item );
                $storedItem->itemPrice()->create( [
                    'item_price' => $price,
                    'quantity' => $qty
                ] );
            }


        }
        return response()->json( ['message' => 'product details'], 200 );
    }

    public function getValue($item)
    {
        preg_match( '/^((?:[0-9.]*)?\s?x?\s?)([0-9.]*)?\s?x?\s?([0-9.])*/', $item, $value );
        return trim( $value[0] );
    }

    public function getUnit($item)
    {
        preg_match( '/[a-z]+\w/', $item, $value );
        return trim( $value ? $value[0] : '' );
    }

    public function availableItem($item)
    {
        preg_match( '/\d+(?=\s)/', $item, $value );
        return trim( $value[0] ?? null );
    }

    public function parseAsin($url)
    {
        $data = [];
        $data += $this->parseMobile( $url ) ?? [];

        if ((empty( $data['product_dimension'] ) && empty( $data['shipping_weight'] ) && empty( $data['item_weight'] )) or empty( $data['current_price'] ))
            $data += $this->parseDesktop( $url ) ?? [];

        return $data;
    }

    public function parseMobile($url)
    {

        $data = [];

        // save the URL
        $data ['url'] = 'https://www.amazon.com' . $url;

        // get the html
        $client = new Client();
        $cookieJar = new FileCookieJar( config( 'configuration.cookie_base_path' ) . '/shopnshipbd' . request( 'sessionId' ) );
        $res = $client->get( $data ['url'],
            ['proxy' => config( 'configuration.proxy_id_pass' ),
                'headers' => [
                    'User-Agent' => config( 'configuration.user_agent_mobile' )
                ],
                'cookies' => $cookieJar
            ] );

        $html = (string)$res->getBody()->getContents();
        // clean the html
        $html = preg_replace( '#<script(.*?)>(.*?)</script>#is', '', $html );
        $html = preg_replace( '#<style(.*?)>(.*?)</style>#is', '', $html );
        $html = trim( preg_replace( '/\s+/', ' ', $html ) );

        // ==================== Product Name ====================
        // first make the substr till the end of the string
        $rest = substr(
            $html,
            stripos( $html, '<span id="productTitle"' ),
            strlen( $html )
        );

        // now take the needed part from the string
        $sub = substr(
            $rest,
            0,
            stripos( $rest, '</span>' ) + 9
        );

        // now use the dom parser
        $selectorElements = select_elements( '#productTitle', $sub );
        $data ['title'] = $selectorElements && $selectorElements[0] ? $selectorElements [0] ['text'] : '';
        if (empty( $data['title'] ) && $title = select_elements( "#title", $html ))
            $data['title'] = $title[0] ? $title[0]['text'] : '';

        // ==================== Product Image ====================
        $rest = substr(
            $html,
            stripos( $html, '<div id="imgTagWrapperId"' ),
            strlen( $html )
        );

        // now take the needed part from the string
        $sub = substr(
            $rest,
            0,
            stripos( $rest, '</div>' ) + 7
        );

        //Availability
        $selectorElements = select_elements( '#availability > span', $html );
        $data['availability'] = trim( $selectorElements ? $selectorElements[0]['text'] : '' );

        // ==================== Product Price ====================
        if (stripos( $html, 'id="price' ) > -1) {
            $rest = substr(
                $html,
                stripos( $html, '<div id="price"' ),
                strlen( $html )
            );

            // now take the needed part from the string
            $sub = substr(
                $rest,
                0,
                stripos( $rest, '</table>' ) + 9
            );
            $data ['current_price'] = select_elements( '#priceblock_ourprice', $sub ) ? select_elements( '#priceblock_ourprice', $sub ) [0]['text'] : null;
            if (empty( $data ['current_price'] )) {
                // this is special deal's price
                $selectorElements = select_elements( '#priceblock_dealprice', $sub );
                $data ['current_price'] = $selectorElements && isset( $selectorElements [0] ) ? $selectorElements [0] ['text'] : '';
            }

            if (stripos( $sub, 'a-text-strike' ) > -1) {
                $selectorElements = select_elements( '.a-text-strike', $sub );
                $data ['item_price'] = $selectorElements && isset( $selectorElements [0] ) ? $selectorElements [0] ['text'] : '';
            }

            if (stripos( $sub, 'regularprice_savings' ) > -1) {
                $selectorElements = select_elements( '#regularprice_savings td.a-color-price', $sub );
                $data ['discount_price'] = $selectorElements && isset( $selectorElements [0] ) ? $selectorElements [0] ['text'] : '';
            }

            // special deal's savings
            if (stripos( $sub, 'dealprice_savings' ) > -1) {
                $selectorElements = select_elements( '#dealprice_savings td.a-color-price', $sub );
                $data ['discount_price'] = $selectorElements && isset( $selectorElements [0] ) ? $selectorElements [0] ['text'] : '';
            }

            // --- find the deal expire time ---
            if (stripos( $html, 'deal_expiry_timer' ) > -1) {
                $rest = substr(
                    $html,
                    strripos(
                        substr( $html, 0, stripos( $html, 'deal_expiry_timer' ) ),
                        '<'
                    ),
                    strlen( $html )
                );

                // now take the needed part from the string
                $sub = substr(
                    $rest,
                    0,
                    stripos( $rest, '</span>' ) + 8
                );
                $selectorElements = select_elements( 'span', $sub );
                $data ['discount_expire'] = $selectorElements && isset( $selectorElements [0] ) ? $selectorElements [0] ['text'] : '';
            }
        }

        // ==================== Current Price for Book ====================

        if (empty( $data['current_price'] )) {
            $selectElements = select_elements( "#buybox #buyNewSection", $html );
            $data['current_price'] = preg_replace( '/[^\d.]+/', '', trim( ($selectElements && $selectElements[0]) ? $selectElements[0]['text'] : 0 ) );
        }

        // ==================== Shipping Cost ====================

        /*********mobile device scrapping******************/
        if (empty( $data['current_price'] ) && $price = select_elements( "#price", $html )) {
            $op = select_elements( "#price .a-text-strike", $html );
            $data['original_price'] = $op && $op[0] ? $op[0]['text'] : 0;
            $cp = select_elements( "#price #priceblock_dealprice", $html );
            $data['current_price'] = preg_replace( '/[a-zA-Z&]/', '', $cp && $cp[0] ? $cp[0]['text'] : 0 );
        }

        if (empty( $data['discount_price'] ) && $selectElements = select_elements( "#price #regularprice_savings", $html ))
            $data['discount_price'] = preg_replace( '/[a-zA-Z:]/', '', isset( $selectElements[0] ) ? $selectElements[0]['text'] : '' );
        if (empty( $data['discount_price'] ) && $selectElements = select_elements( "#price #dealprice_savings", $html ))
            $data['discount_price'] = preg_replace( '/[a-zA-Z:]/', '', isset( $selectElements[0] ) ? $selectElements[0]['text'] : '' );

        if (empty( $data['current_price'] ) && $mobilePrice = select_elements( "#newPitchPriceWrapper_feature_div", $html )) {

            $mobilePrice = isset( $mobilePrice[0] ) && isset( $mobilePrice[0]['children'] ) && isset( $mobilePrice[0]['children'][0] ) ? $mobilePrice[0]['children'][0]['children'] : '';
            if ($mobilePrice) {
                $data['current_price'] = preg_replace( '/\s+/', '', trim( isset( $mobilePrice[0] ) && isset( $mobilePrice[1] ) && isset( $mobilePrice[2] ) ? $mobilePrice[0]['text'] . $mobilePrice[1]['text'] . '.' . $mobilePrice[2]['text'] : '' ) );
                $data['original_price'] = preg_replace( '/\s+/', '', trim( isset( $mobilePrice[4] ) ? $mobilePrice[4]['text'] ?? 0 : 0 ) );
                $data['discount_price'] = preg_replace( '/[a-zA-z]+/', '', trim( isset( $mobilePrice[5] ) ? $mobilePrice[5]['text'] ?? 0 : 0 ) );
            }
        }

        if (empty( $data['current_price'] )) {
            $price = select_elements( "#buybox_feature_div .guild_priceblock_ourprice", $html );
            $data['current_price'] = $price && $price[0] ? $price['0']['text'] : 0;
        }

        //used buy product

        if (empty( $data['current_price'] ) && $price = select_elements( "#usedBuyBoxPrice_feature_div", $html )) {
            $op = select_elements( "#usedBuyBoxPrice_feature_div .price-large", $html );
            $cent = select_elements( "#usedBuyBoxPrice_feature_div .price-info-superscript", $html )[1]['text'] ?? 0;
            $data['current_price'] = $op && $op[0] ? str_replace( [' ', '$'], '', $op[0]['text'] . '.' . $cent ) : 0;
        }

        /*
        only needed for category book and device desktop
        if(empty($data['current_price'])){
             $data['current_price']=preg_replace('/[^\d.]+/','',trim(select_elements("#buybox #buyNewSection",$html)?select_elements("#buybox #buyNewSection",$html)[0]['text']:''));
         }*/
        $data += $this->shippingCost( $html );
        /*********end mobile device scrapping******************/

        // ==================== Product Category ====================
        if (stripos( $html, '<div id="wayfinding-breadcrumbs_feature_div' ) > -1) {
            $rest = substr(
                $html,
                stripos( $html, '<div id="wayfinding-breadcrumbs_feature_div"' ),
                strlen( $html )
            );

            // now take the needed part from the string
            $sub = substr(
                $rest,
                0,
                stripos( $rest, '</div>' ) + 7
            );

            $data ['category'] = '';

            foreach (select_elements( 'ul li', $sub ) as $item) {
                if ($item ['attributes'] && $item ['attributes'] ['class']) {
                    $data ['category'] .= ' > ';
                } else {
                    $data ['category'] .= trim( $item ['text'] );
                }
            }
        }

        // ==================== Is Gift ====================
        $data ['is_gift'] = false;
        if ((stripos( $html, 'sc-gift' ) > -1) || (stripos( $html, 'sc-gift-option' ) > -1)) {
            $data ['is_gift'] = true;
        }

        // ==================== Other Data ====================
        // find the basic details
        if (stripos( $html, '<table id="productDetails_detailBullets_sections1' ) > -1) {
            // that means we've found the table
            // first make the substr till the end of the string
            $rest = substr(
                $html,
                stripos( $html, '<table id="productDetails_detailBullets_sections1' ),
                strlen( $html )
            );

            // now take the needed part from the string
            $sub = substr(
                $rest,
                0,
                stripos( $rest, '</table>' ) + 10
            );

            // now use the dom parser
            foreach (select_elements( 'tr', $sub ) as $item) {
                $this->checkTheKeyIsExists( $item, $data );
            }
        }

        if (stripos( $html, '<table id="productDetails_techSpec_section_1' ) > -1) {
            // that means we've found the table
            // first make the substr till the end of the string
            $rest = substr(
                $html,
                stripos( $html, '<table id="productDetails_techSpec_section_1' ),
                strlen( $html )
            );

            // now take the needed part from the string
            $sub = substr(
                $rest,
                0,
                stripos( $rest, '</table>' ) + 10
            );

            // now use the dom parser
            foreach (select_elements( 'tr', $sub ) as $item) {
                $this->checkTheKeyIsExists( $item, $data );
            }
        }

        if (stripos( $html, '<table id="productDetails_techSpec_section_2' ) > -1) {
            // that means we've found the table
            // first make the substr till the end of the string
            $rest = substr(
                $html,
                stripos( $html, '<table id="productDetails_techSpec_section_2' ),
                strlen( $html )
            );

            // now take the needed part from the string
            $sub = substr(
                $rest,
                0,
                stripos( $rest, '</table>' ) + 10
            );

            // now use the dom parser
            foreach (select_elements( 'tr', $sub ) as $item) {
                $this->checkTheKeyIsExists( $item, $data );
            }
        }

        if (stripos( $html, '<table id="tech-specs-table-left' ) > -1) {
            // that means we've found the table
            // first make the substr till the end of the string
            $rest = substr(
                $html,
                stripos( $html, '<table id="tech-specs-table-left' ),
                strlen( $html )
            );

            // now take the needed part from the string
            $sub = substr(
                $rest,
                0,
                stripos( $rest, '</table>' ) + 10
            );

            // now use the dom parser
            foreach (select_elements( 'tr', $sub ) as $item) {
                $this->checkTheKeyIsExists( $item, $data );
            }
        }

        if (stripos( $html, '<table id="tech-specs-table-right' ) > -1) {
            // that means we've found the table
            // first make the substr till the end of the string
            $rest = substr(
                $html,
                stripos( $html, '<table id="tech-specs-table-right' ),
                strlen( $html )
            );

            // now take the needed part from the string
            $sub = substr(
                $rest,
                0,
                stripos( $rest, '</table>' ) + 10
            );

            // now use the dom parser
            foreach (select_elements( 'tr', $sub ) as $item) {
                $this->checkTheKeyIsExists( $item, $data );
            }
        }

        if (stripos( $html, '<div id="detailBullets' ) > -1) {
// that means we've found the table
// first make the substr till the end of the string
            $rest = substr(
                $html,
                stripos( $html, '<div id="detailBullets' ),
                strlen( $html )
            );

// now take the needed part from the string
            $sub = substr(
                $rest,
                0,
                strripos( $rest, '</ul>' ) + 10
            );

// echo $sub;

// now use the dom parser
            foreach (select_elements( 'ul li', $sub ) as $item) {
                if (count( $item ['children'] ) && isset( $item ['children'] [0] ) && count( $item ['children'] [0] ['children'] ) > 0) {
                    $data [snake_case_custom( trim( $item ['children'] [0] ['children'][0] ['text'] ) )] = str_ireplace( count( $item ['children'] [0] ['children'] ) > 0 ? $item ['children'] [0] ['children'] [0] ['text'] : '', '', $item ['text'] );
                }
            }
        }
        if (stripos( $html, '<div id="detail-bullets' ) > -1) {
// that means we've found the table
// first make the substr till the end of the string
            $rest = substr(
                $html,
                stripos( $html, '<div id="detail-bullets' ),
                strlen( $html )
            );

// now take the needed part from the string
            $sub = substr(
                $rest,
                0,
                strripos( $rest, '</table>' ) + 10
            );

// echo $sub;

// now use the dom parser
            foreach (select_elements( 'table tr td ul li', $sub ) as $item) {
                if ($selectElements = $item ['children']) {
                    if (isset( $selectElements [0] ) && isset( $selectElements [0] ['text'] )) {
                        $data [snake_case_custom( trim( $selectElements [0] ['text'] ) )] = str_ireplace( $selectElements [0] ['text'], '', $item ['text'] );
                    }
                }
            }
        }
        foreach ($data as $key => $val) {
            $data [$key] = trim( $val );
        }

        $data ['current_time'] = date( 'c' );
        return $data;


    }

    public function parseDesktop($url)
    {

        $data = [];

        // save the URL
        $data ['url'] = 'https://www.amazon.com' . $url;


        // get the html
        $client = new Client();
        $cookieJar = new FileCookieJar( config( 'configuration.cookie_base_path' ) . '/shopnshipbd' . request( 'sessionId' ) );

        $res = $client->get( $data ['url'],
            ['proxy' => config( 'configuration.proxy_id_pass' ),
                'headers' => [
                    'User-Agent' => config( 'configuration.user_agent_desktop' )
                ],
                'cookies' => $cookieJar
            ] );

        $html = (string)$res->getBody()->getContents();
        // clean the html
        $html = preg_replace( '#<script(.*?)>(.*?)</script>#is', '', $html );
        $html = preg_replace( '#<style(.*?)>(.*?)</style>#is', '', $html );
        $html = trim( preg_replace( '/\s+/', ' ', $html ) );

        // ==================== Product Name ====================
        if (empty( $data['title'] ) && $title = select_elements( "#title", $html ))
            $data['title'] = $title[0] ? $title[0]['text'] : '';

        // ==================== Product Image ====================
        $rest = substr(
            $html,
            stripos( $html, '<div id="imgTagWrapperId"' ),
            strlen( $html )
        );

        // now take the needed part from the string
        $sub = substr(
            $rest,
            0,
            stripos( $rest, '</div>' ) + 7
        );

        //Availability
        $selectorElements = select_elements( '#availability > span', $html );
        $data['availability'] = trim( $selectorElements ? $selectorElements[0]['text'] : '' );


        // ==================== Shipping Cost ====================
        $data += $this->shippingCost( $html ) ?? [];

        /*
        only needed for category book and device desktop
        if(empty($data['current_price'])){
             $data['current_price']=preg_replace('/[^\d.]+/','',trim(select_elements("#buybox #buyNewSection",$html)?select_elements("#buybox #buyNewSection",$html)[0]['text']:''));
         }*/

        /*********end mobile device scrapping******************/

        // ==================== Is Gift ====================
        $data ['is_gift'] = false;
        if ((stripos( $html, 'sc-gift' ) > -1) || (stripos( $html, 'sc-gift-option' ) > -1)) {
            $data ['is_gift'] = true;
        }

        // ==================== Other Data ====================
        // find the basic details
        if (stripos( $html, '<table id="productDetails_detailBullets_sections1' ) > -1) {
            // that means we've found the table
            // first make the substr till the end of the string
            $rest = substr(
                $html,
                stripos( $html, '<table id="productDetails_detailBullets_sections1' ),
                strlen( $html )
            );

            // now take the needed part from the string
            $sub = substr(
                $rest,
                0,
                stripos( $rest, '</table>' ) + 10
            );

            // now use the dom parser
            foreach (select_elements( 'tr', $sub ) as $item) {
                $this->checkTheKeyIsExists( $item, $data );
            }
        }

        if (stripos( $html, '<table id="productDetails_techSpec_section_1' ) > -1) {
            // that means we've found the table
            // first make the substr till the end of the string
            $rest = substr(
                $html,
                stripos( $html, '<table id="productDetails_techSpec_section_1' ),
                strlen( $html )
            );

            // now take the needed part from the string
            $sub = substr(
                $rest,
                0,
                stripos( $rest, '</table>' ) + 10
            );

            // now use the dom parser
            foreach (select_elements( 'tr', $sub ) as $item) {
                $this->checkTheKeyIsExists( $item, $data );
            }
        }

        if (stripos( $html, '<table id="productDetails_techSpec_section_2' ) > -1) {
            // that means we've found the table
            // first make the substr till the end of the string
            $rest = substr(
                $html,
                stripos( $html, '<table id="productDetails_techSpec_section_2' ),
                strlen( $html )
            );

            // now take the needed part from the string
            $sub = substr(
                $rest,
                0,
                stripos( $rest, '</table>' ) + 10
            );

            // now use the dom parser
            foreach (select_elements( 'tr', $sub ) as $item) {
                $this->checkTheKeyIsExists( $item, $data );
            }
        }

        if (stripos( $html, '<table id="tech-specs-table-left' ) > -1) {
            // that means we've found the table
            // first make the substr till the end of the string
            $rest = substr(
                $html,
                stripos( $html, '<table id="tech-specs-table-left' ),
                strlen( $html )
            );

            // now take the needed part from the string
            $sub = substr(
                $rest,
                0,
                stripos( $rest, '</table>' ) + 10
            );

            // now use the dom parser
            foreach (select_elements( 'tr', $sub ) as $item) {
                $this->checkTheKeyIsExists( $item, $data );
            }
        }

        if (stripos( $html, '<table id="tech-specs-table-right' ) > -1) {
            // that means we've found the table
            // first make the substr till the end of the string
            $rest = substr(
                $html,
                stripos( $html, '<table id="tech-specs-table-right' ),
                strlen( $html )
            );

            // now take the needed part from the string
            $sub = substr(
                $rest,
                0,
                stripos( $rest, '</table>' ) + 10
            );

            // now use the dom parser
            foreach (select_elements( 'tr', $sub ) as $item) {
                $this->checkTheKeyIsExists( $item, $data );
            }
        }

        if (stripos( $html, '<div id="detailBullets' ) > -1) {
// that means we've found the table
// first make the substr till the end of the string
            $rest = substr(
                $html,
                stripos( $html, '<div id="detailBullets' ),
                strlen( $html )
            );

// now take the needed part from the string
            $sub = substr(
                $rest,
                0,
                strripos( $rest, '</ul>' ) + 10
            );

// echo $sub;

// now use the dom parser
            foreach (select_elements( 'ul li', $sub ) as $item) {
                if (count( $item ['children'] ) && isset( $item ['children'] [0] ) && count( $item ['children'] [0] ['children'] ) > 0) {
                    $data [snake_case_custom( trim( $item ['children'] [0] ['children'][0] ['text'] ) )] = str_ireplace( count( $item ['children'] [0] ['children'] ) > 0 ? $item ['children'] [0] ['children'] [0] ['text'] : '', '', $item ['text'] );
                }
            }
        }
        if (stripos( $html, '<div id="detail-bullets' ) > -1) {
// that means we've found the table
// first make the substr till the end of the string
            $rest = substr(
                $html,
                stripos( $html, '<div id="detail-bullets' ),
                strlen( $html )
            );

// now take the needed part from the string
            $sub = substr(
                $rest,
                0,
                strripos( $rest, '</table>' ) + 10
            );

// echo $sub;

// now use the dom parser
            foreach (select_elements( 'table tr td ul li', $sub ) as $item) {
                if ($selectElements = $item ['children']) {
                    if (isset( $selectElements [0] ) && isset( $selectElements [0] ['text'] )) {
                        $data [snake_case_custom( trim( $selectElements [0] ['text'] ) )] = str_ireplace( $selectElements [0] ['text'], '', $item ['text'] );
                    }
                }
            }
        }
        foreach ($data as $key => $val) {
            $data [$key] = trim( $val );
        }

        $data ['current_time'] = date( 'c' );
        return $data;


    }

    public function shippingCost($html)
    {
        $data = [];

        if (count( select_elements( '#ourprice_shippingmessage', $html ) ) > 0 && $selectElements = select_elements( '#ourprice_shippingmessage', $html )) {
            preg_match( '/\+\s?\$\d*(.\d*)?/', $selectElements && $selectElements[0] ? $selectElements[0]['text'] : 0, $match );
            $data['shipping_cost'] = trim( str_replace( ['+', '$'], '', $match[0] ?? 0 ) );
        } elseif (empty( $data['shipping_cost'] ) && count( select_elements( '#ourPrice_availability', $html ) ) > 0 && $selectElements = select_elements( '#ourPrice_availability', $html )) {
            preg_match( '/\+\s?\$\d*(.\d*)?/', $selectElements && $selectElements[0] ? $selectElements[0]['text'] : 0, $match );
            $data['shipping_cost'] = trim( str_replace( ['+', '$'], '', $match[0] ?? 0 ) );
        } elseif (empty( $data['shipping_cost'] ) && $selectElements = select_elements( '#usedOnlyContent_feature_div', $html )) {
            preg_match( '/\+\s?\$\d*(.\d*)?/', $selectElements && $selectElements[0] ? $selectElements[0]['text'] : 0, $match );
            $data['shipping_cost'] = trim( str_replace( ['+', '$'], '', $match[0] ?? 0 ) );
        }

        return $data;
    }

    private function checkTheKeyIsExists($item, &$data)
    {

        if (isset( $item['children'] )) {
            $selectElements = $item['children'];
            if (isset( $selectElements [0] ) && isset( $selectElements [0] ['text'] )) {
                $selectElement = trim( $selectElements [0] ['text'] );
                if (!stripos( $selectElement, 'reviews' )) {
                    $data[snake_case_custom( $selectElement )] = isset( $selectElements [1] ) && isset( $selectElements [1] ['text'] ) ? $selectElements [1] ['text'] : '';
                }
            }
        }

    }

    public function itemWeightFromDimension($item)
    {
        $data = $this->toArrayFromDimension( $item );

        return $this->getValue( count( $data ) > 1 ? $data[1] : '' );
    }

    public function itemUnitFromDimension($item)
    {
        $data = $this->toArrayFromDimension( $item );

        return $this->getUnit( count( $data ) > 1 ? $data[1] : '' );
    }

    public function toArrayFromDimension($item)
    {
        return explode( ';', $item );
    }

    public function weightCalc($item)
    {
        foreach ($item as $k => $v) {
            if (array_key_exists( 'product_dimensions', $v )) {
                list( $H, $L, $W ) = explode( 'x', $v['product_dimensions'] );
                $vw = ((float)$H * (float)$L * (float)$W) / 139;
                if (isset( $v['item_weight_unit'] ) && $v['item_weight_unit'] == 'ounces') {
                    $wp = (float)$v['item_weight'] * 0.062500;
                } else {

                    $wp = (float)($v['item_weight'] ?? 0);
                }
                $weight = $vw > $wp ? $vw : $wp;
                $item[$k]['volumetric_weight'] = $weight;
            }
        }
        return $item;
    }

    public function weightCalculate($item)
    {
        $wp = 0;
        if (array_key_exists( 'item_weight', $item )) {
            $wp = (float)($item['item_weight'] ?? 0);
        }
        if (array_key_exists( 'dimension', $item )) {

            if ($this->dimension_claculator === null) {
                $defaultDimension = Configuration::where( 'alias', 'dimension_calculator' )->first();
                $this->dimension_claculator = $defaultDimension ? $defaultDimension->status : 139;
            }
            $v = explode( 'x', $item['dimension'] );
            list( $H, $L, $W ) = [$v[0], $v[1], $v[2] ?? 1];
            $vw = ((float)$H * (float)$L * (float)$W) / $this->dimension_claculator;
            if (isset( $item['item_weight_unit'] ) && $item['item_weight_unit'] == 'ounces') {
                $wp = (float)$item['item_weight'] * 0.062500;
            }
            return $vw > $wp ? $vw : $wp;
        } elseif ($wp > 0) {
            if (isset( $item['item_weight_unit'] ) && $item['item_weight_unit'] == 'ounces') {
                $wp = (float)$item['item_weight'] * 0.062500;
            }
        }
        return $wp;

    }

    public function storeScrapData(Request $request)
    {
        foreach ($request->items as $req) {

            //preg_match( '/[^\/dp\/]\w+(?=\/)/', $req['url'], $asin );
            $data = $req;
            $originalData = $req;
            $originalData['imageUrl'] = str_replace( '_SS40_', '_SS300_', $req['img'] );
            //$originalData['sku'] = $asin[0];
            $originalData['qty'] = $req['qty'];
            if (array_key_exists( 'product_dimensions', $data ) or array_key_exists( 'package_dimensions', $data )) {
                $originalData['dimension'] = $this->getValue( $data['product_dimensions'] ?? $data['package_dimensions'] );
                $originalData['product_dimension_unit'] = $this->getUnit( $data['product_dimensions'] ?? $data['package_dimensions'] );
            }

            if (array_key_exists( 'item_weight', $data )) {
                $originalData['item_weight'] = $this->getValue( $data['item_weight'] );
                $originalData['item_weight_unit'] = $this->getUnit( $data['item_weight'] );
            } elseif (array_key_exists( 'product_dimensions', $data ) && !array_key_exists( 'package_dimensions', $data )) {
                $originalData['item_weight'] = $this->itemWeightFromDimension( $data['product_dimensions'] );
                $originalData['item_weight_unit'] = $this->itemUnitFromDimension( $data['product_dimensions'] );

            }

            if (array_key_exists( 'shipping_weight', $data )) {
                $originalData['item_weight'] = $this->getValue( $data['shipping_weight'] );
                $originalData['item_weight_unit'] = $this->getUnit( $data['shipping_weight'] );
            }

            $originalData['item_weight'] = $originalData['item_weight'] ?? 0;
            $originalData['available_quantity'] = $this->availableItem( $data['availability'] );
            $originalData['volumetric_weight'] = 0;
            $originalData['user_id'] = $request->userId;
            $originalData['session_id'] = $request->sessionId;

            $currentPrice = str_replace( ['$', ','], '', $originalData['current_price'] ?? $originalData['item_price'] ?? null );
            $currentPrice = str_replace( ' ', '.', trim( $currentPrice ) );
            $itemPrice = str_replace( ['$', ','], '', $originalData['item_price'] ?? $originalData['current_price'] ?? null );
            $itemPrice = str_replace( ' ', '.', trim( $itemPrice ) );
            $discount = str_replace( ['$', ','], '', $originalData['discount_price'] ?? null );
            $discountEndAt = $originalData['discount_expire'] ?? null;

            if ($discountEndAt) {
                $discountEndAt = str_ireplace( 'Ends in ', '', $discountEndAt );
                $discountEndAt = str_ireplace( 'Ends in ', '', $discountEndAt );
                $discountEndAt = \Carbon\Carbon::now()->add( \Carbon\CarbonInterval::fromString( $discountEndAt ) )->toDateTimeString();
            }


            //if item price is not available then set the shipping cost as zero (0)
            if (!$itemPrice) {
                $originalData['shipping_cost'] = 0;
            }

            $item = Item::whereSessionId( $originalData['session_id'] )->whereOrderId( null )->where( 'sku', $originalData['sku'] )->first();
            if (!$item) {
                $pm = ProductMeasurement::where( 'sku', $originalData['sku'] )->first();
                if ($pm && $pm->approved_weight > 0) {
                    $originalData['volumetric_weight'] = $pm->approved_weight;
                } else {
                    $itemWeight = $this->weightCalculate( $originalData );
                    $originalData['item_weight'] = !empty( $originalData['item_weight'] ) ? $originalData['item_weight'] . ' ' . $originalData['item_weight_unit'] : 0;
                    $originalData['dimension'] = !empty( $originalData['dimension'] ) ? $originalData['dimension'] . ' ' . $originalData['product_dimension_unit'] : 0;
                    if (empty( $pm )) {
                        $pm = ProductMeasurement::create( [
                            'title' => $originalData['title'],
                            'sku' => $originalData['sku'],
                            'weight' => $originalData['item_weight'],
                            'dimension' => $originalData['dimension'],
                            'volumetric_weight' => $itemWeight ?? 0,
                            'approved_by' => false,
                        ] );
                        $pm->save();
                    }

                    if (!$itemWeight) {
                        if (!$itemWeight && isset( $originalData['category'] )) {
                            $categories = explode( '>', $originalData['category'] );
                            krsort( $categories );
                            foreach ($categories as $category) {
                                $reviewCategory = ProductMeasurementCategory::whereTitle( trim( $category ) )->first();
                                if ($reviewCategory) {
                                    $originalData['volumetric_weight'] = $reviewCategory->volumetric_weight;
                                    break;
                                }
                            }
                        }

                    } else {
                        $originalData['volumetric_weight'] = $itemWeight;
                    }
                }
                $item = new Item();
                $originalData['weight'] = $originalData['item_weight'];
                $item->fill( $originalData );
                $item->store_id = 1;
                $item->save();
                $itemprice['discount'] = $discount;
                $itemprice['current_price'] = $currentPrice;
                $itemprice['item_price'] = $itemPrice;
                $itemprice['item_id'] = $item->id;
                $itemprice['discount_end_at'] = $discountEndAt;
                $itemprice['quantity'] = $originalData['qty'];
                $itemprice['shipping_cost'] = $originalData['shipping_cost'] ?? 0;
                $item->itemPrice()->create( $itemprice );
            } elseif ($item->itemPrice && ($item->itemPrice->item_price !== $itemPrice || $item->itemPrice->current_price !== $currentPrice)) {
                $item->itemPrice->item_price = $itemPrice;
                $item->itemPrice->current_price = $currentPrice;
                $item->itemPrice->discount = $discount;
                $item->itemPrice->shipping_cost = $originalData['shipping_cost'] ?? 0;;
                $item->itemPrice->quantity += 1;
                $item->itemPrice->discount_end_at = $discountEndAt;
                $item->itemPrice->save();
            } elseif (!$item->itemPrice) {
                $itemprice['discount'] = $discount;
                $itemprice['current_price'] = $currentPrice;
                $itemprice['item_price'] = $itemPrice;
                $itemprice['item_id'] = $item->id;
                $itemprice['discount_end_at'] = $discountEndAt;
                $itemprice['quantity'] = $originalData['qty'];
                $itemprice['shipping_cost'] = $originalData['shipping_cost'] ?? 0;
                $item->itemPrice()->create( $itemprice );
            }
        }
        return response()->json( ['message' => 'product details', $request->items], 200 );
    }

}