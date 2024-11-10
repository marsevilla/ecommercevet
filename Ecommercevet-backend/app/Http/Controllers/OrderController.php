<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{

    public function index()
    {
        $orders = Auth::user()->orders()->with('orderProducts')->get();
        return response()->json($orders, 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'order_products' => 'required|array',
            'order_products.*.product_id' => 'required|exists:products,id',
            'order_products.*.quantity' => 'required|integer',
            'total_amount' => 'required',
        ]);

        $order = Order::create([
            'user_id' => Auth::id(),
            'date' => now(),
            'status' => 'en attente',
            'total_amount' => $validated['total_amount'],
        ]);

        foreach ($validated['order_products'] as $orderProduct) {
            $order->orderProducts()->create([
                'product_id' => $orderProduct['product_id'],
                'quantity' => $orderProduct['quantity'],
            ]);
        }

        return response()->json($order->load('orderProducts'), 201);
    }


    public function show($id)
    {
        $order = Auth::user()->orders()->with('orderProducts')->find($id);

        if (!$order) {
            return response()->json(['error' => 'Order not found'], 404);
        }

        return response()->json($order, 200);
    }


    public function update(Request $request, $id)
    {
        $order = Auth::user()->orders()->find($id);

        if (!$order) {
            return response()->json(['error' => 'Order not found'], 404);
        }

        $validated = $request->validate([
            'status' => 'required|in:en attente,confirmé,annulé',
        ]);

        $order->update(['status' => $validated['status']]);

        return response()->json($order, 200);
    }


    public function destroy($id)
    {
        $order = Auth::user()->orders()->find($id);

        if (!$order) {
            return response()->json(['error' => 'Order not found'], 404);
        }

        $order->delete();

        return response()->json(['message' => 'Order deleted successfully'], 200);
    }
}
