<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderProduct;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function showCart()
    {
        $order = Order::firstOrCreate(
            ['user_id' => Auth::id(), 'status' => 'en attente'],
            ['date' => now(), 'total_amount' => 0]
        );
    
        $order->load('orderProducts.product');
        \Log::info('Commande récupérée:', $order->toArray());
        return response()->json($order, 200);
    }
    

    public function updateTotalAmount($order)
    {
        $totalAmount = $order->orderProducts->sum(function ($orderProduct) {
            return $orderProduct->price * $orderProduct->quantity;
        });

        $order->update(['total_amount' => $totalAmount]);
    }

    public function checkout(Request $request, $orderId)
    {
        $order = Order::findOrFail($orderId);

        if ($order->status != 'en attente') {
            return response()->json(['error' => 'Order is already confirmed or canceled'], 400);
        }
        $order->update(['status' => 'confirmé']);
        return response()->json(['message' => 'Order confirmed successfully'], 200);
    }

    public function validatedOrders(){
        if (!Auth::user()->isAdmin()) {
            return response()->json(['error' => 'Access denied. Admins only.'], 403); 
        }
        $validatedOrders = Order::where('status', 'confirmé')->with('user:id,name')->get();
        return response()->json($validatedOrders, 200); 
    }
}
