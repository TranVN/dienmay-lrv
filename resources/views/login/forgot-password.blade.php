@extends('layouts.applayout')
@section('title')<title>
    My Account</title>
@endsection
@section('content')
@section('scripts')
<script type="text/javascript">
    function valid() {
        if (document.register.password.value != document.register.confirmpassword.value) {
            alert("Password and Confirm Password Field do not match  !!");
            document.register.confirmpassword.focus();
            return false;
        }
        return true;
    }
</script>
@endsection
<!-- ============================================== HEADER : END ============================================== -->
<div class="breadcrumb">
    <div class="container">
        <div class="breadcrumb-inner">
            <ul class="list-inline list-unstyled">
                <li><a href="home.html">Home</a></li>
                <li class='active'>Forgot Password</li>
            </ul>
        </div>
        <!-- /.breadcrumb-inner -->
    </div>
    <!-- /.container -->
</div>
<!-- /.breadcrumb -->

<div class="body-content outer-top-bd">
    <div class="container">
        <div class="sign-in-page inner-bottom-sm">
            <div class="row">
                <!-- Sign-in -->
                <div class="col-md-6 col-sm-6 sign-in">
                    <h4 class="">Forgot password</h4>
                    <form class="register-form outer-top-xs" name="register" method="post">
                        <span style="color:red;">
        </span>
                        <div class="form-group">
                            <label class="info-title" for="exampleInputEmail1">Email Address <span>*</span></label>
                            <input type="email" name="email" class="form-control unicase-form-control text-input" id="exampleInputEmail1" required>
                        </div>
                        <div class="form-group">
                            <label class="info-title" for="exampleInputPassword1">Contact no <span>*</span></label>
                            <input type="text" name="contact" class="form-control unicase-form-control text-input" id="contact" required>
                        </div>
                        <div class="form-group">
                            <label class="info-title" for="password">Password. <span>*</span></label>
                            <input type="password" class="form-control unicase-form-control text-input" id="password" name="password" required>
                        </div>

                        <div class="form-group">
                            <label class="info-title" for="confirmpassword">Confirm Password. <span>*</span></label>
                            <input type="password" class="form-control unicase-form-control text-input" id="confirmpassword" name="confirmpassword" required>
                        </div>



                        <button type="submit" class="btn-upper btn btn-primary checkout-page-button" name="change">Change</button>
                    </form>
                </div>
                <!-- Sign-in -->


                <!-- create a new account -->
            </div>
            <!-- /.row -->
        </div>