@extends('layouts.applayout')
@section('title')
<title>Order History</title>
@endsection
@section('content')
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
						<a class="entry-thumbnail" href="/product-details">
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
      
<!-- ============================================== BRANDS CAROUSEL : END ============================================== -->	</div><!-- /.container -->
</div><!-- /.body-content -->

@endsection