@extends('admin.views.index')
@section('adminTitle')
<title>Admin| Pending Orders</title>
@endsection
@section('contentAdmin')
<div class="module">
    <div class="module-head">
        <h3>Pending Orders</h3>
    </div>
    <div class="module-body table">
        <div class="alert alert-error">
            <button type="button" class="close" data-dismiss="alert">×</button>
            <strong>Oh snap!</strong>
        </div>
        <br />
        <table cellpadding="0" cellspacing="0" border="0" class="datatable-1 table table-bordered table-striped	 display table-responsive">
            <thead>
                <tr>
                    <th>#</th>
                    <th> Name</th>
                    <th width="50">Email /Contact no</th>
                    <th>Shipping Address</th>
                    <th>Product </th>
                    <th>Qty </th>
                    <th>Amount </th>
                    <th>Order Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>username</td>
                    <td>useremail/usercontact</td>
                    <td>shippingaddress
                        <br/>shippingcity
                        <br/>shippingstate
                        <br/>shippingpincode</td>
                    <td>productname</td>
                    <td>quantity</td>
                    <td>shippingcharge</td>
                    <td>orderdate</td>
                    <td> <a href="updateorder.php" title="Update order" target="_blank"><i class="icon-edit"></i></a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
@endsection