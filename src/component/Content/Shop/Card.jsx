/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import CartContext from '../Cart';

export default function Card({ item }) {
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
    ''
  ) : (
    <div className="card">
      <div>
        <img src={item.img} alt="" />
      </div>
      <div>
        <p>{item.name}</p>
        <p>{`$${item.price.toFixed(2)}`}</p>
        <button type="button" onClick={handleClick}>
          BUY
        </button>
      </div>
    </div>
  );
}
