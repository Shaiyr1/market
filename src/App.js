import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Pannier from './pages/pannier/Pannier';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, count: item.count + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, count: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    const existingItem = cartItems.find(item => item.id === id);
    if (existingItem.count > 1) {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      ));
    } else {
      removeFromCart(id);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <>
      <Header cartItems={cartItems}/>
      <Routes>
        <Route path='/' element={<Main isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} handleAddToCart={handleAddToCart}/>}/>
        <Route path='/pannier' element={<Pannier cartItems={cartItems} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />} />
      </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default App;
