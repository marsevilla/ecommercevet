import { useState } from "react";
import axios from "axios";

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);

  const addToCart = async (productId) => {
    try {
      await axios.post(
        "http://localhost:8000/api/cart/add",
        { product_id: productId, quantity: 1 },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      alert("Produit ajouté au panier !");
    } catch (error) {
      console.error("Erreur lors de l'ajout au panier :", error);
      alert("Une erreur est survenue lors de l'ajout au panier.");
    }
  };

  const handleCardClick = () => {
    window.location.href = `/product/${product.id}`;
  };
  
  return (
    <div
      className="productCard"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleCardClick}
    >
      <img
        className="productCard__img object-cover w-full"
        src={product.image_url}
        alt={product.name}
      />
      <div className="productCard__info">
        <p className="productCard__info--title">{product.name}</p>
        <p className="productCard__info--txt">{product.short_description}</p>
        <p className="productCard__info--price">{product.price} €</p>
      </div>
      {hovered && (
        <div className="productCard__container">
          <button 
            className="productCard__btn py-2 px-4 rounded" 
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product.id);
            }}
          >
            Ajouter au panier
          </button>
        </div>
      )}
    </div>
  );
}
export default ProductCard;
