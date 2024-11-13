import Hauts from "../assets/haut.png";
import Bas from "../assets/bas.png";
import Accessoires from "../assets/accessoire.png";
import PinkButton from "../Components/PinkButton";
import WhiteButton from "../Components/WitheButton";
import CategoriesCard from "../Components/CategoriesCard";
import ProductCard from "../Components/productCard";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = "http://localhost:8000/api/products";
        const response = await axios.get(url);
        setProducts(response.data); 
      } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main>
      <section className="presentation">
        <div className="presentation__nouveautes">
          <p className="presentation--text1">Nouveautés</p>
          <h1 className="title presentation__title">
            Découvrez notre nouvelle collection
          </h1>
          <p className="presentation--text2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
            officiis itaque harum culpa repellendus amet!
          </p>
          <PinkButton title={"Découvrir"} />
        </div>
      </section>
      <section className="categories">
        <h2 className="title">Découvrez notre offre par catégorie</h2>
        <p className="categories__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <div className="categories__container">
          <CategoriesCard
            image={Hauts}
            alt={"Femme portant un haut blanc et une veste marron"}
            title={"Haut"}
          />
          <CategoriesCard
            image={Bas}
            alt={"Femme portant un pantalon bleu"}
            title={"Bas"}
          />
          <CategoriesCard
            image={Accessoires}
            alt={"bague doré posé sur un présentoir blanc"}
            title={"Accessoires"}
          />
        </div>
      </section>
      <section className="collections">
        <h2 className="title">Nos dernières collections</h2>
        <div className="collections__container">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          <WhiteButton />
        </div>
      </section>
      <section className="lookBook">
        <div className="lookBook__container">
          <h2 className="title lookBook__container--title">Lookbook</h2>
          <p className="lookBook__container--txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            doloremque ipsa at ad ex natus.
          </p>
          <WhiteButton />
        </div>
        <div className="lookBook__caroussel">caroussel</div>
      </section>
    </main>
  );
}
export default Home;
