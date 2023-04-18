import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <div>
        <p>Best Online Bookstore</p>
        <p>Discover your next great adventure here</p>
        <Link to="/shop">
          <button onClick={() => {}} type="button">
            Shop
          </button>
        </Link>
      </div>
      <div
        style={{ backgroundImage: 'url(./imgs/pexels-suzy-hazelwood.jpg)' }}
      />
    </div>
  );
}
