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

	    <title>Product Category</title>

	    <!-- Bootstrap Core CSS -->
	    <link rel="stylesheet" href="{{asset('assets/css/bootstrap.min.css')}}">
	    
	    <!-- Customizable CSS -->
	    <link rel="stylesheet" href="{{asset('assets/css/main.css')}}">
	    <link rel="stylesheet" href="{{asset('assets/css/green.css')}}">
	    <link rel="stylesheet" href="{{asset('assets/css/owl.carousel.css')}}">
		<link rel="stylesheet" href="{{asset('assets/css/owl.transitions.css')}}">
		<!--<link rel="stylesheet" href="assets/css/owl.theme.css')}}">-->
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
		<!-- Demo Purpose Only. Should be removed in production : END -->

		
		<!-- Icons/Glyphs -->
		<link rel="stylesheet" href="{{asset('assets/css/font-awesome.min.css')}}">

        <!-- Fonts --> 
		<link href='http://fonts.googleapis.com/css?family=Roboto:300,400,500,700' rel='stylesheet' type='text/css'>
		
		<!-- Favicon -->
		<link rel="shortcut icon" href="{{asset('assets/images/favicon.ico')}}">

		<!-- HTML5 elements and media queries Support for IE8 : HTML5 shim and Respond.js -->
		<!--[if lt IE 9]>
			<script src="{{asset('assets/js/html5shiv.js')}}"></script>
			<script src="{{asset('assets/js/respond.min.js')}}"></script>
		<![endif]-->

	</head>
    <body class="cnt-home">
<header class="header-style-1">
	@include('includes.top-header')
            @include('includes.main-bar')
            @include('includes.menu-bar')
</header>
<!-- ============================================== HEADER : END ============================================== -->
</div><!-- /.breadcrumb -->
<div class="body-content outer-top-xs">
	<div class='container'>
		<div class='row outer-bottom-sm'>
			<div class='col-md-3 sidebar'>
	            <!-- ================================== TOP NAVIGATION ================================== -->
                <div class="side-menu animate-dropdown outer-bottom-xs">       
                    <div class="side-menu animate-dropdown outer-bottom-xs">
                        <div class="head"><i class="icon fa fa-align-justify fa-fw"></i>Sub Categories</div>        
                            <nav class="yamm megamenu-horizontal" role="navigation">
                                <ul class="nav">
                                    <li class="dropdown menu-item"><a href="sub-category.php" class="dropdown-toggle"><i class="icon fa fa-desktop fa-fw"></i></li>
                                </ul>
                            </nav>
                        </div>
                    </div><!-- /.side-menu -->
