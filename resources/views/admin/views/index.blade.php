<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	@yield('adminTitle')
	<link type="text/css" href="{{asset('admin/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet">
	<link type="text/css" href="{{asset('admin/bootstrap/css/bootstrap-responsive.min.css')}}" rel="stylesheet">
	<link type="text/css" href="{{asset('admin/css/theme.css')}}" rel="stylesheet">
	<link type="text/css" href="{{asset('admin/images/icons/css/font-awesome.css')}}" rel="stylesheet">
	<link type="text/css" href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600' rel='stylesheet'>
</head>
<body>
	<div class="container-fuild">
		@include('admin.include.header')
			<div class="wrapper">
				<div class="container">
					<div class="row">
				@include('admin.include.sidebar')				
					<div class="span9">
							<div class="content">
								@yield('contentAdmin')
							</div><!--/.content-->
						</div><!--/.span9-->
					</div>
				</div><!--/.container-->
			</div><!--/.wrapper-->
		@include('admin.include.footer')
	</div>
	@yield('scripts')
	
	<script src="{{url('admin/scripts/jquery-1.9.1.min.js')}}" type="text/javascript"></script>
	<script src="{{url('admin/scripts/jquery-ui-1.10.1.custom.min.js')}}" type="text/javascript"></script>
	<script src="{{url('admin/bootstrap/js/bootstrap.min.js')}}" type="text/javascript"></script>
	<script src="{{url('scripts/flot/jquery.flot.js')}}" type="text/javascript"></script>
	<script src="{{url('scripts/datatables/jquery.dataTables.js')}}"></script>
</body>