import React from 'react';
import './Home.scss';
import homeImg from '../../../assets/img/homeImg.jpg';

function Home() {
    return (
        <section className='home'>
            <div className="container home__container">
                <div className="home__info">
                    <h1 className='home__info-title'>Новые компьютеры здесь, взгляните</h1>
                    <p className='home__info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cum voluptate nisi minus animi accusamus omnis voluptates eveniet mollitia, nam repudiandae quidem est deleniti, quis laborum. Consectetur aliquid veniam voluptatibus?</p>
                    <a href='#all-product'><button className='home__info-btn'>Подробнее</button></a>
                </div>
                <img className='home__img' src={homeImg} alt="homeImg" />
            </div>
        </section>
    )
}

export default Home
