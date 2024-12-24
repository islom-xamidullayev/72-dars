import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../../store/store";
import Hero from "../hero";
import "../../../index.css";

function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.data))
      .catch((error) => console.error("API xatosi:", error));
  }, []);

  const handleBuyNow = (id) => {
    navigate(`/product/${id}`);
  };

  if (!products) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Hero />

      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 pt-[100px]">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded-lg bg-[#F6F6F6] shadow-md p-4 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-64 h-64 object-cover mb-4 rounded"
            />
            <h3 className="text-[26px] text-center font-medium text-gray-800 mb-2">
              {product.name}
            </h3>

            <p className="text-[black] text-[25px] px-2 py-1 font-semibold rounded">
              ${product.price}
            </p>
            <div>
              <button
                onClick={() => handleBuyNow(product.id)}
                className="py-3 px-14 bg-black text-[#fff] mr-5 rounded-lg"
              >
                Buy Now
              </button>
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

      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="w-[1600px] m-auto mb-12 flex">
        <div className="w-[360px] ">
          <img src="src\assets\image 64.svg" alt="" />
          <div className="px-9 pb-8">
            <h2 className="text-[33px]">Popular Products</h2>
            <p className="text-[#909090]">
              iPad combines a magnificent 10.2-inch <br /> Retina display,
              incredible performance, <br />
              multitasking and ease of use.
            </p>
            <button className="text-[16px] bnt py-4 px-[56px] text-[#000] border-[#000] border mt-6">
              Shop Now
            </button>
          </div>
        </div>

        <div className="w-[360px] bg-[#F9F9F9]">
          <img src="src\assets\image 64.svg" alt="" />
          <div className="px-9 pb-8">
            <h2 className="text-[33px]">Ipad Pro</h2>
            <p className="text-[#909090]">
              iPad combines a magnificent 10.2-inch <br /> Retina display,
              incredible performance, <br />
              multitasking and ease of use.
            </p>
            <button className="text-[16px] bnt py-4 px-[56px] text-[#000] border-[#000] border mt-6">
              Shop Now
            </button>
          </div>
        </div>

        <div className="w-[360px] bg-[#EAEAEA]">
          <img src="src\assets\image 64.svg" alt="" />
          <div className="px-9 pb-8">
            <h2 className="text-[33px]">Samsung Galaxy </h2>
            <p className="text-[#909090]">
              iPad combines a magnificent 10.2-inch <br /> Retina display,
              incredible performance, <br />
              multitasking and ease of use.
            </p>
            <button className="text-[16px] bnt py-4 px-[56px] text-[#000] border-[#000] border mt-6">
              Shop Now
            </button>
          </div>
        </div>

        <div className="w-[360px] bg-[#2C2C2C]">
          <img src="src\assets\image 64.svg" alt="" />
          <div className="px-9 pb-8">
            <h2 className="text-[33px] text-[#fff]">Macbook Pro</h2>
            <p className="text-[#909090]">
              iPad combines a magnificent 10.2-inch <br /> Retina display,
              incredible performance, <br />
              multitasking and ease of use.
            </p>
            <button className="text-[16px] bnt py-4 px-[56px] text-[#fff] border-[#fff] border mt-6">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
