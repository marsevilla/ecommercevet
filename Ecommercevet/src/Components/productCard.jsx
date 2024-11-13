import { useState } from "react";
import Productimg from "../assets/productimg.png";

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="productCard"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
          <button className="productCard__btn">Ajouter au panier</button>
        </div>
      )}
    </div>
  );
}
export default ProductCard;
