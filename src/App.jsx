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
  const [visible, setVisible] = useState(0);

  const handleCartVisible = () => {
    setVisible(visible === 1 ? 0 : 1);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27 && visible) {
        setVisible(0);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [visible, setVisible]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header handleCart={handleCartVisible} itemList={itemList} />
        <CartContext.Provider
          value={useMemo(() => [itemList, setItemList], [itemList])}
        >
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop items={itemsList} />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop/:id" element={<Item />} />
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
