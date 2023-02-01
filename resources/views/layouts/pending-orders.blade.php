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

	    <title>Pending Order History</title>
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

		<!-- HTML5 elements and media queries Support for IE8 : HTML5 shim and Respond.js -->
		<!--[if lt IE 9]>
			<script src="assets/js/html5shiv.js"></script>
			<script src="assets/js/respond.min.js"></script>
		<![endif]-->

	</head>
    <body class="cnt-home">
	
		
	
		<!-- ============================================== HEADER ============================================== -->
<header class="header-style-1">
    @include('includes.top-header')
    @include('includes.main-bar')
    @include('includes.menu-bar')
</header>
<!-- ============================================== HEADER : END ============================================== -->
<div class="breadcrumb">
	<div class="container">
		<div class="breadcrumb-inner">
			<ul class="list-inline list-unstyled">
				<li><a href="#">Home</a></li>
				<li class='active'>Shopping Cart</li>
			</ul>
		</div><!-- /.breadcrumb-inner -->
	</div><!-- /.container -->
</div><!-- /.breadcrumb -->

<div class="body-content outer-top-xs">
	<div class="container">
		<div class="row inner-bottom-sm">
			<div class="shopping-cart">
				<div class="col-md-12 col-sm-12 shopping-cart-table ">
	<div class="table-responsive">
<form name="cart" method="post">	

		<table class="table table-bordered">
			<thead>
				<tr>
					<th class="cart-romove item">#</th>
					<th class="cart-description item">Image</th>
					<th class="cart-product-name item">Product Name</th>
			
					<th class="cart-qty item">Quantity</th>
					<th class="cart-sub-total item">Price Per unit</th>
						<th class="cart-sub-total item">Shiping Charge</th>
					<th class="cart-total">Grandtotal</th>
					<th class="cart-total item">Payment Method</th>
					<th class="cart-description item">Order Date</th>
					<th class="cart-total last-item">Action</th>
				</tr>
			</thead><!-- /thead -->
			
			<tbody>

				<tr>
					<td>cnt</td>
					<td class="cart-image">
						<a class="entry-thumbnail" href="detail.html">
						    <img src="admin/productimages/" alt="" width="84" height="146">
						</a>
					</td>
					<td class="cart-product-name-info">
						<h4 class='cart-product-description'><a href="/product-details">
					</td>
					<td class="cart-product-quantity">quantity</td>
					<td class="cart-product-sub-total">pprice </td>
					<td class="cart-product-sub-total">shippingcharge </td>
					<td class="cart-product-grand-total">grand-total</td>
					<td class="cart-product-sub-total">paym</td>
					<td class="cart-product-sub-total">odate </td>
					
					<td><a href="/pending-orders">Delete</td>
				</tr>
                <tr>
                    <td colspan="9"><div class="cart-checkout-btn pull-right">
                    <button type="submit" name="ordersubmit" class="btn btn-primary">
                        <a href="/payment-method">PROCCED To Payment</a></button>
                    </div></td>

                </tr>
                <tr>
                <td colspan="10" align="center"><h4>No Result Found</h4></td>
                </tr>

		
			</tbody><!-- /tbody -->
		</table><!-- /table -->
		
	</div>
</div>

		</div><!-- /.shopping-cart -->
		</div> <!-- /.row -->
		</form>
		<!-- ============================================== BRANDS CAROUSEL ============================================== -->
        @include('includes.brands-slider')
<!-- ============================================== BRANDS CAROUSEL : END ============================================== -->	</div><!-- /.container -->
@include('layouts.footer')
</div><!-- /.body-content -->



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
	<!-- For demo purposes – can be removed on production : End -->
</body>
</html>