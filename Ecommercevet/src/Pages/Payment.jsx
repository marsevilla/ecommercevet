import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const stripePromise = loadStripe("pk_test_51Q8gy708RD5pW73RGdrLYW1xRJEyl4ykZKMBoh7wmey8C1gbX7h1n15xN84mU8gaScpWQkUQAx4H47zSgPcmgc8000hnpMfXbi");

function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);

    const handlePayment = async (e) => {
        e.preventDefault();

    if (!stripe || !elements) {
        setError("Stripe n'est pas encore chargé.");
        return;
    }

    setLoading(true);
    setError(null);

    try {
        const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });

    if (stripeError) {
        setError(`Erreur Stripe: ${stripeError.message}`);
        setLoading(false);
        return;
    }

        console.log("PaymentMethod ID:", paymentMethod.id);

        const response = await axios.post(
            "http://localhost:8000/api/payment",
        {
            paymentMethodId: paymentMethod.id,
            amount: 719100,
            order_products: [
                { product_id: 1, quantity: 2 },
                { product_id: 2, quantity: 1 },
            ],
        },
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            withCredentials: true,
            }
        );

    if (response.data.success) {
        setSuccess("Paiement réussi !");
        setError(null);
    } else {
        setError(response.data.message || "Le paiement a échoué.");
    }
    } catch (err) {
        console.error("Erreur lors du paiement :", err);
        setError("Une erreur est survenue pendant le traitement du paiement.");
    }

        setLoading(false);
    };

    return (
        <section className="bg-white py-10 antialiased" style={{ backgroundColor: "#EECAD0" }}>
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-4xl bg-white rounded-lg shadow-lg">
            <div className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                Paiement
            </h2>
            <p className="text-gray-600 mt-2">
                Complétez votre paiement de manière sécurisée.
            </p>
            </div>
            <form
                onSubmit={handlePayment}
                className="p-6 lg:p-10 space-y-6"
            style={{
                border: "2px solid #EECAD0",
                borderRadius: "10px",
                backgroundColor: "#FFFFFF",
                }}
            >
            <div className="space-y-4">
                <div>
                <label
                    htmlFor="full_name"
                    className="block text-sm font-medium text-gray-700"
                >
                    Nom complet (comme affiché sur la carte)*
                </label>
                <input
                    type="text"
                    id="full_name"
                    className="mt-1 block w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-pink-400 focus:ring-pink-400"
                    placeholder="Exemple : Jean Dupont"
                    required
                />
                </div>
            <div>
                <label
                    htmlFor="card-number-input"
                    className="block text-sm font-medium text-gray-700"
                >
                    Numéro de carte*
                </label>
                <div className="mt-1 block w-full rounded-lg border border-gray-300 p-3 text-sm focus-within:ring-1 focus-within:ring-pink-400">
                    <CardElement />
                </div>
            </div>
        </div>

            {error && (
                <p className="text-red-500 text-sm mt-2">
                    {error}
                </p>
            )}
            {success && (
                <p className="text-green-500 text-sm mt-2">
                {success}
                </p>
            )}

            <div className="flex justify-center">
                <button
                    type="submit"
                    className="rounded-lg px-6 py-2 text-sm font-bold text-white hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-pink-300"
                disabled={loading || !stripe}
                style={{
                    backgroundColor: "#EECAD0",
                    }}
                >
                {loading ? "Traitement..." : "Payer maintenant"}
                    </button>
                </div>
            </form>
        </div>
    </div>
    </section>
    );
}

function PaymentPage() {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm />
        </Elements>
    );
}

export default PaymentPage;
