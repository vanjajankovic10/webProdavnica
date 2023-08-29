<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderItemController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('products',[ProductController::class,'index']);
Route::get('products/{id}',[ProductController::class,'show']);



Route::get('categories',[CategoryController::class,'index']);



 

Route::post('register',[AuthController::class,'register']);
Route::post('login',[AuthController::class,'login']);
Route::post('logout',[AuthController::class,'logout']);

Route::post('orders',[OrderController::class,'store']);
Route::post('orderItems',[OrderItemController::class,'store']);

Route::post('products',[ProductController::class,'store']);
Route::put('products/{id}',[ProductController::class,'update']);
Route::delete('products/{id}',[ProductController::class,'destroy']);
Route::get('orders',[OrderController::class,'index']);
Route::get('orderItems',[OrderItemController::class,'index']);




Route::middleware('auth:sanctum')->get('/user', function (Request $request) {  
     


});


 
