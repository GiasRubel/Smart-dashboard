<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <link rel="shortcut icon" type="image/x-icon" href="{{asset('images/favicon.png')}}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">


    <script>
        document.addEventListener("DOMContentLoaded", function (event) {
            document.getElementById("pollux-checkout-submit").addEventListener("click", function () {
                document.getElementById("pollux-checkout-submit").style.display = "none";
                document.getElementById("pollux-loading").style.display = "initial";
            });
        });
        document.addEventListener("DOMContentLoaded", function (event) {
            // Sometimes Amazon renders the navbar wider than browser window, set our bar width the same. TODO: Remove this if Amazon fixed the styling in the future.
            document.getElementById("pollux-bar").style.width = window.getComputedStyle(document.getElementById("navbar")).getPropertyValue('width');
        });
    </script>
    <style>

        * {
            box-sizing: border-box;
        }
        body{
            margin: 0;
            padding: 0;
            font-family: sans-serif;
            font-size: 100%;
        }

        body img {
            border: 0;
            vertical-align: middle;
        }

        .shop-main-header{
            width: 100%;
            padding: 10px 10% 0 10%;
            background-color: #44b3e6;
            overflow: hidden;
            height: auto;
            margin: auto 0;
        }
        .shop-main-header .shop-main-header-col{
            display: block;
            float: left;
            width: 33.33%;
        }

        .shop-main-header .shop-main-header-col .logo{
            margin: -5px;
        }

        .shop-main-header .shop-main-header-col .logo img{
            width: 150px;
        }

        .shop-main-header .shop-main-header-col span input{
            height: 30px;
            background-color: transparent;
            border: 1px solid #73ccf5;
        }
        .shop-main-header .shop-main-header-col span img{
            width: 30px;
        }

        .shop-main-header .shop-main-header-col .login{
            margin: 5px 0 0;
        }
        .shop-main-header .shop-main-header-col .login ul{
            margin: 0;
            padding: 0;
        }
        .shop-main-header .shop-main-header-col .login ul li{
            list-style: none;
            display: inline-block;
            padding: 0 15px;
        }

        .shop-main-header .shop-main-header-col .login ul .add-to-cart a{
            text-decoration: none !important;
        }
        .shop-main-header .shop-main-header-col .login ul .add-to-cart a img{
            width: 65px;
            display: block;
            margin: -16px 0 0 -18px;
        }
        .shop-main-header .shop-main-header-col .login ul .add-to-cart a span{
            display: block;
            color: #e4425c;
            width: 100%;
            text-align: center;
            margin: 2px 0 0px -17px;
        }
        .shop-main-header .shop-main-header-col .login ul li a{
            color: #fff;
        }
        .shop-main-header .shop-main-header-col .login ul li a img{
            width: 30px;
            padding: 0 5px;
        }
        .form-control{
            padding: 6px 15px 8px 15px;
            outline: none;
            background: transparent;
            border: 1px solid #fff;
            height: 33px;
            color: #4c4c4c;
            /*-webkit-appearance: none;*/
        }

        .shop-header-search form .search-by{
            /*width: 150px;*/
            float: left;
            display: block;
            margin: -12px 0 12px 0;
        }

        .shop-header-search form .box{
            /*width: 100px;*/
            /*margin-right: -10px;*/
        }

        .shop-header-search form .search-by input[type=text]{
            padding: 7px 10px 9px 10px;
            border: none;
            margin: 0 10px;
            height: 33px;
            outline: none;
            border-radius: 0;
        }

        .shop-header-search form .search-by input[type=text], input[type=placeholder]{
            color: #9d9d9d;
            text-align: center;
        }

        .shop-header-search form .search-by button{
            background-color: #e4425c;
            color: #fff;
            padding: 5px 10px 3px 10px;
            margin: 0 0 0 -4px;
            outline: none;
            border: none;
            border-radius: 0 10px 10px 0;
        }
        .shop-header-search form .search-by button:hover{
            background-color: #20c461;
        }
        .shop-header-search form .search-by button img{
            width: 25px;
        }
        /*Responsive Design*/
        @media only screen and (min-width: 1024px) and (max-width: 1279px){
            .shop-main-header .shop-main-header-col{
                width: 30%;
            }
            .shop-main-header .shop-main-header-col:last-child{
                width: 40%;
            }
        }
        @media only screen and (min-width: 768px) and (max-width: 1023px){
            .shop-main-header{
                padding: 15px 0 15px 15px;
            }
            .shop-main-header .shop-main-header-col{
                width: 30%;
            }
            .shop-main-header .shop-main-header-col:last-child{
                width: 40%;
            }
            .shop-main-header .shop-main-header-col .login ul li{
                padding: 0 8px;
            }
            .shop-main-header .shop-main-header-col:last-child .login ul li a img{
                width: 30px;
            }
            .shop-main-header .shop-main-header-col .login ul .add-to-cart a img{
                width: 65px !important;
            }
            .shop-main-header .shop-main-header-col:first-child{
                width:20%;
            }
            .shop-main-header .justify-column{
                width: 40%;
            }
            .shop-main-header .shop-main-header-col .brand{
                width:100px;
            }
            .shop-main-header {
                width: 114%;
            }
            .shop-main-header .shop-main-header-col .login {
                text-align: right;
            }
        }
        @media only screen and (max-width: 767px){
            .shop-main-header{
                padding: 15px 0 15px 15px;
            }
            .shop-main-header .shop-main-header-col{
                width: 50%;
                display: block;
            }
            .shop-main-header .shop-main-header-col .shop-header-search{
                margin: 0 0 0 -15px;
            }
            .shop-header-search .justify-form{
                margin: 15px 10%;
            }
            .shop-main-header .shop-main-header-col:last-child{
                width: 100%;
                padding-top: 10px;
            }
            .shop-main-header .shop-main-header-col:last-child .login ul li a img{
                width: 30px;
            }
            .shop-main-header .shop-main-header-col .login ul .add-to-cart a img{
                width: 65px !important;
            }
            .search-by{
                margin: 0 80px;
            }
            .shop-main-header .shop-main-header-col .login ul .add-to-cart a span {
                margin: 2px 0 0 -9px;
            }
        }
        @media only screen and (min-width: 425px) and (max-width: 767px){
            .shop-header-search .justify-form {
                margin: 15px 8%;
            }
            .shop-main-header .shop-main-header-col {
                width: 100%;
                display: block;
                text-align: center;
                border-bottom: 1px solid #41a7d6;
                padding: 10px 0;
            }
            .shop-main-header .shop-main-header-col .login ul .add-to-cart a span {
                margin: 2px 0 0 -17px;
            }
        }
        @media only screen and (min-width: 375px) and (max-width: 424px){
            .shop-main-header .shop-main-header-col{
                width: 100%;
                display: block;
                text-align: center;
                border-bottom: 1px solid #41a7d6;
                padding: 10px 0;
            }
            .shop-main-header .shop-main-header-col .login ul li{
                padding: 0 8px;
            }
            .shop-main-header .shop-main-header-col .login ul .add-to-cart a img {
                width: 40px;
                display: block;
                margin: -15px 0 0 -10px;
            }
            .shop-header-search .justify-form {
                margin: 15px 1%;
            }
        }
        @media only screen and (min-width: 320px) and (max-width: 374px){
            .shop-main-header .shop-main-header-col{
                width: 100%;
                display: block;
                text-align: center;
                border-bottom: 1px solid #41a7d6;
                padding: 10px 0;
            }
            .shop-main-header .shop-main-header-col .login ul li{
                padding: 0 8px;
            }
            .shop-main-header .shop-main-header-col .login ul .add-to-cart a img {
                width: 40px;
                display: block;
                margin: -15px 0 0 -10px;
            }
            .shop-header-search .justify-form {
                margin: 15px 0;
            }
            .shop-header-search form .search-by input[type="text"] {
                width: 135px;
            }
        }

        #desktop-banner {
            max-width: 1500px;
            margin: 0 auto;
        }

        #pageContent {
            max-width: none;
        }

        #pollux-bar {
            background-color: #282828;
            color: #ffffff;
            border-bottom: 3px solid #9d4241;
            height: 50px;
            padding: 0px 5px;
        }

        #pollux-bar form {
            margin-bottom: 8px;
        }

        #pollux-logo {
            margin: 5px 0px;
        }

        #pollux-loading {
            padding: 13px 44px 0px 44px;
            vertical-align: sub;
        }

        .pollux-right {
            float: right;
        }

        .pollux-clear {
            clear: both;
        }

        .pollux-btn {
            background-color: #e7776b;
            color: white;
            cursor: pointer;
            -webkit-appearance: button;
            border: 1px solid transparent;
            border-color: #9d4241;
            border-radius: 5px;
            border-width: 0px;
            border-bottom-width: 3px;
            display: inline-block;
            padding: 6px 12px;
            margin-top: 7px;
            margin-bottom: 0;
            font-size: 14px;
            font-weight: normal;
            line-height: 1.428571429;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            background-image: none;
        }

        .pollux-btn:hover, .pollux-btn:focus {
            background-color: #e75a4b;
            border-color: #9d4241;
        }

        .pollux-btn:active {
            border-bottom-width: 0px;
            border-top-width: 3px;
            background-image: none;
            outline: 0;
            box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
        }

        .pollux-btn img {
            vertical-align: middle;
        }

        .pollux-btn.pollux-checkout {
            padding-left: 28px;
            background-position: left 8px center;
            background-repeat: no-repeat;
            background-image: url({{asset('images/shopping-cart.png')}});
        }

        #pollux-checkout-message {
            vertical-align: middle;
            font-size: 16px;
        }

        #pollux-checkout-message img {
            vertical-align: middle;
        }

        @media (max-width: 768px) {
            #pollux-checkout-message {
                display: none;
            }
        }

        li.fake-tabs__item > a {
            height: auto !important;
        }

        .srp-grid .s-item__link {
            height: auto !important;
        }
        .sg-col-inner {
             height: auto !important;
        }

        #nav-link-accountList,
        #nav-orders,
        #nav-your-prime,
        #nav-wishlist,
        #nav-logobar-greeting,
        #nav-button-avatar,
        #nav-link-yourAccount,
        #nav-your-amazon,
        #nav-link-prime,
        #nav-link-wishlist,
        #nav-ftr-auth,
        #nav-ftr-links,
        #nav-global-location-slot,
        #smart-app-banner,
        #unifiedLocation_feature_div,nav-tools
        #buyNow,
        .nav-prime-try,
        .navFooterVerticalColumn,
        .nav-signin-tt.nav-flyout,
        .csm-widget-type-sign-in-card,
        .gw-sign-in,
        iframe[title=Advertisement],
        a[href^="//"] {
            display: none !important;
        }

        #nav-tools #nav-link-prime, #nav-tools #nav-link-accountList, #nav-tools #nav-orders, #nav-tools #icp-nav-flyout{
            display: none !important;
        }

        #a-page {
            position: relative !important;
        }

        #desktop-banner {
            max-width: 1500px;
            margin: 0 auto;
        }

        #pageContent {
            max-width: none;
        }

        ol.a-carousel {
            height: auto;
        }

        #vse-related-videos .a-carousel-card {
            min-height: auto;
        }

        #vse-rel-videos-carousel .a-carousel-row-inner {
            height: auto;
        }

        .fresh-shoveler .feed-carousel .feed-carousel-card:before {
            height: auto !important;
        }

        .a-carousel-row-inner {
            height: auto !important;
        }

    </style>
    @stack('style')
