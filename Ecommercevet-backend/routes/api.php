<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderProductController;
use App\Http\Controllers\UserController;


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::get('/productcategory/{category}', [ProductController::class, 'filterByCategory']);



Route::middleware(['auth:sanctum'])->group(function () {
        Route::post('/logout', [AuthController::class, 'logout']);
        Route::post('/products', [ProductController::class, 'store']);
        Route::put('/products/{id}', [ProductController::class, 'update']);
        Route::delete('/products/{id}', [ProductController::class, 'destroy']);
        Route::get('/orders', [OrderController::class, 'index']);
        Route::post('/orders', [OrderController::class, 'store']);
        Route::get('/orders/{id}', [OrderController::class, 'show']);
        Route::put('/orders/{id}', [OrderController::class, 'update']);
        Route::delete('/orders/{id}', [OrderController::class, 'destroy']);
        Route::post('/payment', [PaymentController::class, 'createPayment']);
        Route::get('cart', [OrderController::class, 'showCart']);
        Route::post('cart/add', [OrderProductController::class, 'store']);
        Route::post('cart/checkout/{orderId}', [OrderController::class, 'checkout']);
        Route::put('cart/update/{orderProductId}', [OrderProductController::class, 'updateQuantity']);
        Route::delete('cart/remove/{orderProductId}', [OrderProductController::class, 'removeProduct']);
        Route::put('/user', [UserController::class, 'updateProfile']);
        
    });

