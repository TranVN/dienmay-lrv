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
    return view('login.login');
});
Route::get('/category', function () {
    return view('layouts.category.category');
});
Route::get('/product-details', function () {
    return view('layouts.product.product-details');
});
Route::get('/my-cart', function () {
    return view('layouts.cart.mycart');
});
Route::get('/order-detail', function () {
    return view('layouts.order.order-detail');
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
    return view('layouts.cart.my-wishlist');
});
Route::get('/sub-category', function () {
    return view('layouts.category.sub-category');
});
Route::get('/my-account', function () {
    return view('login.my-account');
});
Route::get('/order-history', function () {
    return view('layouts.order.order-history');
});

Route::get('/pageAdmin', function () {
    return view('admin.views.products.manage-products');
});
Route::get('/admin-homepages', function () {
    return view('admin.views.layouts.homepages');
});
Route::get('/admin-manage-users', function () {
    return view('admin.views.accounts.manage-users');
});
Route::get('/admin-todays-orders', function () {
    return view('admin.views.orders.todays-orders');
});
Route::get('/admin-pending-orders', function () {
    return view('admin.views.orders.pending-orders');
});
Route::get('/admin-delivered-orders', function () {
    return view('admin.views.orders.delivered-orders');
});
Route::get('/admin-category', function () {
    return view('admin.views.categorys.category');
});
Route::get('/admin-subcategory', function () {
    return view('admin.views.categorys.subcategory');
});
Route::get('/admin-insert-product', function () {
    return view('admin.views.inserts.insert-product');
});
Route::get('/admin-user-logs', function () {
    return view('admin.views.accounts.user-logs');
});
Route::get('/admin-logout', function () {
    return view('admin.views.accounts.logout');
});