function CategoriesCard({ title, image, alt }) {
  return (
    <div className="CatCard">
      <img className="CatCard__img" src={image} alt={alt} />
      <p className="CatCard__title">{title}</p>
    </div>
  );
}
export default CategoriesCard;
