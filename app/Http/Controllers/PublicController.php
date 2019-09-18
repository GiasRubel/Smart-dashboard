<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\CurlController;


class PublicController
{
    private $host = '';
    private $basehost = '';
    private $base = '';
    private $baseName = '';
    private $proxy = '';
    private $proxyPass = '';
    private $uniqueId = '';

    public function __construct()
    {
        $this->host = str_replace(config( 'configuration.base_domain' ), 'com', request()->getHost());
        $this->basehost = str_replace('cart.', '', $this->host);
        $this->base = 'https://www.' . $this->host;
        $this->baseName = str_replace('.com', '', $this->host);
        $this->proxy = 'http://zproxy.lum-superproxy.io:22225';
        $this->proxyPass = 'lum-customer-hl_f0346cc4-zone-static-country-us:emeo0xr0lrhr';
//        if (request()->header('uniqueid')) {
//            $this->uniqueId = request()->header('uniqueid');
//            session('uniqueId');
//        } else {
//            $this->uniqueId = $this->generateUniqId();
//            session('uniqueId', $this->uniqueId);
//
//        }
    }

    public function generateUniqId()
    {
        return uniqid();
    }
    public function checkout(){
        dd('checkout');
    }
    public function index(Request $request)
    {
        try {
            $content = $this->curlRequest();
            if ($request->ajax() || $request->pjax()) {
                $header = $this->curlHeader();
                return response($content)->header('Content-Type', $header['Content-Type']);
            }

            return view($this->baseName . '.home', with(['data' => $content]));

        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function getCartItem(Request $request)
    {
        //return $request->all();
//        $weight = $this->getWeight($this->curlDetail('asin'), $iweight, $wtypep, $wtypeo);
        $dimension = preg_replace('/\s+/', '', $this->getBetween($this->curlDetail('asin'), 'Product Dimensions', 'inches'));
        session(['carts' => $request->products]);
        return response(['message' => 'Successfully added']);
    }

    public function curlRequest($method = 'get')
    {
        $request = request();

        $request_headers = array();
        $request_headers[] = 'User-Agent:' . $request->header('user-agent');
        if ($request->header('accept')) {

            $request_headers[] = 'Accept:' . $request->header('accept');
        }
        if ($request->getContentType()) {

            $request_headers[] = 'Content-Type:' . $request->getContentType();
        }
        if ($request->header('accept-language')) {

            $request_headers[] = 'Accept-Language:' . $request->header('accept-language');
        }

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $this->parseUrl($request));

        if ($method === 'post') {
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $request->getContent());

        } else {
            if ($request->header('accept-encoding')) {
                $request_headers[] = 'Accept-Encoding:' . 'UTF-8';
            }
        }
        curl_setopt($ch, CURLOPT_HTTPHEADER, $request_headers);
//        curl_setopt($ch, CURLOPT_HTTPHEADER, ['X-Forwarded-For: http://www.en-jo.alpha-secure.shop.cashbasha.com']);
        curl_setopt($ch, CURLOPT_COOKIEJAR, public_path() . '/' . 'cookie.txt');
        curl_setopt($ch, CURLOPT_COOKIEFILE, public_path() . '/' . 'cookie.txt');
//        curl_setopt($ch, CURLOPT_PROXY, $this->proxy);
//        curl_setopt($ch, CURLOPT_PROXYUSERPWD, $this->proxyPass);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_VERBOSE, true);
        $response = curl_exec($ch);
        $retry = 0;
        while (curl_errno($ch) == 28 && $retry < 3) {
            $response = curl_exec($ch);
            $retry++;
        }

        curl_close($ch);

        return $response;
    }

    public function parseUrl(Request $request)
    {
        return str_replace($request->root(), $this->base, $request->fullUrl());
    }

    public function curlHeader()
    {
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, $this->parseUrl(request()));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_HEADER, 1);

        $response = curl_exec($ch);
        $headers = array();

        $header_text = substr($response, 0, strpos($response, "\r\n\r\n"));

        foreach (explode("\r\n", $header_text) as $i => $line)
            if ($i === 0)
                $headers['http_code'] = $line;
            else {
                list ($key, $value) = explode(': ', $line);

                $headers[$key] = $value;
            }

        return $headers;
    }

    public function curlDetail($asin)
    {
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, "https://www.amazon.com/dp/$asin");

        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($ch, CURLOPT_POSTREDIR, 3);
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['X-Forwarded-For: http://www.en-jo.alpha-secure.shop.cashbasha.com']);
        curl_setopt($ch, CURLOPT_PROXY, $this->proxy);
        curl_setopt($ch, CURLOPT_PROXYUSERPWD, $this->proxyPass);
        curl_setopt($ch, CURLOPT_VERBOSE, true);
        $response = curl_exec($ch);
        return $response;
    }

    public function getBetween($content, $start, $end)
    {
        $r = explode($start, $content);
        if (isset($r[1])) {
            $r = explode($end, $r[1]);
            return $r[0];
        }
        return '';
    }

    public function getWeight($response, $iweight, $wtypep, $wtypeo)
    {
        if ($iweight) {
            if ($wtypep) {
                return preg_replace('/\s+/', '', $this->getBetween($response, $iweight, $wtypep)).$wtypep;
            }
            return preg_replace('/\s+/', '', $this->getBetween($response, $iweight, $wtypeo)).$wtypeo;
        }
        return null;
    }

    public function post(Request $request)
    {
        try {
            return $this->curlRequest('post');
        } catch (\Exception $e) {
            $data['success'] = true;
            $html = view('login_info');
            $data['html'] = $html->render();
            return response()->json($data);
        }

    }

    public function setHeaders(Request $request)
    {
        $headers = $this->getHeaders($request);
        $headers['referer'] = $this->parseUrl($request);
        $headers[':authority'] = $this->base;
        $headers['content-type'] = 'application/x-www-form-urlencoded';
        $headers['Accept'] = 'application/json';

        unset($headers['content-length']);
        unset($headers['host']);
        unset($headers['origin']);
        unset($headers['cookie']);

        return $headers;
    }

    public function getHeaders(Request $request)
    {
        $headers = [];
        foreach ($request->headers->all() as $key => $head) {
            $headers[$key] = $head[0];
        }
        return $headers;
    }

    public function cart()
    {
        return view($this->baseName . '.cart');
    }

}