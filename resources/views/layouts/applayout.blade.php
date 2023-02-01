<!DOCTYPE html>
<html lang="en">
	<head>
		<!-- Meta -->
		<meta charset="utf-8">
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<meta name="description" content="">
		<meta name="author" content="">
	    <meta name="keywords" content="MediaCenter, Template, eCommerce">
	    <meta name="robots" content="all">

	    <title>Điện Máy Thợ Việt - Cung Cấp hàng Chính Hãng</title>

	    <!-- Bootstrap Core CSS -->
	    <link rel="stylesheet" href="{{asset('assets/css/bootstrap.min.css')}}">
	    
	    <!-- Customizable CSS -->
	    <link rel="stylesheet" href="{{asset('assets/css/main.css')}}">
	    <link rel="stylesheet" href="{{asset('assets/css/green.css')}}">
	    <link rel="stylesheet" href="{{asset('assets/css/owl.carousel.css')}}">
		<link rel="stylesheet" href="{{asset('assets/css/owl.transitions.css')}}">
		<!--<link rel="stylesheet" href="'assets/css/owl.theme.css">-->
		<link href="{{asset('assets/css/lightbox.css')}}" rel="stylesheet">
		<link rel="stylesheet" href="{{asset('assets/css/animate.min.css')}}">
		<link rel="stylesheet" href="{{asset('assets/css/rateit.css')}}">
		<link rel="stylesheet" href="{{asset('assets/css/bootstrap-select.min.css')}}">

		<!-- Demo Purpose Only. Should be removed in production -->
		<link rel="stylesheet" href="{{asset('assets/css/config.css')}}">

		<link href="{{asset('assets/css/green.css')}}" rel="alternate stylesheet" title="Green color">
		<link href="{{asset('assets/css/blue.css')}}" rel="alternate stylesheet" title="Blue color">
		<link href="{{asset('assets/css/red.css')}}" rel="alternate stylesheet" title="Red color">
		<link href="{{asset('assets/css/orange.css')}}" rel="alternate stylesheet" title="Orange color">
		<link href="{{asset('assets/css/dark-green.css')}}" rel="alternate stylesheet" title="Darkgreen color">
		<link rel="stylesheet" href="{{asset('assets/css/font-awesome.min.css')}}">
		<link href='http://fonts.googleapis.com/css?family=Roboto:300,400,500,700' rel='stylesheet' type='text/css'>
		
		<!-- Favicon -->
		<link rel="shortcut icon" href="{{asset('assets/images/favicon.ico')}}">

	</head>
<body class="hompage cnt-home">
    @include('layouts.menu')
    <div class="body-content outer-top-xs" id="top-banner-and-menu">
        <div class="container">

            @yield('content')
            
        @include('includes.brands-slider')
        </div><!-- /.container -->
    </div>  
    @include('layouts.footer')
    @yield('scripts')<script src="{{asset('assets/js/jquery-1.11.1.min.js')}}"></script>
	

    <!--js---->
	<script src="{{asset('assets/js/bootstrap.min.js')}}"></script>
	
	<script src="{{asset('assets/js/bootstrap-hover-dropdown.min.js')}}"></script>
	<script src="{{asset('assets/js/owl.carousel.min.js')}}"></script>
	
	<script src="{{asset('assets/js/echo.min.js')}}"></script>
	<script src="{{asset('assets/js/jquery.easing-1.3.min.js')}}"></script>
	<script src="{{asset('assets/js/bootstrap-slider.min.js')}}"></script>
    <script src="{{asset('assets/js/jquery.rateit.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('assets/js/lightbox.min.js')}}"></script>
    <script src="{{asset('assets/js/bootstrap-select.min.js')}}"></script>
    <script src="{{asset('assets/js/wow.min.js')}}"></script>
	<script src="{{asset('assets/js/scripts.js')}}"></script>

	<!-- For demo purposes – can be removed on production -->
	
	<script src="{{asset('switchstylesheet/switchstylesheet.js')}}"></script>
	
	<script>
		$(document).ready(function(){ 
			$(".changecolor").switchstylesheet( { seperator:"color"} );
			$('.show-theme-options').click(function(){
				$(this).parent().toggleClass('open');
				return false;
			});
		});

		$(window).bind("load", function() {
		   $('.show-theme-options').delay(2000).trigger('click');
		});
	</script>
	<!-- For demo purposes – can be removed on production : End -->

	<!--end js---->

</body>
</html>
