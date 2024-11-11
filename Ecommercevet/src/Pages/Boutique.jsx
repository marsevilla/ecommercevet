import BannerBoutique from "../assets/bannerBoutique.png";

function Boutique() {
  return (
    <main>
      <section className="boutiqueBanner">
        <img src={BannerBoutique} alt="Rayon de vêtement" />

        <div className="boutiqueBanner__filtres">
          <form>
            <label>Voir uniquement : </label>
            <input type="checkbox" name="hauts" />
            <label htmlFor="hauts">Hauts</label>
            <input type="checkbox" name="bas" />
            <label htmlFor="bas">Bas</label>
            <input type="checkbox" name="accessoires" />
            <label htmlFor="accessoires">Accessoires</label>
          </form>
          <input type="text" placeholder="Rechercher" />
        </div>
      </section>
      <section className="boutiqueProduct"></section>
      <section className="boutiqueQuality"></section>
    </main>
  );
}
export default Boutique;
