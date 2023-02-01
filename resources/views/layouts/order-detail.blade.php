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

	    <title>Order History</title>
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
        <script language="javascript" type="text/javascript">
			var popUpWin=0;
			function popUpWindow(URLStr, left, top, width, height)
			{
			if(popUpWin)
			{
			if(!popUpWin.closed) popUpWin.close();
			}
			popUpWin = open(URLStr,'popUpWin', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,copyhistory=yes,width='+600+',height='+600+',left='+left+', top='+top+',screenX='+left+',screenY='+top+'');
			}
		</script>
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
					<li><a href="/">Home</a></li>
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
					<th class="cart-romove item">STT</th>
					<th class="cart-description item">HÌNH ẢNH</th>
					<th class="cart-product-name item">TÊN SẢN PHẨM</th>
			
					<th class="cart-qty item">SỐ LƯỢNG</th>
					<th class="cart-sub-total item">GIÁ</th>
					<th class="cart-total item">TỔNG</th>
					<th class="cart-total item">PHƯƠNG THỨC THANH TOÁN</th>
					<th class="cart-description item">NGÀY ĐẶT</th>
					<th class="cart-total last-item">TÌNH TRẠNG</th>
				</tr>
			</thead><!-- /thead -->
			
			<tbody></tbody>
				<tr>
					<td>1</td>
					<td class="cart-image">
						<a class="entry-thumbnail" href="detail.html">
						    <img src="https://www.dienmaythoviet.com/wp-content/uploads/2022/07/may-nuoc-nong-d_main_689_1020.png-510x510.webp" alt="" width="84" height="146">
						</a>
					</td>
					<td class="cart-product-name-info">
						<h4 class='cart-product-description'><a href="/product-details">MÁY TẮM NÓNG</a></h4>
						
						
					</td>
					<td class="cart-product-quantity">1</td>
					<td class="cart-product-sub-total">1.000.000đ</td>
					<td class="cart-product-grand-total">1.000.000đ</td>
					<td class="cart-product-sub-total">Tiền mặt</td>
					<td class="cart-product-sub-total">15/5/2022</td>
					<td><a href="javascript:void(0);" onClick="popUpWindow('/track-order')" title="Track order">Track</td>
				</tr>
				<!--<tr><td colspan="8">Either order id or  Registered email id is invalid</td></tr>-->
		</table><!-- /table -->
	</div>
</div>

		</div><!-- /.shopping-cart -->
		</div> <!-- /.row -->
		</form>
		<!-- ============================================== BRANDS CAROUSEL ============================================== -->
        @include('includes.brands-slider')
<!-- ============================================== BRANDS CAROUSEL : END ============================================== -->	</div><!-- /.container -->
</div><!-- /.body-content -->
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
	<!-- For demo purposes – can be removed on production : End -->
</body>
</html>