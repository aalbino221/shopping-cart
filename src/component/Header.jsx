import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header({ handleCart, itemList }) {
  const [itemNumber, setItemNumber] = useState(0);

  useEffect(() => {
    setItemNumber(() => {
      let total = 0;
      itemList.forEach((item) => {
        total += item.amount;
      });
      return total;
    });
  });

  return (
    <nav className="header">
      <h1>PageByPage</h1>
      <ul>
        <Link to="/" className="routerLink">
          <li>Home</li>
        </Link>
        <Link to="/shop" className="routerLink">
          <li>Shop</li>
        </Link>
        <Link to="/contact" className="routerLink">
          <li>Contact</li>
        </Link>
        <li>
          <i
            className="fa-solid fa-cart-shopping"
            onClick={handleCart}
            onKeyDown={handleCart}
            tabIndex={-1}
            role="button"
            aria-label="Abrir carrinho"
          />
          {itemNumber > 0 ? <div>{itemNumber}</div> : ''}
        </li>
      </ul>
    </nav>
  );
}

Header.propTypes = {
  handleCart: PropTypes.func.isRequired,
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Header;
