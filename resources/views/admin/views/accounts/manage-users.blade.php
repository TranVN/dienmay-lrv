@extends('admin.views.index')
@section('adminTitle')
<title>Manage Users</title>
@endsection
@section('contentAdmin')
<div class="module">
    <div class="module-head">
        
    </div>
    <div class="module-body table">
        <div class="alert alert-error">
            <button type="button" class="close" data-dismiss="alert">×</button>
            <strong>Oh snap!</strong>
        </div>
        <br />
        <table cellpadding="0" cellspacing="0" border="0" class="datatable-1 table table-bordered table-striped	 display" width="100%">
            <thead>
                <tr>
                    <th>#</th>
                    <th> Name</th>
                    <th>Email </th>
                    <th>Contact no</th>
                    <th>Shippping Address/City/State/Pincode </th>
                    <th>Billing Address/City/State/Pincode </th>
                    <th>Reg. Date </th>

                </tr>
            </thead>
            <tbody>

                <tr>
                    <td>1</td>
                    <td>name</td>
                    <td>email</td>
                    <td> contactno</td>
                    <td>shippingAddress<br/> shippingCity
                        <br/> shippingState
                        <br/> shippingPincode
                        <br/>

                    </td>
                    <td>billingAddress<br/> billingCity
                        <br/> billingState
                        <br/> billingPincode
                        <br/>
                    </td>
				</tr>
			</tbody>
        </table>
    </div>
</div>
@endsection