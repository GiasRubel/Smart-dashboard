<?php

namespace App\Traits;

trait AddressTrait{
    public function addressDecider($country_code = 'BD', $origin = null) {

        if ($origin == config('settings.shopnshipbd_url')){
            return collect([
                "address" => config('settings.bangladesh_local_address'),
                "domain" => 'ShopnShipbd',
                'logo_heaer' => asset('email/images/logo/shopnshipbd_header.png'),
                'logo_footer' => asset('email/images/logo/shopnshipbd_footer.png')
            ]);
        }

        if ($origin == config('settings.shopnshippk_url')){
            return collect([
                "address" => config('settings.pakistan_local_address'),
                "domain" => 'ShopnShipPk',
                'logo_header' => asset('email/images/logo/shopnshippk_header.png'),
                'logo_footer' => asset('email/images/logo/shopnshippk-footer.png')
            ]);
        }

        if ($country_code == 'BD'){
            return collect([
                "address" => config('settings.bangladesh_local_address'),
                "domain" => 'ShopnShipbd',
                'logo_heaer' => asset('email/images/logo/shopnshipbd_header.png'),
                'logo_footer' => asset('email/images/logo/shopnshipbd_footer.png')
            ]);
        }

        if ($country_code == 'PK'){
            return collect([
                "address" => config('settings.pakistan_local_address'),
                "domain" => 'ShopnShipPk',
                'logo_heaer' => asset('email/images/logo/shopnshippk_header.png'),
                'logo_footer' => asset('email/images/logo/shopnshippk-footer.png')
            ]);
        }


        return collect([
            "address" => config('settings.bangladesh_local_address'),
            "domain" => 'ShopnShipbd',
            'logo_heaer' => asset('email/images/logo/shopnshipbd_header.png'),
            'logo_footer' => asset('email/images/logo/shopnshipbd_footer.png')
        ]);
    }
}