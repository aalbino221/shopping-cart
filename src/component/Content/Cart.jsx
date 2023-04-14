/* eslint-disable no-unused-vars */
// eslint-disable-next-line object-curly-newline
import React, { createContext, useContext } from 'react';

const CartContext = createContext();

export default CartContext;

export function Cart() {
  const [itemList, setItemList] = useContext(CartContext);

  function increment(id) {
    const index = itemList.findIndex((item) => item.id === id);
    const newArray = [...itemList];
    newArray[index].amount += 1;
    setItemList(newArray);
  }

  function decrement(id) {
    const index = itemList.findIndex((item) => item.id === id);
    const newArray = [...itemList];
    newArray[index].amount -= 1;
    setItemList(newArray);
  }

  return (
    <div>
      <div>
        <h1>Shopping Bad</h1>
        <span>X</span>
      </div>
      {itemList.map((item) => (
        <div key={item.id}>
          <img src={`${item.img}`} alt="" />
          <div>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <div>
              <button
                type="button"
                onClick={() => {
                  decrement(item.id);
                }}
              >
                -
              </button>
              <p data-testid="item-qnt">{item.amount}</p>
              <button
                type="button"
                onClick={() => {
                  increment(item.id);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
      <p>Total: </p>
      <button type="button">Checkout</button>
    </div>
  );
}
