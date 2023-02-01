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

	    <title>My Cart</title>
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
											<th class="cart-romove item">Remove</th>
											<th class="cart-description item">Image</th>
											<th class="cart-product-name item">Product Name</th>
											
											<th class="cart-qty item">Quantity</th>
											<th class="cart-sub-total item">Price Per unit</th>
											<th class="cart-sub-total item">Shipping Charge</th>
											<th class="cart-total last-item">Grandtotal</th>
										</tr>		
									</thead><!-- /thead -->
									<tfoot>
										<tr>
											<td colspan="7">
												<div class="shopping-cart-btn">
													<span class="">
														<a href="index.php" class="btn btn-upper btn-primary outer-left-xs">Continue Shopping</a>
														<input type="submit" name="submit" value="Update shopping cart" class="btn btn-upper btn-primary pull-right outer-right-xs">
													</span>
												</div><!-- /.shopping-cart-btn -->
											</td>
										</tr>
									</tfoot>
									<tbody>
										<tr>
											<td class="romove-item"><input type="checkbox" name="remove_code[]" value="" /></td>
											<td class="cart-image">
												<a class="entry-thumbnail" href="/order-detail">
													<img src="https://www.dienmaythoviet.com/wp-content/uploads/2022/07/may-nuoc-nong-d_main_689_1020.png-510x510.webp" alt="" width="114" height="146">
												</a>
											</td>
											<td class="cart-product-name-info">
												<h4 class='cart-product-description'><a href="/product-details" >productName</a></h4>
												<div class="row">
													<div class="col-sm-4">
														<div class="rating rateit-small"></div>
													</div>
													<div class="col-sm-8"><div class="reviews"></div>
													</div>
												</div><!-- /.row -->
											</td>
											<td class="cart-product-quantity">
												<div class="quant-input">
														<div class="arrows">
														<div class="arrow plus gradient"><span class="ir"><i class="icon fa fa-sort-asc"></i></span></div>
														<div class="arrow minus gradient"><span class="ir"><i class="icon fa fa-sort-desc"></i></span></div>
														</div>
													<input type="text" value="1" name="" max="10">
												</div>
											</td>
											<td class="cart-product-sub-total"><span class="cart-sub-total-price">productPrice:00.00</span></td>
											<td class="cart-product-sub-total"><span class="cart-sub-total-price">shippingCharge:00.00</span></td>
											<td class="cart-product-grand-total"><span class="cart-grand-total-price">Total:.00</span></td>
										</tr>
									</tbody><!-- /tbody -->
								</table><!-- /table -->
							</div>
					</div><!-- /.shopping-cart-table -->			
					<div class="col-md-4 col-sm-12 estimate-ship-tax">
						<table class="table table-bordered">
							<thead>
								<tr>
									<th>
										<span class="estimate-title">Shipping Address</span>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<div class="form-group"></div>
									</td>
								</tr>
							</tbody><!-- /tbody -->
						</table><!-- /table -->
					</div>
					<div class="col-md-4 col-sm-12 estimate-ship-tax">
						<table class="table table-bordered">
							<thead>
								<tr>
									<th>
										<span class="estimate-title">Billing Address</span>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<div class="form-group"></div>
									</td>
								</tr>
							</tbody><!-- /tbody -->
						</table><!-- /table -->
					</div>
                    <div class="col-md-4 col-sm-12 cart-shopping-total">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>
                                        <div class="cart-grand-total">Grand Total<span class="inner-left-md">00.00</span></div>
                                    </th>
                                </tr>
                            </thead><!-- /thead -->
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="cart-checkout-btn pull-right">
                                            <button type="submit" name="ordersubmit" class="btn btn-primary">PROCCED TO CHEKOUT</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody><!-- /tbody -->
                        </table>
                        </div>
                    </div>
                </div> 
</form>
@include('includes.brands-slider')
</div>
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
</body>
</html>