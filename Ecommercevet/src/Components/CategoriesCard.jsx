import { Link } from "react-router-dom";

function CategoriesCard({ title, image, alt, link }) {
  return (
    <Link to={link} className="CatCard">
      <img className="CatCard__img" src={image} alt={alt} />
      <p className="CatCard__title">{title}</p>
    </Link>
  );
}
export default CategoriesCard;
