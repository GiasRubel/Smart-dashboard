<?php
return [
    'front_end_url' => 'http://' . env( 'BASE_DOMAIN', 'shopnshipbd' ),
    'base_domain' => env( 'BASE_DOMAIN', 'shopnshipbd.bd' ),
    'ebay_sub_domain' => env( 'EBAY_SUB_DOMAIN', 'shop-02-xo-us' ),
    'proxy_id_pass' => env( 'PROXY_ID_PASS', '142.93.187.108:8181' ),
    'user_agent_mobile' => env( 'USER_AGENT_MOBILE', 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1' ),
    'user_agent_desktop' => env( 'USER_AGENT_DESKTOP', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.96 Safari/537.36' ),
    'cookie_base_path' => env( 'COOKIE_BASE_PATH', '/nfs_tmp' ),
];

