<?php

namespace App\Http\Controllers\API;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductSearchController extends Controller
{
    public function search(Request $request)
    {
        if ($request->domain) {
            $postUrl = 'http://' . $request->domain . '.' . config( 'configuration.base_domain' );
            $client = new Client();
            $data = $request->all();

            if (auth()->guard( 'api' )->id()) {
                $data['user_id'] = auth()->guard( 'api' )->id();
            }

            $response = $client->post( $postUrl, [
                'form_params' => $data] );
            if ($response) {
                return $response->getBody();
            }
        }
    }
}
