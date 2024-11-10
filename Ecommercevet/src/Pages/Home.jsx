import Hauts from "../assets/haut.png";
import Bas from "../assets/bas.png";
import Accessoires from "../assets/accessoire.png";
import PinkButton from "../Components/PinkButton";
import CategoriesCard from "../Components/CategoriesCard";

function Home() {
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
        <div className="collections__container"></div>
      </section>
      <section className="lookBook"></section>
    </main>
  );
}
export default Home;
