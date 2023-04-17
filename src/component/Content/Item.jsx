/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import CartContext from './Cart';

export default function Item() {
  const location = useLocation();
  const { item } = location.state;
  const [addToMockCart] = useContext(CartContext);

  return Object.keys(item).length === 0 || typeof item !== 'object' ? (
    <h1>This item does not exist</h1>
  ) : (
    <div className="item">
      <div>
        <Link to="../shop" style={{ textDecoration: 'none' }}>
          <p style={{ margin: 0 }}>Go Back</p>
        </Link>
      </div>
      <div>
        <div className="item-img">
          <img src={`.${item.img}`} alt="" />
        </div>
        <div>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <h1 id="item-price">${item.price}</h1>
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
