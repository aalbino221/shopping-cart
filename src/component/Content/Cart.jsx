/* eslint-disable operator-linebreak */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line object-curly-newline
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export default CartContext;

export function Cart({ visible, handleCart }) {
  const [itemList, setItemList] = useContext(CartContext);
  const [total, setTotal] = useState(0);

  function increment(id) {
    const index = itemList.findIndex((item) => item.id === id);
    const newArray = [...itemList];
    newArray[index].amount += 1;
    setItemList(newArray);
  }

  function decrement(id) {
    const index = itemList.findIndex((item) => item.id === id);
    if (itemList[index].amount - 1 <= 0) {
      const newArray = [...itemList];
      newArray.splice(index, 1); // remove o item do array
      setItemList(newArray);
      return;
    }
    const newArray = [...itemList];
    newArray[index].amount -= 1;
    setItemList(newArray);
  }

  function findTotal() {
    let totalCost = 0;
    itemList.forEach((item) => {
      totalCost += item.amount * item.price;
    });
    if (totalCost < 0) setTotal('Error');
    else setTotal(totalCost.toFixed(2));
  }

  useEffect(() => {
    findTotal();
  }, [itemList]);

  return (
    <div
      className="cart"
      style={visible ? { display: 'flex' } : { display: 'none' }}
    >
      <div>
        <div>
          <h1>
            Shopping Cart
            <span
              onClick={handleCart}
              role="button"
              onKeyDown={handleCart}
              tabIndex={-1}
            >
              X
            </span>
          </h1>
        </div>
        <div className="cart-itemsList">
          {itemList.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt="" />
              <div>
                <p>{item.name}</p>
                <p>${item.price.toFixed(2)}</p>
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
        </div>
        <p>Total: ${total}</p>
        <button type="button">CHECKOUT</button>
      </div>
    </div>
  );
}
