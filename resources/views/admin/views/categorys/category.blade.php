@extends('admin.views.index') @section('adminTitle')
<title>Admin| Category</title>
@endsection @section('contentAdmin')

<div class="module">
    <div class="module-head">
        <h3>Category</h3>
    </div>
    <div class="module-body">
        <div class="alert alert-success">
            <button type="button" class="close" data-dismiss="alert">×</button>
            <strong>Well done!
		</div>
		<div class="alert alert-error">
			<button type="button" class="close" data-dismiss="alert">×</button>
			<strong>Oh snap!</strong>
        </div>
        <br />
        <form class="form-horizontal row-fluid" name="Category" method="post">

            <div class="control-group">
                <label class="control-label" for="basicinput">Category Name</label>
                <div class="controls">
                    <input type="text" placeholder="Enter category Name" name="category" class="span8 tip" required>
                </div>
            </div>
            <div class="control-group">
                <label class="control-label" for="basicinput">Description</label>
                <div class="controls">
                    <textarea class="span8" name="description" rows="5"></textarea>
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
        <h3>Manage Categories</h3>
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
                    <td>categoryDescription</td>
                    <td>creationDate</td>
                    <td>updationDate</td>
                    <td>
                        <a href="edit-category.php"><i class="icon-edit"></i></a>
                        <a href="category.php" onClick="return confirm('Are you sure you want to delete?')"><i class="icon-remove-sign"></i></a></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
@endsection