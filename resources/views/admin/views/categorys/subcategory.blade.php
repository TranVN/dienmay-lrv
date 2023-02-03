@extends('admin.views.index') @section('adminTitle')
<title>Admin| SubCategory</title>
@endsection @section('contentAdmin')
<div class="module">
    <div class="module-head">
        <h3>Sub Category</h3>
    </div>
    <div class="module-body">
        <div class="alert alert-success">
            <button type="button" class="close" data-dismiss="alert">×</button>
            <strong>Well done!</strong>
        </div>
        <div class="alert alert-error">
            <button type="button" class="close" data-dismiss="alert">×</button>
            <strong>Oh snap!</strong>
        </div>
        <br />
        <form class="form-horizontal row-fluid" name="subcategory" method="post">
            <div class="control-group">
                <label class="control-label" for="basicinput">Category</label>
                <div class="controls">
                    <select name="category" class="span8 tip" required>
						<option value="">Select Category</option> 
						<option value="">categoryName</option>
					</select>
                </div>
            </div>
            <div class="control-group">
                <label class="control-label" for="basicinput">SubCategory Name</label>
                <div class="controls">
                    <input type="text" placeholder="Enter SubCategory Name" name="subcategory" class="span8 tip" required>
                </div>
            </div>
            <div class="control-group">
                <div class="controls">
                    <button type="submit" name="submit" class="btn">Create</button>
                </div>
            </div>
        </form>
    </div>
</div>
<div class="module">
    <div class="module-head">
        <h3>Sub Category</h3>
    </div>
    <div class="module-body table">
        <table cellpadding="0" cellspacing="0" border="0" class="datatable-1 table table-bordered table-striped	 display" width="100%">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Creation date</th>
                    <th>Last Updated</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>

                <tr>
                    <td>1</td>
                    <td>categoryName</td>
                    <td>subcategory</td>
                    <td>creationDate</td>
                    <td>updationDate</td>
                    <td>
                        <a href="edit-subcategory"><i class="icon-edit"></i></a>
                        <a href="subcategory.php" onClick="return confirm('Are you sure you want to delete?')"><i class="icon-remove-sign"></i></a>
					</td>
                </tr>
			</tbody>
        </table>
    </div>
</div>
@endsection