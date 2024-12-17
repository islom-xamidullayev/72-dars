import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
      <Link className='text-[28px] font-semibold  text-[#25107b]' to="/">Home</Link>
      <Link className='text-[28px] font-semibold text-[#25107b]' to="/cart">Karzinka ({cartCount})</Link>
    </nav>
  );
}

export default Navbar;

