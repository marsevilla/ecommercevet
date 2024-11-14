import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import BannerBoutique from "../assets/bannerBoutique.png";
import ProductCard from "../Components/productCard";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Boutique() {
  const [products, setProducts] = useState([]);
  const query = useQuery();
  const categoryFromUrl = query.get("category");
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl || "");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = selectedCategory 
          ? `http://localhost:8000/api/productcategory/${selectedCategory}` 
          : "http://localhost:8000/api/products";

        const response = await axios.get(url);
        setProducts(response.data); 
      } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  return (
    <main className="">
      <section className="boutiqueBanner mb-8">
        <img src={BannerBoutique} alt="Rayon de vêtement" className="w-full h-64 object-cover" />

        <div className="boutiqueBanner__filtres mt-4 flex flex-col md:flex-row items-center justify-between">
          <form className="flex items-center space-x-4">
            <label>Voir uniquement : </label>
            <div className="flex space-x-2">
              <input 
                type="radio" 
                name="category" 
                value="" 
                checked={selectedCategory === ""}
                onChange={() => setSelectedCategory("")} 
              /> 
              <label>Tous</label>

              <input 
                type="radio" 
                name="category" 
                value="haut" 
                checked={selectedCategory === "haut"}
                onChange={() => setSelectedCategory("haut")} 
              />
              <label>Hauts</label>

              <input 
                type="radio" 
                name="category" 
                value="bas" 
                checked={selectedCategory === "bas"}
                onChange={() => setSelectedCategory("bas")} 
              />
              <label>Bas</label>

              <input 
                type="radio" 
                name="category" 
                value="accessoires" 
                checked={selectedCategory === "accessoires"}
                onChange={() => setSelectedCategory("accessoires")} 
              />
              <label>Accessoires</label>
            </div>
          </form>
          <input type="text" placeholder="Rechercher" className="mt-4 md:mt-0 p-2 border rounded-md" />
        </div>
      </section>

      <section className="boutiqueProduct m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>

      <section className="boutiqueQuality mt-8"></section>
    </main>
  );
}

export default Boutique;
