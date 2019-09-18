<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use GuzzleHttp\Client;

class MetaInfoController extends Controller
{
    /**
     * @param Request $request
     * @return array
     */
    public function getMeta(Request $request){
        $request->validate([
            'link' => 'required'
        ]);
        libxml_use_internal_errors(true);
        $link = $request->link;
        try{
            $client = new Client();
            $html = $client->get($link, [
                'proxy' => config('configuration.proxy_id_pass'),
                'timeout' => 20,
                'connect_timeout' => 20,
                'User-Agent' => 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',

            ]);
            $html = $html->getBody()->getContents();
            $html = preg_replace( '#<script(.*?)>(.*?)</script>#is', '', $html );
            $html = preg_replace( '#<style(.*?)>(.*?)</style>#is', '', $html );
            $xml = new \DOMDocument();
            $xml->loadHTML($html);
        }catch (\Exception $exception){
            return [];
        }
        $meats = array();
        foreach($xml->getElementsByTagName('meta') as $meta) {
            $exploded = explode(':', $meta->getAttribute('property'));
            if (isset($exploded[0]) && $exploded[0] == 'og'){
                $meats[$exploded[1]] =  $meta->getAttribute('content');
            }
        }
        if (!count($meats)){
            foreach ($xml->getElementsByTagName('meta') as $meta){
                if ($meta->getAttribute('name') != ''){
                    $meats[$meta->getAttribute('name')] = $meta->getAttribute('content');
                }
            }
        }
        return $meats;
    }
}
