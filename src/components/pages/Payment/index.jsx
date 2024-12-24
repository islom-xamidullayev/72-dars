import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Payment() {
  const totalPrice = useSelector((state) => state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0));
  const [cardNumber, setCardNumber] = useState('');
  const [isPaid, setIsPaid] = useState(false);

  const handlePayment = () => {
    if (cardNumber.length === 16) {
      setIsPaid(true);
    } else {
      alert('Iltimos, to‘g‘ri 16 ta raqamli karta raqamini kiriting.');
    }
  };

  return (
    <div className="p-4 container text-center">
      {!isPaid ? (
        <>
          <h1 className="text-2xl font-bold mb-4">To‘lov sahifasi</h1>
          <h2></h2>
          <img className='m-auto' src="src\assets\carta.svg" alt="" />
          <h2 className="text-xl mb-4">Jami summa: ${totalPrice.toFixed(2)}</h2>
          <input
            type="text"
            placeholder="Karta raqamini kiriting"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength="16"
            className="border p-2 rounded w-[300px] mb-4"
          />
          <button
            onClick={handlePayment}
            className="py-2 px-8 bg-black text-white rounded-lg"
          >
            To‘lash
          </button>
        </>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4">To‘lov amalga oshirildi!</h1>
          <h2 className="text-xl">Sizning hisobingizdan ${totalPrice.toFixed(2)} yechildi.  <span className='text-[red]'>15-25 kunda yetib keladi</span></h2>
        </div>
      )}
    </div>
  );
}

export default Payment;
