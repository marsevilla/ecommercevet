import { useState } from "react";
import Productimg from "../assets/productimg.png";

function ProductCard() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="productCard"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        className="productCard__img"
        src={Productimg}
        alt="Femme portant une doudoune jaune"
      />
      <div className="productCard__info">
        <p className="productCard__info--title">Syltherine</p>
        <p className="productCard__info--txt">Stylish cafe chair</p>
        <p className="productCard__info--price">80€</p>
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
