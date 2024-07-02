// // import React from 'react';
// // import './Products.scss';

// // function Products({ productsData, onShowDetails,  handleAddToCart }) {
// //   const addToCart = (product) => {
// //     handleAddToCart(product);
// //   };
// //   return (
// //     <section className='products'>
// //       <div className="container products__container">
// //         <h2 className='products__title'>Экономьте на наших самых <br /> продаваемых товарах.</h2>
// //         <p className='products__subtitle'>Наша новая ограниченная серия зимнего дизайна BESPOKE 4-Door Flex™</p>
// //         <div className="products__blocks">
// //           {productsData.map(item => (
// //             <div className='products__block' key={item.id}>
// //               <div className='products__block-back'>
// //                 <img className='products__block-img' src={item.img} alt="comp" />
// //               </div>
// //               <h4 className='products__block-title'>{item.title}</h4>
// //               <p className='products__block-text'>{item.description.length > 15 ? `${item.description.substr(0, 90)}...` : item.description}</p>
// //               <div className='products__block-prices'>
// //                 <h5 className='products__block-price'>{item.price} сом</h5>
// //                 <button className='products__block-btn' onClick={() => onShowDetails(item)}>Подробнее</button>
// //                 <button className='products__block-btn'onClick={() => addToCart(item)}>Купить</button>
// //               </div>
// //             </div>
// //           ))}

// //         </div>

// //       </div>
// //     </section>
// //   )
// // }

// // export default Products

// import React from 'react';
// import './Products.scss';

// function Products({ productsData, onShowDetails, handleAddToCart }) {
//   const addToCart = (product) => {
//     handleAddToCart(product);
//   };

//   return (
//     <section className='products' id='all-product'>
//       <div className="container products__container">
//         <h2 className='products__title'>Экономьте на наших самых <br /> продаваемых товарах.</h2>
//         <p className='products__subtitle'>Наша новая ограниченная серия зимнего дизайна BESPOKE 4-Door Flex™</p>
//         <div className="products__blocks">
//           {productsData.map(item => (
//             <div className='products__block' key={item.id}>
//               <div className='products__block-back'>
//                 <img className='products__block-img' src={item.img} alt="comp" />
//               </div>
//               <h4 className='products__block-title'>{item.title}</h4>
//               <p className='products__block-text'>{item.description.length > 15 ? `${item.description.substr(0, 90)}...` : item.description}</p>
//               <div className='products__block-prices'>
//                 <h5 className='products__block-price'>{item.price} сом</h5>
//                 <button className='products__block-btn' onClick={() => onShowDetails(item)}>Подробнее</button>
//                 <button className='products__block-btn' onClick={() => addToCart(item)}>Купить</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Products;


import React from 'react';
import './Products.scss';

function Products({ productsData, onShowDetails, handleAddToCart }) {
  const addToCart = (product) => {
    handleAddToCart(product);
  };

  return (
    <section className='products' id='all-product'>
      <div className="container products__container">
        <h2 className='products__title'>Экономьте на наших самых <br /> продаваемых товарах.</h2>
        <p className='products__subtitle'>Наша новая ограниченная серия зимнего дизайна BESPOKE 4-Door Flex™</p>
        <div className="products__blocks">
          {productsData.map(item => (
            <div className='products__block' key={item.id}>
              <div className='products__block-back'>
                <img className='products__block-img' src={item.img} alt="comp" />
              </div>
              <h4 className='products__block-title'>{item.title}</h4>
              <p className='products__block-text'>{item.description.length > 15 ? `${item.description.substr(0, 90)}...` : item.description}</p>
              <div className='products__block-prices'>
                <h5 className='products__block-price'>{item.price} сом</h5>
                <button className='products__block-btn' onClick={() => onShowDetails(item)}>Подробнее</button>
                <button className='products__block-btn' onClick={() => addToCart(item)}>Купить</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products;
