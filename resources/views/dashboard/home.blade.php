<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="icon" type="image/png" href="{{asset('images/icon/favicon.png')}}">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ mix('backend/css/style.css') }}">
    <link rel="stylesheet" href="{{ mix('backend/css/responsive.css') }}">



    <title>ShopnShipBD</title>

    <script>
        window.Laravel = {!! json_encode([
			'csrfToken' => csrf_token(),
		]) !!};
    </script>

    <!-- BODY options, add following classes to body to change options

    // Header options
    1. '.header-fixed'					- Fixed Header

    // Sidebar options
    1. '.sidebar-fixed'					- Fixed Sidebar
    2. '.sidebar-hidden'				- Hidden Sidebar
    3. '.sidebar-off-canvas'		- Off Canvas Sidebar
    4. '.sidebar-compact'				- Compact Sidebar Navigation (Only icons)

    // Aside options
    1. '.aside-menu-fixed'			- Fixed Aside Menu
    2. '.aside-menu-hidden'			- Hidden Aside Menu
    3. '.aside-menu-off-canvas'	- Off Canvas Aside Menu

    // Footer options
    1. '.footer-fixed'						- Fixed footer

    -->
</head>
<body class="app header-fixed sidebar-fixed aside-menu-fixed aside-menu-hidden">
<div id="dashboard"></div>
<script src="{{ mix('backend/js/manifest.js') }}"></script>
<script src="{{ mix('backend/js/vendor.js') }}"></script>
<script src="{{ mix('backend/js/app.js') }}"></script>
</body>
</html>
