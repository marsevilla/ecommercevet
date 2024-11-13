import React, { useEffect, useState } from "react";
import axios from "axios";

function Panier() {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Vous devez être connecté pour voir le panier.");
        return;
      }

      try {
        const response = await axios.get("http://localhost:8000/api/cart", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.data && response.data.order_products) {
          setCartItems(response.data.order_products);
          setTotalAmount(parseFloat(response.data.total_amount) || 0);
        } else {
          setCartItems([]);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération du panier :", error);
        setError("Erreur lors de la récupération du panier.");
      }
    };

    fetchCartItems();
  }, []);

  const updateQuantity = async (orderProductId, quantity) => {
    try {
      await axios.put(
        `http://localhost:8000/api/cart/update/${orderProductId}`,
        { quantity },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === orderProductId ? { ...item, quantity } : item
        )
      );
      recalculateTotal();
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la quantité :", error);
      setError("Impossible de mettre à jour la quantité.");
    }
  };

  const removeProduct = async (orderProductId) => {
    try {
      await axios.delete(`http://localhost:8000/api/cart/remove/${orderProductId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== orderProductId));
      recalculateTotal();
    } catch (error) {
      console.error("Erreur lors de la suppression de l'article du panier :", error);
      setError("Impossible de supprimer l'article du panier.");
    }
  };


  const recalculateTotal = () => {
    const newTotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    setTotalAmount(newTotal);
  };

  return (
    <main className="p-4">
      <h1>Mon Panier</h1>
      {error && <p className="error-message text-red-500">{error}</p>}
      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item p-4 border-b border-gray-200 flex items-center">
                <img
                  src={item.product.image_url}
                  alt={item.product.name}
                  className="product-image w-16 h-16 object-cover mr-4 rounded"
                />
                <div className="cart-item-details">
                  <h2>{item.product.name}</h2>
                  <p>Prix Unitaire : {item.product.price} €</p>
                  <p>
                    Quantité : 
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                      className="quantity-input border p-1 w-16 text-center"
                    />
                  </p>
                  <p>Total : {(item.product.price * item.quantity).toFixed(2)} €</p>
                  <button
                    onClick={() => removeProduct(item.id)}
                    className="remove-button text-red-500 hover:text-red-700 mt-2"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary mt-4">
            <h2>Total du panier : {totalAmount.toFixed(2)} €</h2>
          </div>
        </>
      )}
    </main>
  );
}

export default Panier;