</head>
<body>
<div class="shop-main-header">
    <div class="shop-main-header-col">
        <div class="logo">
            <a href="{{env('APP_URL')}}">
                <img src="{{env('APP_URL')}}images/logo/logo.png">
            </a>
        </div>
    </div>
    <div class="shop-main-header-col justify-column">
        <div class="shop-header-search">
            <form class="justify-form">
                <div class="search-by box">
                    <input type="text" placeholder="Search" class="form-control">
                </div>
                <div class="search-by">
                    <select class="form-control brand">
                        <option value ="1">Amazon</option>
                        <option value ="1">Ebay</option>
                        <option value ="1">Overstock</option>
                    </select>
                    <button><img src="{{env('APP_URL')}}images/icon/search.png"></button>
                </div>
            </form>
        </div>
    </div>
    <div class="shop-main-header-col">
        <div class="login">
            <ul>
                <li>
                    <a href="">
                        <img src="{{env('APP_URL')}}images/icon/location.png">Bangladesh
                    </a>
                </li>

                <li >
                    <a href="{{env('APP_URL')}}login">Login
                        <img src="{{env('APP_URL')}}images/icon/login.png">
                    </a>
                </li>
                <li class="add-to-cart">
                    <a href="{{env('APP_URL')}}cart">
                        <span>2 </span>
                        <img src="{{env('APP_URL')}}images/icon/cart.png">
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
@yield('content')

<script>
    function createCookie(name,value,days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            var expires = "; expires="+date.toGMTString();
        }
        else var expires = "";
        document.cookie = name+"="+value+expires+"; path=/";
    }

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    function eraseCookie(name) {
        createCookie(name,"",-1);
    }
//    createCookie('uniqueid','hello123',5)


    document.addEventListener("DOMContentLoaded", function () {
        var host = document.location.host;
        host = host.replace(/\.{{config( 'configuration.base_domain' )}}/gi, '');
        host = 'https://www.' + host + '.com/';
        console.log(host)
        var aTag = document.body.getElementsByTagName('a');
        console.log(aTag[0].href)

        if (aTag.length) {
            for (var i = 0; i <= aTag.length; i++) {
                if (aTag[i] && aTag[i].href && aTag[i].href.search(host) === 0) {
                    aTag[i].href ? aTag[i].href = aTag[i].href.replace(new RegExp(host, 'g'), '/') : '';
                }
                console.log(aTag[i].href)
            }
        }
    });
</script>
<script src="{{asset('js/app.js')}}"></script>
<script src="{{asset('js/helper.js')}}"></script>
@stack('script')
</body>
</html>
