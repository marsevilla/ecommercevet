import React from "react";
import { useEffect, useState } from "react";
import "./../styles/page/AdminDashboard.scss"; 
import axios from "axios";

const AdminDashboardProducts = () => {

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
    <div className="column produits">
        <h2>Produits</h2>
        {products.map((product) => (
          <div className="product-item" key={product.id}>
          <img
            src={product.image_url}
            alt={product.name}
            className="product-img"
          />
          <span>{product.name}</span>
          <div className="actions">
            <button className="edit-btn">✏️</button>
            <button className="delete-btn">🗑️</button>
          </div>
        </div>
        ))}
      </div>
  );
};

export default AdminDashboardProducts;
