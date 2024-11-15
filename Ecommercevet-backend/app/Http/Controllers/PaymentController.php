<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\PaymentIntent;
use Illuminate\Support\Facades\Auth;

class PaymentController extends Controller
{
    public function createPayment(Request $request)
    {
        \Log::info('Début de la méthode createPayment');
        Stripe::setApiKey(env('STRIPE_SECRET'));
        
        $amount = $request->input('amount');
        \Log::info("Montant reçu: $amount");
        
        if (!$amount) {
            \Log::error('Montant manquant dans la requête.');
            return response()->json(['error' => 'Montant non fourni'], 400);
        }
        
        try {
            $paymentIntent = PaymentIntent::create([
                'amount' => $amount,
                'currency' => 'eur',
                'automatic_payment_methods' => ['enabled' => true],
            ]);
            \Log::info('PaymentIntent créé avec succès.');
    
            return response()->json(['client_secret' => $paymentIntent->client_secret]);
        } catch (\Exception $e) {
            \Log::error('Erreur Stripe : ' . $e->getMessage());
            return response()->json(['error' => 'Erreur lors de la création du paiement : ' . $e->getMessage()], 500);
        }
    }
    
    
}
