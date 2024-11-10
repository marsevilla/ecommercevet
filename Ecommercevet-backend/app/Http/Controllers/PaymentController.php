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

        Stripe::setApiKey(env('STRIPE_SECRET')); 

        $amount = $request->input('amount'); 
        $paymentMethodId = $request->input('paymentMethodId');
        $orderProducts = $request->input('order_products'); 

        DB::beginTransaction();  

        try {
            $paymentIntent = PaymentIntent::create([
                'amount' => $amount,
                'currency' => 'eur',
                'payment_method' => $paymentMethodId,
                'confirmation_method' => 'manual',
                'confirm' => true,
                'return_url' => 'http://localhost:3000/success',  
            ]);

            if ($paymentIntent->status == 'succeeded') {
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

                DB::commit(); 

                return response()->json([
                    'success' => true,
                    'message' => 'Paiement et commande réussis.',
                    'order' => $order,
                ]);
            }

            return response()->json(['success' => false, 'message' => 'Paiement non confirmé.'], 400);

        } catch (\Exception $e) {
            DB::rollBack(); 
            return response()->json([
                'success' => false,
                'message' => 'Erreur lors du paiement : ' . $e->getMessage(),
            ], 500);
        }
    }
}
