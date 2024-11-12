import React, { useState, useEffect } from "react";
import axios from "axios";

const Panier = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/cart", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setCartItems(response.data.orderProducts);
      setTotalAmount(response.data.total_amount);
    } catch (error) {
      console.error("Erreur lors de la récupération du panier :", error);
    }
  };

  const addProductToCart = async (productId, quantity, size) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/cart/add",
        { product_id: productId, quantity, size },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      fetchCartItems(); 
    } catch (error) {
      console.error("Erreur lors de l'ajout du produit au panier :", error);
    }
  };

  const updateProductQuantity = async (orderProductId, quantity) => {
    try {
      await axios.put(
        `http://localhost:8000/api/cart/update/${orderProductId}`,
        { quantity },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      fetchCartItems(); 
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la quantité :", error);
    }
  };

  const removeProductFromCart = async (orderProductId) => {
    try {
      await axios.delete(
        `http://localhost:8000/api/cart/remove/${orderProductId}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      fetchCartItems(); 
    } catch (error) {
      console.error("Erreur lors de la suppression du produit du panier :", error);
    }
  };


  const checkout = async () => {
    try {
      const orderId = cartItems[0]?.order_id; 
      await axios.post(`http://localhost:8000/api/cart/checkout/${orderId}`, {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      alert("Commande confirmée !");
      fetchCartItems(); 
    } catch (error) {
      console.error("Erreur lors de la confirmation de la commande :", error);
    }
  };

  return (
    <div className="cart-container">
      <h1>Mon Panier</h1>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.product.image_url} alt={item.product.name} className="product-image" />
                <div className="product-details">
                  <h2>{item.product.name}</h2>
                  <p>Taille : {item.size || "N/A"}</p>
                  <p>Prix Unitaire : {item.product.price} €</p>
                  <p>Quantité : 
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateProductQuantity(item.id, e.target.value)}
                      className="quantity-input"
                    />
                  </p>
                  <p>Total : {(item.price).toFixed(2)} €</p>
                  <button
                    onClick={() => removeProductFromCart(item.id)}
                    className="remove-button"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Total : {totalAmount.toFixed(2)} €</h2>
            <button onClick={checkout} className="checkout-button">
              Passer la commande
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Panier;
