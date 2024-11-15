import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

// const PaymentForm = ({ totalAmount }) => {
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const stripe = useStripe();
//   const elements = useElements();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       // Créer un paiement via l'API backend
//       const { data: { paymentMethodId, amount } } = await axios.post("http://localhost:8000/api/payment-intent", {
//         amount: totalAmount * 100, // Montant en centimes
//       }, {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
//       });

//       const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
//         type: "card",
//         card: elements.getElement(CardElement),
//       });

//       if (stripeError) {
//         setError(stripeError.message);
//         setLoading(false);
//         return;
//       }

//       // Confirmation du paiement
//       const response = await axios.post("http://localhost:8000/api/payment", {
//         paymentMethodId: paymentMethod.id,
//         amount: amount,
//       });

//       if (response.data.success) {
//         setSuccess("Paiement réussi !");
//         setError(null);
//         setTimeout(() => navigate("/"), 2000); // Redirige après succès
//       } else {
//         setError("Le paiement a échoué.");
//       }
//     } catch (err) {
//       console.error("Erreur lors du paiement :", err);
//       setError("Une erreur est survenue lors du paiement.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-12 mt-16 mb-4">
//       <h1 className="text-4xl font-bold mb-6 text-center">Détails de paiement</h1>
//       <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-lg mx-auto">
//         <div className="mb-6">
//           <p className="text-lg font-bold">Montant total : {totalAmount} €</p>
//         </div>
//         <div className="mb-6">
//           <label htmlFor="card" className="block text-xl font-semibold mb-3">
//             Informations de paiement
//           </label>
//           <CardElement className="p-3 border border-gray-300 rounded-lg" />
//         </div>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         {success && <p className="text-green-500 mb-4">{success}</p>}
//         <div className="text-center">
//           <button
//             type="submit"
//             className="bg-blue-600 text-white text-lg px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
//             disabled={loading || !stripe}
//           >
//             {loading ? "Processing..." : "Payer"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// const PaymentComponent = () => {
//   const [totalAmount] = useState(parseFloat(localStorage.getItem("totalAmount"))); // Get total from storage
//   return (
//     <Elements stripe={stripePromise}>
//       <PaymentForm totalAmount={totalAmount} />
//     </Elements>
//   );
// };

export default PaymentComponent;
