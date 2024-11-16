<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\PaymentIntent;
use App\Models\Order;
use App\Models\OrderProduct;
use Illuminate\Support\Facades\DB;

class PaymentController extends Controller
{
    public function createPayment(Request $request)
    {

        if (!auth()->check()) {
            return response()->json([
                'success' => false,
                'message' => 'Utilisateur non authentifié.',
            ], 401);
        }


        Stripe::setApiKey('sk_test_51Q8gy708RD5pW73RgsD2l5VDDIRhS5ajZEWurC8DDP4uqEcUFlCwxxd6hjwqLIdAqCPbpttsFJISZ7R8NCwEGnd400oTmZBsuw'); //stocké en dur, à ne pas refaire
        $validated = $request->validate([
            'amount' => 'required|integer|min:1',
            'paymentMethodId' => 'required|string',
            'order_products' => 'required|array',
            'order_products.*.product_id' => 'required|integer|exists:products,id',
            'order_products.*.quantity' => 'required|integer|min:1',
        ]);

        $amount = $validated['amount'];
        $paymentMethodId = $validated['paymentMethodId'];
        $orderProducts = $validated['order_products'];

        DB::beginTransaction();

        try {
            \Log::info('Starting payment process', [
                'user_id' => auth()->id(),
                'amount' => $amount,
                'paymentMethodId' => $paymentMethodId,
                'orderProducts' => $orderProducts,
            ]);

            $paymentIntent = PaymentIntent::create([
                'amount' => $amount,
                'currency' => 'eur',
                'payment_method' => $paymentMethodId,
                'confirmation_method' => 'manual',
                'confirm' => true,
                'return_url' => 'http://localhost:3000/success',
            ]);

            \Log::info('PaymentIntent created', [
                'id' => $paymentIntent->id,
                'status' => $paymentIntent->status,
            ]);

            if ($paymentIntent->status === 'succeeded') {
                \Log::info('Payment succeeded', ['paymentIntentId' => $paymentIntent->id]);

                $order = Order::create([
                    'user_id' => auth()->id(),
                    'date' => now(),
                    'status' => 'confirmé',
                    'total_amount' => $amount / 100,
                ]);

                foreach ($orderProducts as $orderProduct) {
                    OrderProduct::create([
                        'order_id' => $order->id,
                        'product_id' => $orderProduct['product_id'],
                        'quantity' => $orderProduct['quantity'],
                    ]);
                }

                $orderPending = Order::where('user_id', auth()->id())->where('status', 'en attente')->first();
                if ($orderPending) {
                    $orderPending->orderProducts()->delete(); 
                    $orderPending->update(['total_amount' => 0, 'status' => 'annulé']);
                }

                DB::commit();

                return response()->json([
                    'success' => true,
                    'message' => 'Paiement et commande réussis. Panier réinitialisé.',
                    'order' => $order,
                ]);
            }

            \Log::error('Payment not confirmed', ['status' => $paymentIntent->status]);
            return response()->json(['success' => false, 'message' => 'Paiement non confirmé.'], 400);

        } catch (\Exception $e) {
            DB::rollBack();

            \Log::error('Payment error', [
                'message' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Erreur lors du paiement : ' . $e->getMessage(),
            ], 500);
        }
    }
}
