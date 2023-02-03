@extends('layouts.applayout')
@section('title')
<title>My Cart</title>
@endsection
@section('content')
<div class="breadcrumb">
    <div class="container">
        <div class="breadcrumb-inner">
            <ul class="list-inline list-unstyled">
                <li><a href="#">Home</a></li>
                <li class='active'>Shopping Cart</li>
            </ul>
        </div>
        <!-- /.breadcrumb-inner -->
    </div>
    <!-- /.container -->
</div>
<!-- /.breadcrumb -->
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
                                </thead>
                                <!-- /thead -->
                                <tfoot>
                                    <tr>
                                        <td colspan="7">
                                            <div class="shopping-cart-btn">
                                                <span class="">
                                                    <a href="index.php" class="btn btn-upper btn-primary outer-left-xs">Continue Shopping</a>
                                                    <input type="submit" name="submit" value="Update shopping cart" class="btn btn-upper btn-primary pull-right outer-right-xs">
                                                </span>
                                            </div>
                                            <!-- /.shopping-cart-btn -->
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
                                            <h4 class='cart-product-description'><a href="/product-details">productName</a></h4>
                                            <div class="row">
                                                <div class="col-sm-4">
                                                    <div class="rating rateit-small"></div>
                                                </div>
                                                <div class="col-sm-8">
                                                    <div class="reviews"></div>
                                                </div>
                                            </div>
                                            <!-- /.row -->
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
                                </tbody>
                                <!-- /tbody -->
                            </table>
                            <!-- /table -->
                    </div>
                </div>
                <!-- /.shopping-cart-table -->
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
                        </tbody>
                        <!-- /tbody -->
                    </table>
                    <!-- /table -->
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
                        </tbody>
                        <!-- /tbody -->
                    </table>
                    <!-- /table -->
                </div>
                <div class="col-md-4 col-sm-12 cart-shopping-total">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>
                                    <div class="cart-grand-total">Grand Total<span class="inner-left-md">00.00</span></div>
                                </th>
                            </tr>
                        </thead>
                        <!-- /thead -->
                        <tbody>
                            <tr>
                                <td>
                                    <div class="cart-checkout-btn pull-right">
                                        <button type="submit" name="ordersubmit" class="btn btn-primary">PROCCED TO CHEKOUT</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <!-- /tbody -->
                    </table>
                </div>
            </div>
        </div>
        </form>
    </div>
</div>
@endsection