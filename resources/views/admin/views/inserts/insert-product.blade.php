@extends('admin.views.index')
@section('adminTitle')
<title>Admin| Insert Product</title>
@endsection
@section('scripts')
	<script src="http://js.nicedit.com/nicEdit-latest.js" type="text/javascript"></script>
	<script type="text/javascript">
		bkLib.onDomLoaded(nicEditors.allTextAreas);
	</script>
	<script>
		function getSubcat(val) {
			$.ajax({
				type: "POST",
				url: "get_subcat.php",
				data: 'cat_id=' + val,
				success: function(data) {
					$("#subcategory").html(data);
				}
			});
		}
		function selectCountry(val) {
			$("#search-box").val(val);
			$("#suggesstion-box").hide();
		}
	</script>
@endsection
@section('contentAdmin')

<div class="module">
    <div class="module-head">
        <h3>Insert Product</h3>
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

        <form class="form-horizontal row-fluid" name="insertproduct" method="post" enctype="multipart/form-data">

            <div class="control-group">
                <label class="control-label" for="basicinput">Category</label>
                <div class="controls">
                    <select name="category" class="span8 tip" onChange="getSubcat(this.value);" required>
<option value="">Select Category</option> 

<option value="id">categoryName</option>

</select>
                </div>
            </div>


            <div class="control-group">
                <label class="control-label" for="basicinput">Sub Category</label>
                <div class="controls">
                    <select name="subcategory" id="subcategory" class="span8 tip" required>
</select>
                </div>
            </div>


            <div class="control-group">
                <label class="control-label" for="basicinput">Product Name</label>
                <div class="controls">
                    <input type="text" name="productName" placeholder="Enter Product Name" class="span8 tip" required>
                </div>
            </div>

            <div class="control-group">
                <label class="control-label" for="basicinput">Product Company</label>
                <div class="controls">
                    <input type="text" name="productCompany" placeholder="Enter Product Comapny Name" class="span8 tip" required>
                </div>
            </div>
            <div class="control-group">
                <label class="control-label" for="basicinput">Product Price Before Discount</label>
                <div class="controls">
                    <input type="text" name="productpricebd" placeholder="Enter Product Price" class="span8 tip" required>
                </div>
            </div>

            <div class="control-group">
                <label class="control-label" for="basicinput">Product Price After Discount(Selling Price)</label>
                <div class="controls">
                    <input type="text" name="productprice" placeholder="Enter Product Price" class="span8 tip" required>
                </div>
            </div>

            <div class="control-group">
                <label class="control-label" for="basicinput">Product Description</label>
                <div class="controls">
                    <textarea name="productDescription" placeholder="Enter Product Description" rows="6" class="span8 tip">
</textarea>
                </div>
            </div>

            <div class="control-group">
                <label class="control-label" for="basicinput">Product Shipping Charge</label>
                <div class="controls">
                    <input type="text" name="productShippingcharge" placeholder="Enter Product Shipping Charge" class="span8 tip" required>
                </div>
            </div>

            <div class="control-group">
                <label class="control-label" for="basicinput">Product Availability</label>
                <div class="controls">
                    <select name="productAvailability" id="productAvailability" class="span8 tip" required>
<option value="">Select</option>
<option value="In Stock">In Stock</option>
<option value="Out of Stock">Out of Stock</option>
</select>
                </div>
            </div>



            <div class="control-group">
                <label class="control-label" for="basicinput">Product Image1</label>
                <div class="controls">
                    <input type="file" name="productimage1" id="productimage1" value="" class="span8 tip" required>
                </div>
            </div>


            <div class="control-group">
                <label class="control-label" for="basicinput">Product Image2</label>
                <div class="controls">
                    <input type="file" name="productimage2" class="span8 tip" required>
                </div>
            </div>



            <div class="control-group">
                <label class="control-label" for="basicinput">Product Image3</label>
                <div class="controls">
                    <input type="file" name="productimage3" class="span8 tip">
                </div>
            </div>

            <div class="control-group">
                <div class="controls">
                    <button type="submit" name="submit" class="btn">Insert</button>
                </div>
            </div>
        </form>
    </div>
</div>
@endsection