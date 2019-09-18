@extends('email.layout.master')
@section('content')
    @php
        $currency = $conversion_rate > 1 ? 'BDT ' : '$';
    @endphp
    <table border="0" width="100%" align="center" cellpadding="0" cellspacing="0" style="width:100%;max-width:100%;">
        <tr>
            <td class="bodyBgColor" align="center" valign="top" bgcolor="#F9F9F9">
                <!-- Bg Color Open // -->
                <table class="row" border="0" width="700" align="center" cellpadding="0" cellspacing="0"
                       style="width:700px;max-width:700px;">
                    <tr>
                        <td class="whiteBgColor" align="center" valign="top" bgcolor="#FFFFFF">
                            <!-- E-mail Container Section Open // -->
                            <table class="row" width="600" align="center" border="0" cellpadding="0" cellspacing="0"
                                   style="width:600px;max-width:600px;">
                                <tr>
                                    <td class="containerPadding" align="center" valign="top">


                                        <!-- Title -->
                                        <table border="0" width="100%" align="center" cellpadding="0" cellspacing="0"
                                               style="width:100%;max-width:100%;">
                                            <tr>
                                                <td class="imgResponsive" align="center" valign="middle" style="padding:0;">
                                                    <singleline style="text-align: left;">
                                                        <strong style=" float: left; padding: 10px 0;">Dear {{ $user->name }}</strong><br>
                                                        <p style="line-height: 1.4; font-weight: normal">Some of your items do not have any weight or price.
                                                            For that reason, you could not proceed with your order and your products were being under review of our technical team.
                                                            Our technical team has reviewed your products and added the weight of your products. Now you can proceed with your order.
                                                            You can find it in order section of your dashboard.</p>
                                                    </singleline>
                                                </td>
                                            </tr>
                                        </table>
                                        <!-- End Title -->
                                        <!-- Message -->
                                        <table style="margin: 30px 0; width: 100%;" border="1">
                                            <thead>
                                                <tr>
                                                    <th style="padding: 5px 10px;text-align: left;">Item Name</th>
                                                    <th style="padding: 5px 10px;text-align: center;">Weight</th>
                                                    <th style="padding: 5px 10px;text-align: center;">Quantity</th>
                                                    <th style="padding: 5px 10px;text-align: right;">Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                @foreach($order->items as $item)
                                                    <tr>
                                                        <td style="padding: 5px 10px;text-align: left;">
                                                            {{  $item->title ?? $item->url }}
                                                        </td>
                                                        <td style="padding: 5px 10px;text-align: center;">{{ $item->item_weight_kg }} kg</td>
                                                        <td style="padding: 5px 10px;text-align: center;">{{  optional($item->itemPrice)->quantity }}</td>
                                                        <td style="padding: 5px 10px;text-align: right;">{{ $currency }}{{ number_format(optional($item->itemPrice)->price * $conversion_rate, 2, '.', '') }}</td>
                                                    </tr>
                                                @endforeach
                                                <tr>
                                                    <td colspan="3" style="padding: 5px 10px; font-weight: 600; text-align: center;">Product Cost </td>
                                                    <td colspan="1" style="padding: 5px 10px; font-weight: 600;text-align: center;">{{ $currency }}{{ number_format($order->total_price * $conversion_rate, 2, '.', '') }}</td>
                                                </tr>
                                                <tr>
                                                    <td colspan="3" style="padding: 5px 10px; font-weight: 600; text-align: center;">US Taxes</td>
                                                    <td colspan="1" style="padding: 5px 10px; font-weight: 600;text-align: center;">{{ $currency }}{{ number_format($order->tax_usa * $conversion_rate, 2, '.', '') }}</td>
                                                </tr>
                                                <tr>
                                                    <td colspan="3" style="padding: 5px 10px; font-weight: 600; text-align: center;">International Shipping </td>
                                                    <td colspan="1" style="padding: 5px 10px; font-weight: 600;text-align: center;">{{ $currency }}{{ number_format($order->shipping_cost * $conversion_rate, 2, '.', '') }}</td>
                                                </tr>
                                                @if($order->items_shipping_cost > 0)
                                                    <tr>
                                                        <td colspan="3" style="padding: 5px 10px; font-weight: 600; text-align: center;">Items shipping cost</td>
                                                        <td colspan="1" style="padding: 5px 10px; font-weight: 600;text-align: center; ">
                                                            {{ $currency }}{{ number_format($order->items_shipping_cost * $conversion_rate, 2, '.', '') }}
                                                        </td>
                                                    </tr>
                                                @endif
                                                <tr>
                                                    <td colspan="3" style="padding: 5px 10px; font-weight: 600; text-align: center;">Local Customs and Taxes </td>
                                                    <td colspan="1" style="padding: 5px 10px; font-weight: 600;text-align: center;">{{ $currency }}{{ number_format($order->tax_bd * $conversion_rate, 2, '.', '') }}</td>
                                                </tr>
                                                <tr>
                                                    <td colspan="3" style="padding: 5px 10px; font-weight: 600; text-align: center;">Service Charge </td>
                                                    <td colspan="1" style="padding: 5px 10px; font-weight: 600;text-align: center;">{{ $currency }}{{ number_format($order->service_charge * $conversion_rate, 2, '.', '') }}</td>
                                                </tr>
                                                <tr>
                                                    <td colspan="3" style="padding: 5px 10px; font-weight: 600; text-align: center;">Grand price</td>
                                                    <td colspan="1" style="padding: 5px 10px; font-weight: 600;text-align: center; border-top: 1px solid #e4425c;">{{ $currency }}{{ number_format($order->master_price * $conversion_rate, 2, '.', '') }}</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <table border="0" width="100%" align="center" cellpadding="0" cellspacing="0"
                                               style="width:100%;max-width:100%;">
                                            <tr>
                                                <td class="imgResponsive" align="center" valign="middle" style="padding:0;">
                                                    <singleline style="text-align: left;">
                                                        <p style="line-height: 1.4; font-weight: normal">If you want to continue your shopping, select the payment method and proceed your order. Thanks for being with us patiently. Happy shopping with ShopnShipBd.</p>
                                                    </singleline>
                                                </td>
                                            </tr>
                                        </table>
                                        <table border="0" width="100%" align="center" cellpadding="0" cellspacing="0" style="width:100%;max-width:100%;">
                                            <tr>
                                                <td align="center" valign="middle" height="80" style="font-size:80px;line-height:80px;">
                                                    <a href="{{ config('configuration.front_end_url') ."/user/$order->user_id/order-details/$order->id" }}" style="text-decoration:none; padding: 8px 15px; background:#e4425c; font-size: 16px; color: #fff; border-radius: 15px;">View full details</a>
                                                </td>
                                            </tr>
                                        </table>
                                        <table border="0" width="100%" align="center" cellpadding="0" cellspacing="0" style="width:100%;max-width:100%;">
                                            <tr>
                                                <td class="imgResponsive" align="center" valign="middle" style="padding:0;">
                                                    <singleline style="text-align: left;">
                                                        <p style="line-height: 1.4; font-weight: normal">We are here to help (Call-  +88 096 1770 7707 or visit us online for expert assistance).
                                                            Our guarantee (Your satisfaction is 100% guaranteed. See our Returns and Exchanges policy)</p>
                                                    </singleline>
                                                </td>
                                            </tr>
                                        </table>
                                        <table border="0" width="100%" align="center" cellpadding="0" cellspacing="0" style="width:100%;max-width:100%;">
                                            <tr>
                                                <td align="center" valign="middle">&nbsp;</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            <!-- E-mail Container Section Close // -->
                        </td>
                    </tr>
                </table>
                <!-- Bg Color Close // -->
            </td>
        </tr>
    </table>
    <!-- Image Column Section Close // -->
@endsection

<style scoped>
    .items table tr th{
        border: 1px solid #ddd;
    }
    .items tr td{
        border: 1px solid #ddd;
    }
</style>