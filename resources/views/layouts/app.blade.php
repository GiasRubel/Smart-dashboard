<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>

<body>
<div class="app flex-row align-items-center">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                @yield('content')
            </div>
        </div>
    </div>
</div>
<script src="{{ mix('backend/js/manifest.js') }}"></script>
<script src="{{ mix('backend/js/vendor.js') }}"></script>
<script src="{{ mix('backend/js/app.js') }}"></script>
</body>
</html>