<!-- ================================== TOP NAVIGATION : END ================================== -->	            
                    <div class="sidebar-module-container">
                        <h3 class="section-title">shop by</h3>
                        <div class="sidebar-filter">
		            	<!-- ============================================== SIDEBAR CATEGORY ============================================== -->
                            <div class="sidebar-widget wow fadeInUp outer-bottom-xs ">
                                <div class="widget-header m-t-20">
                                    <h4 class="widget-title">Category</h4>
                                </div>
	                            <div class="sidebar-widget-body m-t-10">
                                    <div class="accordion">
                                        <div class="accordion-group">
                                            <div class="accordion-heading">
                                                <a href="category.php"  class="accordion-toggle collapsed"></a>
                                            </div>  
                                        </div>
                                    </div>
	                            </div><!-- /.sidebar-widget-body -->
                            </div><!-- /.sidebar-widget -->
                        <!-- ============================================== COLOR: END ============================================== -->
	            	    </div><!-- /.sidebar-filter -->
	                </div><!-- /.sidebar-module-container -->
                </div><!-- /.sidebar -->
			    <div class='col-md-9'>
					<!-- ========================================== SECTION – HERO ========================================= -->
                    <div id="category" class="category-carousel hidden-xs">
                        <div class="item">	
                            <div class="image">
                                <img src="assets/images/banners/cat-banner-1.jpg" alt="" class="img-responsive">
                            </div>
                            <div class="container-fluid">
                                <div class="caption vertical-top text-left">
                                    <div class="big-text">
                                        <br />
                                    </div>
                                    <div class="excerpt hidden-sm hidden-md"></div>
                                </div><!-- /.caption -->
                            </div><!-- /.container-fluid -->
                        </div> <!-- /.item -->
                    </div>
                    <div class="search-result-container">
					<div id="myTabContent" class="tab-content">
						<div class="tab-pane active " id="grid-container">
							<div class="category-product  inner-top-vs">
								<div class="row">
		                            <div class="col-sm-6 col-md-4 wow fadeInUp">
			                            <div class="products">				
	                                        <div class="product">		
		                                        <div class="product-image">
                                                    <div class="image">
                                                        <a href="product-details.php"><img  src="https://www.dienmaythoviet.com/wp-content/uploads/2021/11/15L-2-1-200x243.png" data-echo="https://www.dienmaythoviet.com/wp-content/uploads/2021/11/15L-2-1-200x243.png" alt="" width="200" height="300"></a>
                                                    </div><!-- /.image -->			                      		   
		                                        </div><!-- /.product-image -->
                                                <div class="product-info text-left">
                                                    <h3 class="name"><a href="product-details.php">Sản Phẩm</a></h3>
                                                    <div class="rating rateit-small"></div>
                                                    <div class="description">Thông tin sản phẩm</div>
                                                    <div class="product-price">	
                                                        <p class="price">Giá tiết kiệm: 1.000.000đ</p>
										                <p class="price-before-discount">Giá: 1.500.000đ</p>
                                                    </div><!-- /.product-price -->
                                                </div><!-- /.product-info -->
					                            <div class="cart clearfix animate-effect">
                                                    <div class="action">
                                                        <ul class="list-unstyled">
                                                            <li class="add-cart-button btn-group">
                                                                <button class="btn btn-primary icon" data-toggle="dropdown" type="button">
                                                                    <i class="fa fa-shopping-cart"></i>													
                                                                </button>
                                                                <a href="category.php">
                                                                <button class="btn btn-primary" type="button">Add to cart</button></a>
                                                            </li>
                                                            <li class="lnk wishlist">
                                                                <a class="add-to-cart" href="category.php" title="Wishlist">
                                                                    <i class="icon fa fa-heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div><!-- /.action -->
                                                </div><!-- /.cart -->
                                            </div> <!-- /.product-->
			                            </div><!-- /.products-->
		                            </div><!-- /.fadeInUp-->
                                    <div class="col-sm-6 col-md-4 wow fadeInUp">
			                            <div class="products">				
	                                        <div class="product">		
		                                        <div class="product-image">
                                                    <div class="image">
                                                        <a href="product-details.php"><img  src="https://www.dienmaythoviet.com/wp-content/uploads/2021/11/15L-2-1-200x243.png" data-echo="https://www.dienmaythoviet.com/wp-content/uploads/2021/11/15L-2-1-200x243.png" alt="" width="200" height="300"></a>
                                                    </div><!-- /.image -->			                      		   
		                                        </div><!-- /.product-image -->
                                                <div class="product-info text-left">
                                                    <h3 class="name"><a href="product-details.php">Sản Phẩm</a></h3>
                                                    <div class="rating rateit-small"></div>
                                                    <div class="description">Thông tin sản phẩm</div>
                                                    <div class="product-price">	
                                                        <p class="price">Giá tiết kiệm: 1.000.000đ</p>
										                <p class="price-before-discount">Giá: 1.500.000đ</p>
                                                    </div><!-- /.product-price -->
                                                </div><!-- /.product-info -->
					                            <div class="cart clearfix animate-effect">
                                                    <div class="action">
                                                        <ul class="list-unstyled">
                                                            <li class="add-cart-button btn-group">
                                                                <button class="btn btn-primary icon" data-toggle="dropdown" type="button">
                                                                    <i class="fa fa-shopping-cart"></i>													
                                                                </button>
                                                                <a href="category.php">
                                                                <button class="btn btn-primary" type="button">Add to cart</button></a>
                                                            </li>
                                                            <li class="lnk wishlist">
                                                                <a class="add-to-cart" href="category.php" title="Wishlist">
                                                                    <i class="icon fa fa-heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div><!-- /.action -->
                                                </div><!-- /.cart -->
                                            </div> <!-- /.product-->
			                            </div><!-- /.products-->
		                            </div><!-- /.fadeInUp-->
                                    <div class="col-sm-6 col-md-4 wow fadeInUp">
			                            <div class="products">				
	                                        <div class="product">		
		                                        <div class="product-image">
                                                    <div class="image">
                                                        <a href="product-details.php"><img  src="https://www.dienmaythoviet.com/wp-content/uploads/2021/11/15L-2-1-200x243.png" data-echo="https://www.dienmaythoviet.com/wp-content/uploads/2021/11/15L-2-1-200x243.png" alt="" width="200" height="300"></a>
                                                    </div><!-- /.image -->			                      		   
		                                        </div><!-- /.product-image -->
                                                <div class="product-info text-left">
                                                    <h3 class="name"><a href="product-details.php">Sản Phẩm</a></h3>
                                                    <div class="rating rateit-small"></div>
                                                    <div class="description">Thông tin sản phẩm</div>
                                                    <div class="product-price">	
                                                        <p class="price">Giá tiết kiệm: 1.000.000đ</p>
										                <p class="price-before-discount">Giá: 1.500.000đ</p>
                                                    </div><!-- /.product-price -->
                                                </div><!-- /.product-info -->
					                            <div class="cart clearfix animate-effect">
                                                    <div class="action">
                                                        <ul class="list-unstyled">
                                                            <li class="add-cart-button btn-group">
                                                                <button class="btn btn-primary icon" data-toggle="dropdown" type="button">
                                                                    <i class="fa fa-shopping-cart"></i>													
                                                                </button>
                                                                <a href="category.php">
                                                                <button class="btn btn-primary" type="button">Add to cart</button></a>
                                                            </li>
                                                            <li class="lnk wishlist">
                                                                <a class="add-to-cart" href="category.php" title="Wishlist">
                                                                    <i class="icon fa fa-heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div><!-- /.action -->
                                                </div><!-- /.cart -->
                                            </div> <!-- /.product-->
			                            </div><!-- /.products-->
		                            </div><!-- /.fadeInUp-->
                                    <div class="col-sm-6 col-md-4 wow fadeInUp">
			                            <div class="products">				
	                                        <div class="product">		
		                                        <div class="product-image">
                                                    <div class="image">
                                                        <a href="product-details.php"><img  src="https://www.dienmaythoviet.com/wp-content/uploads/2021/11/15L-2-1-200x243.png" data-echo="https://www.dienmaythoviet.com/wp-content/uploads/2021/11/15L-2-1-200x243.png" alt="" width="200" height="300"></a>
                                                    </div><!-- /.image -->			                      		   
		                                        </div><!-- /.product-image -->
                                                <div class="product-info text-left">
                                                    <h3 class="name"><a href="product-details.php">Sản Phẩm</a></h3>
                                                    <div class="rating rateit-small"></div>
                                                    <div class="description">Thông tin sản phẩm</div>
                                                    <div class="product-price">	
                                                        <p class="price">Giá tiết kiệm: 1.000.000đ</p>
										                <p class="price-before-discount">Giá: 1.500.000đ</p>
                                                    </div><!-- /.product-price -->
                                                </div><!-- /.product-info -->
					                            <div class="cart clearfix animate-effect">
                                                    <div class="action">
                                                        <ul class="list-unstyled">
                                                            <li class="add-cart-button btn-group">
                                                                <button class="btn btn-primary icon" data-toggle="dropdown" type="button">
                                                                    <i class="fa fa-shopping-cart"></i>													
                                                                </button>
                                                                <a href="category.php">
                                                                <button class="btn btn-primary" type="button">Add to cart</button></a>
                                                            </li>
                                                            <li class="lnk wishlist">
                                                                <a class="add-to-cart" href="category.php" title="Wishlist">
                                                                    <i class="icon fa fa-heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div><!-- /.action -->
                                                </div><!-- /.cart -->
                                            </div> <!-- /.product-->
			                            </div><!-- /.products-->
		                            </div><!-- /.fadeInUp-->
                                    <!--<div class="col-sm-6 col-md-4 wow fadeInUp"> <h3>No Product Found</h3></div>-->
				                </div><!-- /.row -->
							</div><!-- /.category-product -->
						</div><!-- /.tab-pane -->
				    </div><!-- /.search-result-container -->
                   
			</div><!-- /.col -->
		</div>
       
    </div>
    @include('includes.brands-slider')
    </div>
    @include('layouts.footer')
</div>
	<script src="{{url('assets/js/jquery-1.11.1.min.js')}}"></script>
	
	<script src="{{url('assets/js/bootstrap.min.js')}}"></script>
	
	<script src="{{url('assets/js/bootstrap-hover-dropdown.min.js')}}"></script>
	<script src="{{url('assets/js/owl.carousel.min.js')}}"></script>
	
	<script src="{{url('assets/js/echo.min.js')}}"></script>
	<script src="{{url('assets/js/jquery.easing-1.3.min.js')}}"></script>
	<script src="{{url('assets/js/bootstrap-slider.min.js')}}"></script>
    <script src="{{url('assets/js/jquery.rateit.min.js')}}"></script>
    <script type="{{url('text/javascript" src="assets/js/lightbox.min.js')}}"></script>
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