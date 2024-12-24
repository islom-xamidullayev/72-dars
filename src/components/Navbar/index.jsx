import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

 
  return (
    <nav style={{ display: 'flex', width: '1300px', margin: 'auto', justifyContent: 'space-between',  padding: '10px', alignItems: 'center' }}>
      <img src='src\assets\Logo (4).svg' alt="h" />
      <input className=' bg-[#F5F5F5] p-4  w-[330px]' type="text" placeholder="🔍  Qidiruvni kiriting..."  />
      <Link className='text-[20px] font-semibold  text-[#25107b]' to="/">Home</Link>
      <span className='text-[20px]'>About</span>
      <span className='text-[20px]'>Contact Us</span>
      <span className='text-[20px]'>Blog</span>
      <Link className='text-[20px] font-semibold text-[#25107b]' to="/cart"><img src="src\assets\karzinka.svg" alt="" /></Link>
    </nav>
  );
}

export default Navbar;

