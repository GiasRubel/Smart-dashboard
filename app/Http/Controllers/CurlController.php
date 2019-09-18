<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;

class CurlController
{
    private $base = '';
    protected $baseName = 'amazon';
    private $proxy = '';
    private $proxyPass = '';
    private $uniqueId = '';
    private $headers = [];

    public function __construct()
    {

        $this->base = 'http://www.' . $this->baseName . '.com';
        $this->proxy = env('PROXY');
        $this->proxyPass = env('PROXY_PASS');
    }

    public function index(Request $request)
    {
        try {
            $content = $this->curlRequest();
            if ($request->ajax() || $request->pjax()) {
                return response($content)->header('Content-Type', $this->headers['Content-Type'] ?? 'application/json');
            }

         return view($this->baseName . '.home', with(['data' => $content]));
            //echo $content;
//            echo str_replace('https://ebay.com/','http://'.config( 'configuration.base_domain' ).'/',$content);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
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

    public function curlHeader($response)
    {
        $header_text = substr($response, 0, strpos($response, "\r\n\r\n"));

        foreach (explode("\r\n", $header_text) as $i => $line)
            if ($i === 0)
                $this->headers['http_code'] = $line;
            else {
                list ($key, $value) = explode(': ', $line);
                $this->headers[$key] = $value;
            }
    }
    public function grequest(){
        $client=new Client();
        $response=$client->get('https://www.amazon.com'.$_SERVER['REQUEST_URI']);
       echo (string)$response->getBody();
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
        $request_headers[] = 'Accept-Encoding:' . $request->header('accept-encoding');


        $ch = curl_init();
        curl_setopt($ch, CURLOPT_ENCODING ,"");
        curl_setopt($ch, CURLOPT_URL, $this->parseUrl($request));

        if ($method === 'post') {
            curl_setopt( $ch, CURLOPT_POST, 1 );
            curl_setopt( $ch, CURLOPT_POSTREDIR, 3 );
            curl_setopt( $ch, CURLOPT_POSTFIELDS, $request->getContent() );


        } else {
            if ($request->header('accept-encoding')) {
                $request_headers[] = 'Accept-Encoding:' . $request->header('accept-encoding');
            }
        }
        curl_setopt($ch, CURLOPT_HTTPHEADER, $request_headers);
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['X-Forwarded-For: http://www.ebay.com']);
        curl_setopt($ch, CURLOPT_REFERER, "http://www.ebay.com");
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_COOKIEJAR, public_path() . '/cookie.txt');
        curl_setopt($ch, CURLOPT_COOKIEFILE, public_path() . '/cookie.txt');
//        curl_setopt($ch, CURLOPT_PROXY, $this->proxy);
//        curl_setopt($ch, CURLOPT_PROXYUSERPWD, $this->proxyPass);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_VERBOSE, true);

        $retry = 0;
        do {
            $response = curl_exec($ch);
            $retry++;
        } while (curl_errno($ch) == 28 && $retry < 3 || $response == false);

        $this->curlHeader($response);
        curl_close($ch);

        return $response;
    }

    public function parseUrl(Request $request)
    {
        return str_replace($request->root(), $this->base, $request->fullUrl());
    }

}
