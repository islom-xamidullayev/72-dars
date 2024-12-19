import React from 'react';
import { Provider } from 'react-redux';
import store from './components/pages/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/pages/Products';
import Cart from './components/pages/Card';

function App() {

  return (
    <Provider store={store}>
      <div className="w-[1300px] m-auto">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
