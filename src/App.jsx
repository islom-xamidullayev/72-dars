import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/pages/Products";
import Cart from "./components/pages/Card";
import ProductDetails from "./components/pages/ProductDetails";
import Payment from "./components/pages/payment";
import Footer from "./components/footer";


function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment/>} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
          <Footer/>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
