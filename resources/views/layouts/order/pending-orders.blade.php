@extends('layouts.applayout')
@section('title')
<title>Pending Order History</title>
@endsection
@section('content')
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
		@endsection