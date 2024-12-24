import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.data))
      .catch((error) => console.error("API xatosi:", error));
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-around gap-5 items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-105 h-105 object-cover mb-4 rounded"
        />

        <div>
          <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
          <p className="text-3xl font-semibold text-gray-800 mb-4">
            ${product.price}
          </p>
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>

          <div className="bg-[#FAFAFA] w-[170px] mt-12">
            <h3 className="text-[70px] font-semibold text-center ">
              {product.rating}
            </h3>
            <p className="text-[#545454] text-[18px] text-center">
              of 125 reviews
            </p>
            <div className="text-yellow-500 text-3xl text-center">
              {"★".repeat(product.rating) + "☆".repeat(5 - product.rating)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
