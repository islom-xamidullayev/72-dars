import React from 'react';

function Cart({ cart, updateQuantity, removeFromCart }) {
  return (
    <div className='w-[1300px] '>
      <h2 className="text-center text-[30px] font-semibold">Karzinka</h2>
      {cart.length === 0 ? (
        <p className="text-center">Karzinkada hech narsa yo'q.</p>
      ) : (
        cart.map((product) => (
          <div
            key={product.id}
            className="border-b border-gray-300 py-4 flex justify-between items-center"
          >
            <div>
              <h3 className="text-[20px] font-medium">{product.name}</h3>
              <p>${product.price}</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => updateQuantity(product.id, 'decrease')}
                className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
              >
                -
              </button>
              <span>{product.quantity}</span>
              <button
                onClick={() => updateQuantity(product.id, 'increase')}
                className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
              >
                +
              </button>
             
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
