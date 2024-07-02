import React from 'react';
import "./Details.scss";
import close from '../../assets/img/close.png';

function Details({ product, onClose }) {
    if (!product) return null;
    return (
        <section className='details'>
            <div className="container details__container">
                <img className='details__close' src={close} alt="close" onClick={onClose}/>
                <div className="details__block">
                    <img className='details__block-img' src={product.img} alt={product.title} />
                    <div className='details__info'>
                        <h2 className='details__info-title'>{product.title}</h2>
                        <p className='details__info-description'>{product.description}</p>
                        <p className='details__info-price'>Цено: {product.price} сом</p>
                        <button className='details__info-btn'>Купить</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Details
