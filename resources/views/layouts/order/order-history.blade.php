@extends('layouts.applayout')
@section('title')
<title>Order History</title>
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
                                        <th class="cart-romove item">#</th>
                                        <th class="cart-description item">Image</th>
                                        <th class="cart-product-name item">Product Name</th>

                                        <th class="cart-qty item">Quantity</th>
                                        <th class="cart-sub-total item">Price Per unit</th>
                                        <th class="cart-sub-total item">Shipping Charge</th>
                                        <th class="cart-total item">Grandtotal</th>
                                        <th class="cart-total item">Payment Method</th>
                                        <th class="cart-description item">Order Date</th>
                                        <th class="cart-total last-item">Action</th>
                                    </tr>
                                </thead>
                                <!-- /thead -->

                                <tbody>

                                    <tr>
                                        <td>1</td>
                                        <td class="cart-image">
                                            <a class="entry-thumbnail" href="detail.html">
                                                <img src="admin/productimages/" alt="" width="84" height="146">
                                            </a>
                                        </td>
                                        <td class="cart-product-name-info">
                                            <h4 class='cart-product-description'>
                                                <a href="/product-details">
                                                </a>
                                            </h4>


                                        </td>
                                        <td class="cart-product-quantity">cart-product-quantity

                                        </td>
                                        <td class="cart-product-sub-total">cart-product-sub-total</td>
                                        <td class="cart-product-sub-total">cart-product-sub-total</td>
                                        <td class="cart-product-grand-total">cart-product-grand-total</td>
                                        <td class="cart-product-sub-total">cart-product-sub-total</td>
                                        <td class="cart-product-sub-total">cart-product-sub-total</td>

                                        <td>
                                            <a href="javascript:void(0);" onClick="popUpWindow('track-order.php');" title="Track order">
					Track</td>
				</tr>
				
			</tbody><!-- /tbody -->
		</table><!-- /table -->
		
	</div>
</div>

		</div><!-- /.shopping-cart -->
		</div> <!-- /.row -->
		</form>

<!-- ============================================== BRANDS CAROUSEL : END ============================================== -->	</div><!-- /.container -->
</div><!-- /.body-content -->
@endsection