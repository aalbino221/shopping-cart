/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ handleCart }) {
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
        </li>
      </ul>
    </nav>
  );
}
