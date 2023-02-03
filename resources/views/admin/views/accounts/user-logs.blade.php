@section('scripts')
<script src="scripts/datatables/jquery.dataTables.js"></script>
@endsection @extends('admin.views.index') @section('adminTitle')
<title>Admin| Users log</title>
@endsection @section('contentAdmin')
<div class="module">
    <div class="module-head">
        <h3>Manage Users</h3>
    </div>
    <div class="module-body table">


        <table cellpadding="0" cellspacing="0" border="0" class="datatable-1 table table-bordered table-striped	 display" width="100%">
            <thead>
                <tr>
                    <th>#</th>
                    <th> User Email</th>
                    <th>User IP </th>
                    <th>Login Time</th>
                    <th>Logout Time </th>
                    <th>Status </th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>userEmail</td>
                    <td>userip</td>
                    <td>loginTime</td>
                    <td>logout</td>
                    <td>status</td>

        </table>
    </div>
</div>


@endsection