import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/pages/Products';
import Cart from './components/pages/Card';

function App() {
  const [cart, setCart] = useState([]); // Karzinkadagi mahsulotlar




  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {

      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
   
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };


  const updateQuantity = (productId, action) => {
    setCart(
      cart.map((item) => {
        if (item.id === productId) {
          const newQuantity =
            action === 'increase' ? item.quantity + 1 : item.quantity - 1;
          return { ...item, quantity: Math.max(newQuantity, 1) }; // Kamida 1 ta bo'lishi kerak
        }
        return item;
      })
    );
  };





  return (
    <>
    <div className='w-[1300px] m-auto'> 
        
         <Router >
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Products addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart}   updateQuantity={updateQuantity}
               />} />
      </Routes>
    </Router>

    </div>
    
    </>
  
  );
}

export default App;
