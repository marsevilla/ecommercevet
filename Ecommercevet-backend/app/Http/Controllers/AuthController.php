<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;



class AuthController extends Controller
{


public function register(Request $request)
{
    $validator = Validator::make($request->all(), [
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users',
        'password' => ['required', 'string', 'min:8', 'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/'],
    ]);

    if ($validator->fails()) {
        return response()->json($validator->errors(), 422);
    }

    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),

    ]);

    return response()->json([
        'user' => $user,
    ], 201);
}


    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if($validator->fails()){
            return response()->json([
                'status'=>false,
                'message' => 'Validation error',
                'errors' => $validator->errors(),
            ], 401);
        }

        if (Auth::attempt($request->only('email', 'password'))) {
            if(auth('sanctum')->check()){
                auth()->user()->tokens()->delete();
            }

            $user = Auth::user();
            $token = $user->createToken("API TOKEN")->plainTextToken;
            return response()->json([
                'status'=>true,
                'message' => 'Login successful',
                'user' => $user,
                "token" => $token,
            ], 200);
        }

        return response()->json([
            'status' => false,
            'message' => 'Invalid credentials',
        ], 401);
    }

    
    public function logout(Request $request)
    {
        $user = Auth::user();

        if ($user) {
            $user->tokens()->delete();

            return response()->json([
                'status' => true,
                'message' => 'Logout successful',
            ], 200);
        }
    }
}
