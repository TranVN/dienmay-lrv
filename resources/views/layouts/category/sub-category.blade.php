@extends('layouts.applayout')
@section('title') 
<title>Sub Categoy</title>
@endsection
@section('content')
<div class="body-content outer-top-xs">
    <div class='container'>
        <div class='row outer-bottom-sm'>
            <div class='col-md-3 sidebar'>
                <!-- ================================== TOP NAVIGATION ================================== -->
                <!-- ================================== TOP NAVIGATION : END ================================== -->
                <div class="sidebar-module-container">
                    <h3 class="section-title">shop by</h3>
                    <div class="sidebar-filter">
                        <!-- ============================================== SIDEBAR CATEGORY ============================================== -->
                        <div class="sidebar-widget wow fadeInUp outer-bottom-xs ">
                            <div class="widget-header m-t-20">
                                <h4 class="widget-title">Category</h4>
                            </div>
                            <div class="sidebar-widget-body m-t-10">categoryName
                                <div class="accordion">
                                    <div class="accordion-group">
                                        <div class="accordion-heading">
                                            <a href="category.php" class="accordion-toggle collapsed">categoryName</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /.sidebar-widget-body -->
                        </div>
                    </div>
                    <!-- /.sidebar-filter -->
                </div>
                <!-- /.sidebar-module-container -->
            </div>
            <!-- /.sidebar -->
            <div class='col-md-9'>
                <div id="category" class="category-carousel hidden-xs">
                    <div class="item">
                        <div class="image">
                            <img src="assets/images/banners/cat-banner-2.jpg" alt="" class="img-responsive">
                        </div>
                        <div class="container-fluid">
                            <div class="caption vertical-top text-left">
                                <div class="big-text">
                                    <br />
                                </div>
                                <div class="excerpt hidden-sm hidden-md">subcategory</div>
                            </div>
                            <!-- /.caption -->
                        </div>
                        <!-- /.container-fluid -->
                    </div>
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
                                                        <a href="product-details.php"><img src="assets/images/blank.gif" data-echo="admin/productimages/" alt="" width="200" height="300"></a>
                                                    </div>
                                                    <!-- /.image -->
                                                </div>
                                                <!-- /.product-image -->
                                                <div class="product-info text-left">
                                                    <h3 class="name">
                                                        <a href="product-details.php"></a>
                                                    </h3>
                                                    <div class="rating rateit-small">rating</div>
                                                    <div class="description">description</div>
                                                    <div class="product-price">
                                                        <span class="price">Rs.</span>
                                                        <span class="price-before-discount">Rs.</span>
                                                    </div>
                                                    <!-- /.product-price -->
                                                </div>
                                                <!-- /.product-info -->
                                                <div class="cart clearfix animate-effect">
                                                    <div class="action">
                                                        <ul class="list-unstyled">
                                                            <li class="add-cart-button btn-group">
                                                                <button class="btn btn-primary icon" data-toggle="dropdown" type="button"><i class="fa fa-shopping-cart"></i></button>
                                                                <a href="category.php">
                                                                    <button class="btn btn-primary" type="button">Add to cart</button>
                                                                </a>
                                                            </li>
                                                            <li class="lnk wishlist">
                                                                <a class="add-to-cart" href="category.php" title="Wishlist">
                                                                    <i class="icon fa fa-heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <!-- /.action -->
                                                </div>
                                                <!-- /.cart -->
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-4 wow fadeInUp">
                                        <h3>No Product Found</h3>
                                    </div>
                                </div>
                                <!-- /.row -->
                            </div>
                            <!-- /.category-product -->
                        </div>
                        <!-- /.tab-pane -->
                    </div>
                    <!-- /.search-result-container -->
                </div>
                <!-- /.col -->
            </div>
        </div>
    </div>
</div>
@endsection