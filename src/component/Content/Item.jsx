/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import CartContext from './Cart';

export default function Item({ item }) {
  const [addToMockCart] = useContext(CartContext);

  return Object.keys(item).length === 0 || typeof item !== 'object' ? (
    <h1>This item does not exist</h1>
  ) : (
    <div>
      <div>
        <a href="#">Go Back</a>
      </div>
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
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
    </div>
  );
}
