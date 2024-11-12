import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [size, setSize] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {


    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/products/${id}`);
        setSize(JSON.parse(response.data.size));
        setProduct(response.data);
        setLoading(false);
        
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error.message}</div>;

  return (
    <>
      <div>
        {product ? (
          <section className='m-12 flex space-x-8 single-product-container'>
            <div>
              <img className='w-4/5' src={product.image_url} alt={product.name} />
            </div>
            <div>
              <h1 className='text-3xl'>{product.name}</h1>
              <p className="text-black mb-10">{product.price}€</p>
              <p className='text-black mb-5 text-base'>{product.short_description}</p>
              <p className='text-black mb-10 text-base'>{product.description}</p>
              {size && (
                <div>
                  <p className='text-base'>Tailles disponibles :</p>
                  <div className='flex space-x-2'>
                    {size.map((size, index) => (
                      <div
                        key={index}
                        className={`cursor-pointer p-2 border rounded ${
                          selectedSize === size ? 'border-black' : 'border-gray-300'
                        }`}
                        onClick={() => handleSizeClick(size)}
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </section>
        ) : (
          <div>Produit non trouvé</div>
        )}
      </div>
      <section className='m-12 same-category-container'>
        <h2 className='text-center text-3xl'>Dans la même catégorie</h2>
        {/* Utiliser la fonction de récupération des produits  */}
      </section>
    </>
  );
};

export default SingleProduct;
