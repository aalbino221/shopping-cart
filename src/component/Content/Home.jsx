import React from 'react';

export default function Home() {
  return (
    <div className="home">
      <div>
        <p>Best Online Bookstore</p>
        <p>Discover your next great adventure here</p>
        <button onClick={() => {}} type="button">
          Shop
        </button>
      </div>
      <div
        style={{ backgroundImage: 'url(./imgs/pexels-suzy-hazelwood.jpg)' }}
      />
    </div>
  );
}
