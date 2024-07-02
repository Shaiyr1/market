import React, { useState } from 'react';
import Modal from 'react-modal';
import './Pannier.scss';

Modal.setAppElement('#root');

function Pannier({ cartItems, removeFromCart, increaseQuantity, decreaseQuantity }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleOrder = (e) => {
        e.preventDefault();
        const orderDetails = {
            email,
            phone,
            cartItems,
        };
        console.log('Order Details:', orderDetails);
        closeModal();
    };

    return (
        <section className='pannier'>
            <div className="container">
                <h2>Корзина</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Товары</th>
                            <th>Цена</th>
                            <th>Количество</th>
                            <th>Сумма</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.price} сом</td>
                                <td>
                                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                    {item.count}
                                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                                </td>
                                <td>{item.price * item.count} сом</td>
                                <td>
                                    <button onClick={() => removeFromCart(item.id)}>Удалить</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className='pannier__btn' onClick={openModal} disabled={cartItems.length === 0}>Оформить заказ</button>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Order Modal"
                    className="modal"
                    overlayClassName="overlay"
                >
                    <h2>Оформить заказ</h2>
                    <form onSubmit={handleOrder}>
                        <label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder='Email:'
                            />
                        </label>
                        <label>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                placeholder='Номер телефона:'
                            />
                        </label>
                        <button type="submit">Отправить</button>
                        <button type="button" onClick={closeModal}>Отмена</button>
                    </form>
                </Modal>
            </div>
        </section>
    );
}

export default Pannier;
