import { useEffect, useState } from "react";
import axios from "axios";
import BannerBoutique from "../assets/bannerBoutique.png";

function Boutique() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/products");
        setProducts(response.data); 
      } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className="p-4">
      <section className="boutiqueBanner mb-8">
        <img src={BannerBoutique} alt="Rayon de vêtement" className="w-full h-64 object-cover rounded-lg" />

        <div className="boutiqueBanner__filtres mt-4 flex flex-col md:flex-row items-center justify-between">
          <form className="flex items-center space-x-4">
            <label>Voir uniquement : </label>
            <div className="flex space-x-2">
              <input type="checkbox" name="hauts" id="hauts" />
              <label htmlFor="hauts">Hauts</label>
              <input type="checkbox" name="bas" id="bas" />
              <label htmlFor="bas">Bas</label>
              <input type="checkbox" name="accessoires" id="accessoires" />
              <label htmlFor="accessoires">Accessoires</label>
            </div>
          </form>
          <input type="text" placeholder="Rechercher" className="mt-4 md:mt-0 p-2 border rounded-md" />
        </div>
      </section>

      <section className="boutiqueProduct grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="productCard p-4 bg-white shadow-md rounded-lg">
            <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-blue-500 font-bold">Prix : {product.price} €</p>
          </div>
        ))}
      </section>

      <section className="boutiqueQuality mt-8"></section>
    </main>
  );
}

export default Boutique;