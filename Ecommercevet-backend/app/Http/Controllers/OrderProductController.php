<?php

namespace App\Http\Controllers;
use App\Models\Order;
use App\Models\OrderProduct;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderProductController extends Controller
{
    public function index($orderId)
    {
        $orderProducts = OrderProduct::where('order_id', $orderId)->with('product')->get();
        return response()->json($orderProducts, 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
            'size' => 'nullable|string',
        ]);
    
        $order = Order::firstOrCreate(
            ['user_id' => Auth::id(), 'status' => 'en attente'],
            ['date' => now(), 'total_amount' => 0]
        );
    
        $validated['order_id'] = $order->id;
        $orderProduct = OrderProduct::where('order_id', $order->id)
            ->where('product_id', $validated['product_id'])
            ->first();
    
        if ($orderProduct) {

            $orderProduct->quantity += $validated['quantity'];
            $orderProduct->save();
        } else {
            $orderProduct = OrderProduct::create($validated);
        }
        app(OrderController::class)->updateTotalAmount($order);
    
        return response()->json($orderProduct, 201);
    }
    
    public function destroy($id)
    {
        $orderProduct = OrderProduct::find($id);

        if (!$orderProduct) {
            return response()->json(['error' => 'Order product not found'], 404);
        }

        $orderProduct->delete();

        return response()->json(['message' => 'Order product deleted successfully'], 200);
    }

    public function updateQuantity(Request $request, $orderProductId)
    {
        $validated = $request->validate([
            'quantity' => 'required|integer|min:1',
        ]);

        $orderProduct = OrderProduct::find($orderProductId);

        if (!$orderProduct) {
            return response()->json(['error' => 'Produit non trouvé dans le panier'], 404);
        }

        $orderProduct->quantity = $validated['quantity'];
        $orderProduct->save();

        return response()->json(['message' => 'Quantité mise à jour avec succès'], 200);
    }

    public function removeProduct($orderProductId)
{
    $orderProduct = OrderProduct::find($orderProductId);
    if (!$orderProduct) {
        return response()->json(['message' => 'Produit non trouvé dans le panier.'], 404);
    }
    $orderProduct->delete();
    return response()->json(['message' => 'Produit supprimé avec succès.'], 200);
}

}
