/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import CartContext from '../Cart';

export default function Card({ item }) {
  const [addToMockCart] = useContext(CartContext);

  return Object.keys(item).length === 0 || typeof item !== 'object' ? (
    ''
  ) : (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <button
          type="button"
          onClick={() => {
            addToMockCart(item);
          }}
        >
          BUY
        </button>
      </div>
    </div>
  );
}
