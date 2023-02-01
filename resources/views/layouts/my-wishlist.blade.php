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

	    <title>My Wishlist</title>
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
    <body class="cnt-home">
<header class="header-style-1">

	<!-- ============================================== TOP MENU ============================================== -->
    @include('includes.top-header')
    @include('includes.main-bar')
    @include('includes.menu-bar')
<!-- ============================================== NAVBAR : END ============================================== -->

</header>

<!-- ============================================== HEADER : END ============================================== -->
<div class="breadcrumb">
	<div class="container">
		<div class="breadcrumb-inner">
			<ul class="list-inline list-unstyled">
				<li><a href="home.html">Home</a></li>
				<li class='active'>Wishlish</li>
			</ul>
		</div><!-- /.breadcrumb-inner -->
	</div><!-- /.container -->
</div><!-- /.breadcrumb -->

<div class="body-content outer-top-bd">
	<div class="container">
		<div class="my-wishlist-page inner-bottom-sm">
			<div class="row">
				<div class="col-md-12 my-wishlist">
	<div class="table-responsive">
		<table class="table">
			<thead>
				<tr>
					<th colspan="4">my wishlist</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="col-md-2"><img src="admin/productimages/" alt="" width="60" height="100"></td>
					<td class="col-md-6">
						<div class="product-name"><a href="product-details.php"></a></div>
						<div class="rating">
							<i class="fa fa-star rate"></i>
							<i class="fa fa-star rate"></i>
							<i class="fa fa-star rate"></i>
							<i class="fa fa-star rate"></i>
							<i class="fa fa-star non-rate"></i>
							<span class="review">(Reviews )</span>
						</div>
						<div class="price">Rs. .00
							<span>$900.00</span>
						</div>
					</td>
					<td class="col-md-2">
						<a href="my-wishlist.php" class="btn-upper btn btn-primary">Add to cart</a>
					</td>
					<td class="col-md-2 close-btn">
						<a href="my-wishlist.php" onClick="return confirm('Are you sure you want to delete?')" class=""><i class="fa fa-times"></i></a>
					</td>
				</tr>
				<tr>
					<td style="font-size: 18px; font-weight:bold ">Your Wishlist is Empty</td>

				</tr>
			</tbody>
		</table>
	</div>
</div>			</div><!-- /.row -->
		</div><!-- /.sigin-in-->
        @include('includes.brands-slider')
</div>
</div>
@include('layouts.footer')

<script src="{{url('assets/js/jquery-1.11.1.min.js')}}"></script>
	

<!--js---->
<script src="{{url('assets/js/bootstrap.min.js')}}"></script>

<script src="{{url('assets/js/bootstrap-hover-dropdown.min.js')}}"></script>
<script src="{{url('assets/js/owl.carousel.min.js')}}"></script>

<script src="{{url('assets/js/echo.min.js')}}"></script>
<script src="{{url('assets/js/jquery.easing-1.3.min.js')}}"></script>
<script src="{{url('assets/js/bootstrap-slider.min.js')}}"></script>
<script src="{{url('assets/js/jquery.rateit.min.js')}}"></script>
<script type="text/javascript" src="{{url('assets/js/lightbox.min.js')}}"></script>
<script src="{{url('assets/js/bootstrap-select.min.js')}}"></script>
<script src="{{url('assets/js/wow.min.js')}}"></script>
<script src="{{url('assets/js/scripts.js')}}"></script>

<!-- For demo purposes – can be removed on production -->
<script src="{{url('switchstylesheet/switchstylesheet.js')}}"></script>
	
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
</body>
</html>