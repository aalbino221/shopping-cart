/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import CartContext from './Cart';

export default function Item() {
  const location = useLocation();
  const { item } = location.state;
  const [itemList, setItemList] = useContext(CartContext);

  function addToCart(id) {
    const index = itemList.findIndex((currentItem) => currentItem.id === id);
    if (index === -1) {
      const newArray = [...itemList, item];
      setItemList(newArray);
      return;
    }
    const newArray = [...itemList];
    newArray[index].amount += 1;
    setItemList(newArray);
  }

  const handleClick = (event) => {
    event.preventDefault();
    addToCart(item.id);
  };

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
          <h1 id="item-price">${item.price.toFixed(2)}</h1>
          <button type="button" onClick={handleClick}>
            BUY
          </button>
        </div>
      </div>
    </div>
  );
}
