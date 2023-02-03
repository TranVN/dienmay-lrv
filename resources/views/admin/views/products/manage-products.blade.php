@extends('admin.views.index')
@section('adminTitle')
<title>Admin| Manage Product</title>
@endsection
@section('contentAdmin')
<div class="module">
    <div class="module-head">
        <h3>Manage Products</h3>
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
                    <th>Product Name</th>
                    <th>Category </th>
                    <th>Subcategory</th>
                    <th>Company Name</th>
                    <th>Product Creation Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>productName</td>
                    <td>categoryName</td>
                    <td>subcategory</td>
                    <td>productCompany</td>
                    <td>postingDate</td>
                    <td>
                        <a href="edit-products.php"><i class="icon-edit"></i></a>
                        <a href="manage-products.php" onClick="return confirm('Are you sure you want to delete?')"><i class="icon-remove-sign"></i></a></td>
                </tr>
        </table>
    </div>
</div>				
	@endsection
@section('scripts')
	<script>
		$(document).ready(function() {
			$('.datatable-1').dataTable();
			$('.dataTables_paginate').addClass("btn-group datatable-pagination");
			$('.dataTables_paginate > a').wrapInner('<span />');
			$('.dataTables_paginate > a:first-child').append('<i class="icon-chevron-left shaded"></i>');
			$('.dataTables_paginate > a:last-child').append('<i class="icon-chevron-right shaded"></i>');
		} );
	</script>
@endsection
