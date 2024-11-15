import React, { useState } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe('pk_test_51Q8gy708RD5pW73RGdrLYW1xRJEyl4ykZKMBoh7wmey8C1gbX7h1n15xN84mU8gaScpWQkUQAx4H47zSgPcmgc8000hnpMfXbi');

function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

    if (!stripe || !elements) {
        return;
    }

    setLoading(true);

    try {
        const { data } = await axios.post(
            "http://localhost:8000/api/payment",
            { amount: localStorage.getItem("totalAmount") * 100 }, 
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`, 
                },
            }
        );
        


        const { client_secret } = data;

        const cardElement = elements.getElement(CardElement);
        const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
            card: cardElement,
            billing_details: {
            name: "Nom de l'utilisateur",
            },
            },
        });

    if (paymentResult.error) {
        setError(paymentResult.error.message);
        } else {
            if (paymentResult.paymentIntent.status === "succeeded") {
            setPaymentSuccess(true);
            }
        }
    } catch (error) {
        setError("Erreur lors du traitement du paiement.");
    }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Informations de paiement</h2>
      {error && <p className="text-red-500">{error}</p>}
      {paymentSuccess && <p className="text-green-500">Paiement réussi!</p>}
      <div className="mb-6">
        <label htmlFor="card" className="block text-sm font-medium text-gray-700">
          Carte de crédit
        </label>
        <CardElement className="p-2 border rounded-md" id="card" />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg"
        disabled={!stripe || loading}
      >
        {loading ? "Traitement..." : "Payer maintenant"}
      </button>
    </form>
  );
}

function PaymentPage() {
  return (
    <section className="bg-gray-100 py-8">
      <div className="max-w-md mx-auto">
        <Elements stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      </div>
    </section>
  );
}

export default PaymentPage;
