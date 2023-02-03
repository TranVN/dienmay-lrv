@extends('admin.views.index')
@section('adminTitle')
<title>Admin| Pending Orders</title>
@endsection
@section('contentAdmin')
@section('scripts')
<script language="javascript" type="text/javascript">
    var popUpWin = 0;

    function popUpWindow(URLStr, left, top, width, height) {
        if (popUpWin) {
            if (!popUpWin.closed) popUpWin.close();
        }
        popUpWin = open(URLStr, 'popUpWin', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,copyhistory=yes,width=' + 600 + ',height=' + 600 + ',left=' + left + ', top=' + top + ',screenX=' + left + ',screenY=' + top + '');
    }
</script>
@endsection
<div class="module">
    <div class="module-head">
        <h3>Pending Orders</h3>
    </div>
    <div class="module-body table">
        <div class="alert alert-error">
            <button type="button" class="close" data-dismiss="alert">×</button>
            <strong>Oh snap!</strong>
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
                        <td>shippingaddress<br/> .shippingcity
                            <br/> .shippingstate
                            <br/> .shippingpincode
                            <br/>
						</td>
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