/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Content/Home';
import Shop from './component/Content/Shop';
import Contact from './component/Content/Contact';
import Item from './component/Content/Item';
import itemsList from './ItemsList';
import CartContext, { Cart } from './component/Content/Cart';

function App() {
  const [itemList, setItemList] = useState([]);
  const [visible, setVisible] = useState(1);

  const handleCartVisible = () => {
    setVisible(visible === 1 ? 0 : 1);
  };

  useEffect(() => {
    setItemList([
      {
        id: 1,
        name: "George Orwell's 1984",
        description:
          '1984 is a classic dystopian novel written by George Orwell. The book presents a society governed by a totalitarian and oppressive State, where individual freedom is suppressed and the manipulation of truth is a common practice. The main character, Winston Smith, works at the Ministry of Truth, and questions the control exerted by the government. He ends up getting involved in a forbidden romance with a colleague, which leads him to rebel against authority. With an intense and engaging narrative, "1984" is a timeless work that continues to challenge and provoke reflections on power and freedom.',
        price: 20.5,
        img: './imgs/1984.jpg',
        amount: 2,
      },
    ]);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header handleCart={handleCartVisible} />
        <CartContext.Provider
          value={useMemo(() => [itemList, setItemList], [itemList])}
        >
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop items={itemsList} />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/item/:id" element={<Item />} />
            </Routes>
            <Footer />
          </div>
          <Cart visible={visible} handleCart={handleCartVisible} />
        </CartContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
