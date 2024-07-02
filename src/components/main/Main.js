import React from 'react';
import Home from './home/Home';
import Products from './products/Products';
import comp from '../../assets/img/comp.png';
import Details from '../details/Details';
import Footer from '../footer/Footer';

function Main({ isModalOpen, setIsModalOpen, selectedProduct, setSelectedProduct, handleAddToCart }) {
  const productsData = [
    {
      id: 1,
      img: comp,
      title: "High-End Gaming Computer",
      description: "A powerful gaming computer with the latest graphics card and processor.",
      price: 1500
    },
    {
      id: 2,
      img: comp,
      title: "Office Computer",
      description: "An efficient computer for office work, equipped with an SSD and plenty of RAM.",
      price: 800
    },
    {
      id: 3,
      img: comp,
      title: "Compact Laptop",
      description: "A lightweight and portable laptop with a long battery life.",
      price: 1200
    }
  ];

  const handleShowDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <section className='main'>
        <Home />
        <Products productsData={productsData} onShowDetails={handleShowDetails} handleAddToCart={handleAddToCart} />
        {isModalOpen && <Details product={selectedProduct} onClose={handleCloseModal} />}
      </section>
      <Footer />
    </>
  )
}

export default Main;
