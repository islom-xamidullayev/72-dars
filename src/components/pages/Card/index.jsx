import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { updateQuantity, removeFromCart } from '../../../store/store'; // removeFromCart actionini qo'shing
import '../../../index.css';
import Payment from '../payment';

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Jami narxni hisoblash
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4 container">

      {cart.map((item) => ( 
        <div key={item.id} className="flex justify-between items-center w-[760px] mb-4 border-b pb-4">
          <img src={item.image} className='w-[120px] h-[120px] mr-5' alt="" />
          <h3 className="text-xl w-[260px]">{item.name}</h3>
          <h4>${(item.price * item.quantity).toFixed(2)}</h4>
          <div className="flex items-center w-[200px]">
            <button
              onClick={() => dispatch(updateQuantity({ productId: item.id, actionType: 'decrease' }))}
              className="px-2 py-1 border rounded"
            >
              -
            </button>
            <span className="mx-2">{item.quantity}</span>
            <button
              onClick={() => dispatch(updateQuantity({ productId: item.id, actionType: 'increase' }))}
              className="px-2 py-1 border rounded"
            >
              +
            </button>
          </div>
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="text-red-500 font-bold text-lg ml-4"
          >
            X
          </button>
        </div>
      ))}
      <div className="mt-4 text-right text-2xl font-semibold flex justify-between items-center">
           <h1>Jami: ${totalPrice.toFixed(2)}</h1> 
        <button className='py-3 px-14 bg-black text-[#fff] mr-5 rounded-lg'><NavLink to='/payment'>Sotib olish</NavLink> </button>
    
      </div>
     
    </div>
  );
}

export default Cart;
