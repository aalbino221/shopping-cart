/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Content/Home';
import Shop from './component/Content/Shop';
import Contact from './component/Content/Contact';
import Item from './component/Content/Item';
import itemsList from './ItemsList';
import CartContext from './component/Content/Cart';

function App() {
  const [itemList, setItemList] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
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
        </CartContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
