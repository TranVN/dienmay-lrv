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
            <div class="furniture-container homepage-container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-3 sidebar">
                        <!-- ================================== TOP NAVIGATION ================================== -->
                        <div class="side-menu animate-dropdown outer-bottom-xs">
                            <div class="head"><i class="icon fa fa-align-justify fa-fw"></i> Categories</div>        
                            <nav class="yamm megamenu-horizontal" role="navigation">
                                <ul class="nav">
                                    <li class="dropdown menu-item">
                                        <a href="/category" class="dropdown-toggle"><i class="icon fa fa-desktop fa-fw"></i>
                                        </a>
                                    </li>
                                    <li class="dropdown menu-item">
                                        <a href="/order-detail" class="dropdown-toggle"><i class="icon fa fa-desktop fa-fw"></i>
                                        </a>
                                    </li>
                                    <li class="dropdown menu-item">
                                        <a href="category.php" class="dropdown-toggle"><i class="icon fa fa-desktop fa-fw"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
        <!-- ================================== TOP NAVIGATION : END ================================== -->
                    </div><!-- /.sidemenu-holder -->	
                    
                    <div class="col-xs-12 col-sm-12 col-md-9 homebanner-holder">
                        <!-- ========================================== SECTION – HERO ========================================= -->
                        <div id="hero" class="homepage-slider3">
                            <div id="owl-main" class="owl-carousel owl-inner-nav owl-ui-sm">
                                <div class="full-width-slider">	
                                    <div class="item" style="background-image: url(assets/images/sliders/slider1.png);">
                                        <!-- /.container-fluid -->
                                    </div><!-- /.item -->
                                </div><!-- /.full-width-slider -->
                                
                                <div class="full-width-slider">
                                    <div class="item full-width-slider" style="background-image: url(assets/images/sliders/slider2.png);">
                                    </div><!-- /.item -->
                                </div><!-- /.full-width-slider -->
                        
                            </div><!-- /.owl-carousel -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="info-boxes wow fadeInUp">
                <div class="info-boxes-inner">
                    <div class="row">
                        <div class="col-md-6 col-sm-4 col-lg-4">
                            <div class="info-box">
                                <div class="row">
                                    <div class="col-xs-2">
                                         <i class="icon fa fa-dollar"></i>
                                    </div>
                                    <div class="col-xs-10">
                                        <h4 class="info-box-heading green">money back</h4>
                                    </div>
                                </div>	
                                <h6 class="text">30 Day Money Back Guarantee.</h6>
                            </div>
                        </div><!-- .col -->
            
                        <div class="hidden-md col-sm-4 col-lg-4">
                            <div class="info-box">
                                <div class="row">
                                    <div class="col-xs-2">
                                        <i class="icon fa fa-truck"></i>
                                    </div>
                                    <div class="col-xs-10">
                                        <h4 class="info-box-heading orange">free shipping</h4>
                                    </div>
                                </div>
                                <h6 class="text">free ship-on oder over Rs. 600.00</h6>	
                            </div>
                        </div><!-- .col -->
            
                        <div class="col-md-6 col-sm-4 col-lg-4">
                            <div class="info-box">
                                <div class="row">
                                    <div class="col-xs-2">
                                        <i class="icon fa fa-gift"></i>
                                    </div>
                                    <div class="col-xs-10">
                                        <h4 class="info-box-heading red">Special Sale</h4>
                                    </div>
                                </div>
                                <h6 class="text">All items-sale up to 20% off </h6>	
                            </div>
                        </div><!-- .col -->
                    </div><!-- /.row -->
                </div><!-- /.info-boxes-inner -->
                
            </div><!-- /.info-boxes --> 
            <div id="product-tabs-slider" class="scroll-tabs inner-bottom-vs  wow fadeInUp">
                <div class="more-info-tab clearfix">
                   <h3 class="new-product-title pull-left">Featured Products</h3>
                    <ul class="nav nav-tabs nav-tab-line pull-right" id="new-products-1">
                        <li class="active"><a href="#all" data-toggle="tab">All</a></li>
                        <li><a href="#books" data-toggle="tab">Books</a></li>
                        <li><a href="#furniture" data-toggle="tab">Furniture</a></li>
                    </ul><!-- /.nav-tabs -->
                </div>
    
                <div class="tab-content outer-top-xs">
                    <div class="tab-pane in active" id="all">			
                        <div class="product-slider">
                            <div class="owl-carousel home-owl-carousel custom-carousel owl-theme" data-item="4">			    	
                                <div class="item item-carousel">
                                    <div class="products">
                                        <div class="product">		
                                            <div class="product-image">
                                                <div class="image">
                                                    <a href="product-details.php">
                                                    <img src="img/user.png"  width="180" height="300" alt=""></a>
                                                </div><!-- /.image -->		
                                            </div><!-- /.product-image -->
                                            <div class="product-info text-left">
                                                <h3 class="name"><a href="product-details.php"></a></h3>
                                                <div class="rating rateit-small"></div>
                                                <div class="description"></div>
    
                                                <div class="product-price">	
                                                    <span class="price">Rs.</span>
                                                    <span class="price-before-discount">Rs.</span>
                                                </div><!-- /.product-price -->
                                            </div><!-- /.product-info -->
                                            <div class="action"><a href="index.php" class="lnk btn btn-primary">Add to Cart</a></div>
                                        </div><!-- /.product -->
                                    </div><!-- /.products -->
                                </div><!-- /.item -->
                                <div class="item item-carousel">
                                    <div class="products">
                                        <div class="product">		
                                            <div class="product-image">
                                                <div class="image">
                                                    <a href="product-details.php">
                                                    <img src="img/background.jpg"  width="180" height="300" alt=""></a>
                                                </div><!-- /.image -->		
                                            </div><!-- /.product-image -->
                                            <div class="product-info text-left">
                                                <h3 class="name"><a href="product-details.php"></a></h3>
                                                <div class="rating rateit-small"></div>
                                                <div class="description"></div>
    
                                                <div class="product-price">	
                                                    <span class="price">Rs.</span>
                                                    <span class="price-before-discount">Rs.</span>
                                                </div><!-- /.product-price -->
                                            </div><!-- /.product-info -->
                                            <div class="action"><a href="index.php" class="lnk btn btn-primary">Add to Cart</a></div>
                                        </div><!-- /.product -->
                                    </div><!-- /.products -->
                                </div><!-- /.item -->
                                
                                <div class="item item-carousel">
                                    <div class="products">
                                        <div class="product">		
                                            <div class="product-image">
                                                <div class="image">
                                                    <a href="product-details.php">
                                                    <img src="img/user.png"  width="180" height="300" alt=""></a>
                                                </div><!-- /.image -->		
                                            </div><!-- /.product-image -->
                                            <div class="product-info text-left">
                                                <h3 class="name"><a href="product-details.php"></a></h3>
                                                <div class="rating rateit-small"></div>
                                                <div class="description"></div>
    
                                                <div class="product-price">	
                                                    <span class="price">Rs.</span>
                                                    <span class="price-before-discount">Rs.</span>
                                                </div><!-- /.product-price -->
                                            </div><!-- /.product-info -->
                                            <div class="action"><a href="index.php" class="lnk btn btn-primary">Add to Cart</a></div>
                                        </div><!-- /.product -->
                                    </div><!-- /.products -->
                                </div><!-- /.item -->
                                <div class="item item-carousel">
                                    <div class="products">
                                        <div class="product">		
                                            <div class="product-image">
                                                <div class="image">
                                                    <a href="product-details.php">
                                                    <img src="img/background.jpg"  width="180" height="300" alt=""></a>
                                                </div><!-- /.image -->		
                                            </div><!-- /.product-image -->
                                            <div class="product-info text-left">
                                                <h3 class="name"><a href="product-details.php"></a></h3>
                                                <div class="rating rateit-small"></div>
                                                <div class="description"></div>
    
                                                <div class="product-price">	
                                                    <span class="price">Rs.</span>
                                                    <span class="price-before-discount">Rs.</span>
                                                </div><!-- /.product-price -->
                                            </div><!-- /.product-info -->
                                            <div class="action"><a href="index.php" class="lnk btn btn-primary">Add to Cart</a></div>
                                        </div><!-- /.product -->
                                    </div><!-- /.products -->
                                </div><!-- /.item --><div class="item item-carousel">
                                    <div class="products">
                                        <div class="product">		
                                            <div class="product-image">
                                                <div class="image">
                                                    <a href="product-details.php">
                                                    <img src="img/background.jpg"  width="180" height="300" alt=""></a>
                                                </div><!-- /.image -->		
                                            </div><!-- /.product-image -->
                                            <div class="product-info text-left">
                                                <h3 class="name"><a href="product-details.php"></a></h3>
                                                <div class="rating rateit-small"></div>
                                                <div class="description"></div>
    
                                                <div class="product-price">	
                                                    <span class="price">Rs.</span>
                                                    <span class="price-before-discount">Rs.</span>
                                                </div><!-- /.product-price -->
                                            </div><!-- /.product-info -->
                                            <div class="action"><a href="index.php" class="lnk btn btn-primary">Add to Cart</a></div>
                                        </div><!-- /.product -->
                                    </div><!-- /.products -->
                                </div><!-- /.item -->
                            </div><!-- /.home-owl-carousel -->
                        </div><!-- /.product-slider -->
                    </div>
                     <!-- ============================================== TABS ============================================== -->
	<div class="sections prod-slider-small outer-top-small">
		<div class="row">
			<div class="col-md-6">
	            <section class="section">
                    <h3 class="section-title">Điện Lạnh</h3>
                    <div class="owl-carousel homepage-owl-carousel custom-carousel outer-top-xs owl-theme" data-item="2">
                        <div class="item item-carousel">
                            <div class="products">
                                <div class="product">		
                                    <div class="product-image">
                                        <div class="image">
                                            <a href="product-details.php"><img  src="img/background.jpg"  width="180" height="300"></a>
                                        </div><!-- /.image -->			                        		   
                                    </div><!-- /.product-image -->
                                    <div class="product-info text-left">
                                        <h3 class="name"><a href="product-details.php"></a></h3>
                                        <div class="rating rateit-small"></div>
                                        <div class="description"></div>
                                        <div class="product-price">	
                                            <span class="price">Rs.</span>
                                            <span class="price-before-discount">Rs.</span>					
                                        </div>
                                    </div>
                                    <div class="action"><a href="index.php" class="lnk btn btn-primary">Add to Cart</a></div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
	            </section>
			</div>
            <div class="col-md-6">
	            <section class="section">
                    <h3 class="section-title">Điện Gia Dụng</h3>
                    <div class="owl-carousel homepage-owl-carousel custom-carousel outer-top-xs owl-theme" data-item="2">
                        <div class="item item-carousel">
                            <div class="products">
                                <div class="product">		
                                    <div class="product-image">
                                        <div class="image">
                                            <a href="product-details.php"><img  src="img/background.jpg" width="180" height="300"></a>
                                        </div><!-- /.image -->			                        		   
                                    </div><!-- /.product-image -->
                                    <div class="product-info text-left">
                                        <h3 class="name"><a href="product-details.php"></a></h3>
                                        <div class="rating rateit-small"></div>
                                        <div class="description"></div>
                                        <div class="product-price">	
                                            <span class="price">Rs.</span>
                                            <span class="price-before-discount">Rs.</span>					
                                        </div>
                                    </div>
                                    <div class="action"><a href="index.php" class="lnk btn btn-primary">Add to Cart</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
	            </section>
			</div>
			
			</div>
		</div><!--.row-->
	</div><!--sections-->
    <!-- ============================================== TABS : END ============================================== -->
    </div><!--tab-content-->
    <section class="section featured-product inner-xs wow fadeInUp">
		<h3 class="section-title">Fashion</h3>
		<div class="owl-carousel best-seller custom-carousel owl-theme outer-top-xs">
			<div class="item">
				<div class="products">
                    <div class="product">
						<div class="product-micro">
							<div class="row product-micro-row">
								<div class="col col-xs-6">
									<div class="product-image">
										<div class="image">
											<a href="img/background.jpg" data-lightbox="image-1" data-title="">
                                                <img src="img/background.jpg" width="170" height="174" alt="">
                                                <div class="zoom-overlay"></div>
											</a>					
										</div><!-- /.image -->
                                    </div><!-- /.product-image -->
								</div><!-- /.col -->
								<div class="col col-xs-6">
									<div class="product-info">
										<h3 class="name"><a href="product-details.php"></a></h3>
										<div class="rating rateit-small"></div>
										<div class="product-price">	
										    <span class="price">Rs.</span>
                                        </div><!-- /.product-price -->
										<div class="action"><a href="index.php" class="lnk btn btn-primary">Add To Cart</a></div>
									</div>
								</div><!-- /.col -->
							</div><!-- /.product-micro-row -->
						</div><!-- /.product-micro -->
					</div>
                </div>
			</div>
            <div class="item">
				<div class="products">
                    <div class="product">
						<div class="product-micro">
							<div class="row product-micro-row">
								<div class="col col-xs-6">
									<div class="product-image">
										<div class="image">
											<a href="img/background.jpg" data-lightbox="image-1" data-title="">
                                                <img src="img/background.jpg" width="170" height="174" alt="">
                                                <div class="zoom-overlay"></div>
											</a>					
										</div><!-- /.image -->
                                    </div><!-- /.product-image -->
								</div><!-- /.col -->
								<div class="col col-xs-6">
									<div class="product-info">
										<h3 class="name"><a href="product-details.php"></a></h3>
										<div class="rating rateit-small"></div>
										<div class="product-price">	
										    <span class="price">Rs.</span>
                                        </div><!-- /.product-price -->
										<div class="action"><a href="index.php" class="lnk btn btn-primary">Add To Cart</a></div>
									</div>
								</div><!-- /.col -->
							</div><!-- /.product-micro-row -->
						</div><!-- /.product-micro -->
					</div>
                </div>
			</div>
            <div class="item">
				<div class="products">
                    <div class="product">
						<div class="product-micro">
							<div class="row product-micro-row">
								<div class="col col-xs-6">
									<div class="product-image">
										<div class="image">
											<a href="img/background.jpg" data-lightbox="image-1" data-title="">
                                                <img src="img/background.jpg" width="170" height="174" alt="">
                                                <div class="zoom-overlay"></div>
											</a>					
										</div><!-- /.image -->
                                    </div><!-- /.product-image -->
								</div><!-- /.col -->
								<div class="col col-xs-6">
									<div class="product-info">
										<h3 class="name"><a href="product-details.php"></a></h3>
										<div class="rating rateit-small"></div>
										<div class="product-price">	
										    <span class="price">Rs.</span>
                                        </div><!-- /.product-price -->
										<div class="action"><a href="index.php" class="lnk btn btn-primary">Add To Cart</a></div>
									</div>
								</div><!-- /.col -->
							</div><!-- /.product-micro-row -->
						</div><!-- /.product-micro -->
					</div>
                </div>
			</div>
            <div class="item">
				<div class="products">
                    <div class="product">
						<div class="product-micro">
							<div class="row product-micro-row">
								<div class="col col-xs-6">
									<div class="product-image">
										<div class="image">
											<a href="img/background.jpg" data-lightbox="image-1" data-title="">
                                                <img src="img/background.jpg" width="170" height="174" alt="">
                                                <div class="zoom-overlay"></div>
											</a>					
										</div><!-- /.image -->
                                    </div><!-- /.product-image -->
								</div><!-- /.col -->
								<div class="col col-xs-6">
									<div class="product-info">
										<h3 class="name"><a href="product-details.php"></a></h3>
										<div class="rating rateit-small"></div>
										<div class="product-price">	
										    <span class="price">Rs.</span>
                                        </div><!-- /.product-price -->
										<div class="action"><a href="index.php" class="lnk btn btn-primary">Add To Cart</a></div>
									</div>
								</div><!-- /.col -->
							</div><!-- /.product-micro-row -->
						</div><!-- /.product-micro -->
					</div>
                </div>
			</div>
		</div>
        
	</section>
    @include('includes.brands-slider')
    </div><!-- /.container -->
    </div>  
    <!-- ========================================= SECTION – HERO : END ========================================= -->	
				<!-- ============================================== INFO BOXES ============================================== -->
               
    @yield('content')

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
