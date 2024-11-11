import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error.message}</div>;

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.name}</h1>
            <img src={product.image_url} alt={product.name}></img>
          <p>{product.description}</p>
          <p>Prix: {product.price}€</p>
          
        </div>
      ) : (
        <div>Produit non trouvé</div>
      )}
    </div>
  );
};

export default SingleProduct;
