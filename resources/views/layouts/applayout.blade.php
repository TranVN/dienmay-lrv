
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Điện Máy Thợ Việt – Cung Cấp hàng Chính Hãng</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="author" content="">
    <meta name="keywords" content="">
    <meta name="description" content="">
    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/normalize.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('assets/fonts/icomoon.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/vendor.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/style.css')}}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&family=Poiret+One&display=swap" rel="stylesheet">
</head>



<body class="hompage">
    @include('layouts.menu')
    @yield('content')


    @include('layouts.footer')
    @yield('scripts')
</body>

</html>
