import { useEffect, useState } from "react";
import axios from "axios";
import BannerBoutique from "../assets/bannerBoutique.png";

function Boutique() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [hoveredProductId, setHoveredProductId] = useState(null); 


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
    <main className="p-4">
      <section className="boutiqueBanner mb-8">
        <img src={BannerBoutique} alt="Rayon de vêtement" className="w-full h-64 object-cover rounded-lg" />

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

      <section className="boutiqueProduct grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="productCard p-4 bg-white shadow-md rounded-lg">

            <img src={product.image_url} alt={product.name} className="w-full h-40 object-cover rounded-md mb-4" />

            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-blue-500 font-bold">Prix : {product.price} €</p>
            {hoveredProductId === product.id && (
              <div className="productCard__container absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md">
                <button 
                  className="productCard__btn bg-white text-black py-2 px-4 rounded" 
                  onClick={() => addToCart(product.id)}
                >
                  Ajouter au panier
                </button>
              </div>
            )}
          </div>
        ))}
      </section>

      <section className="boutiqueQuality mt-8"></section>
    </main>
  );
}


export default Boutique;
