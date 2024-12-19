import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity } from '../store';

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-4">
          <h3 className="text-xl">{item.name}</h3>
          <div className="flex items-center">
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
        </div>
      ))}
    </div>
  );
}

export default Cart;
