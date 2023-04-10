import React from 'react';

export default function Header() {
  return (
    <nav>
      <h1>PageByPage</h1>
      <ul>
        <li>Home</li>
        <li>Shop</li>
        <li>Contact</li>
        <li>
          <i className="fa-solid fa-cart-shopping" />
        </li>
      </ul>
    </nav>
  );
}
