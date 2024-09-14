import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import { Item } from './components/data';

function App() {

  const [cart, setCart] = useState<Item | null>(null);
  const addToCart = (item: Item) => {
    setCart(item);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage addToCart={addToCart} />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
      </Routes>
    </>
  );
}

export default App;