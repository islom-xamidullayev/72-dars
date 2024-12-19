import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store';

function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.data))
      .catch((error) => console.error('API xatosi:', error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="border border-gray-300 rounded-lg shadow-md p-4 flex flex-col items-center"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-64 h-64 object-cover mb-4 rounded"
          />
          <h3 className="text-[24px] text-center font-medium text-gray-800 mb-2">
            {product.name}
          </h3>
          <div className="flex justify-center gap-[100px] items-center w-full">
            <p className="bg-yellow-300 text-gray-800 text-base font-medium px-2 py-1 rounded">
              ${product.price}
            </p>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="text-2xl text-gray-600 hover:text-gray-800 transition"
            >
              🛒
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
