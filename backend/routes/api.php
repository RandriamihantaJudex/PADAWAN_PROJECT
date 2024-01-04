<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

// route for everyone
Route::get('/', function(){
    return view('welcome');
})->name('accueil');

Route::post('login', [LoginController::class, 'login']);
Route::post('register', [LoginController::class, 'register']);

// protected route, only for user authenticated
Route::group(['middleware'=> ['auth:sanctum']], function (){
    Route::post('logout', [LoginController::class, 'logout']);

    // user route
    Route::get('user/auth', [UserController::class, 'getAuthenticatedUser']);
        // asina parametre id ana user ande tadiavina ny URL am farany exemple user/other/3  
    Route::get('user/other/{id}', [UserController::class, 'getOtherUser']);
    Route::get('user/allother', [UserController::class, 'getAllOtherUser']);
        // asina parametre ana id an ilay user authentifier iany ny URL am farany
    Route::post('user/update/{id}', [UserController::class, 'updateUser']);
    Route::post('user/search', [UserController::class, 'searchUser']);
});
