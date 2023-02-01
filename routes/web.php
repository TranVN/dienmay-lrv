<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('pages.homepage');
});
Route::get('/login', function () {
    return view('layouts.login');
});
Route::get('/category', function () {
    return view('layouts.category');
});
Route::get('/product-details', function () {
    return view('layouts.product-details');
});
Route::get('/my-cart', function () {
    return view('layouts.mycart');
});
Route::get('/order-detail', function () {
    return view('layouts.order-detail');
});
Route::get('/track-order', function () {
    return view('includes.track-order');
});
Route::get('/pending-orders', function () {
    return view('layouts.pending-orders');
});
Route::get('/payment-method', function () {
    return view('layouts.payment-method');
});
Route::get('/my-wishlist', function () {
    return view('layouts.my-wishlist');
});


