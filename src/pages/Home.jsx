import React from 'react';
import '../styles/Home.scss';

const Home = () => {
    return(
        <>
        <div className='home-container'>
            <header className='home-header'>
                <h1 className='home-h1'>bunninfo</h1>
                <h2 className='home-h2'>te damos la bienvenida</h2>
            </header>
            <div className='home-body-container'>
            <figure className='home-figure'>
                <img src='https://images.pexels.com/photos/4588071/pexels-photo-4588071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='home-img1'/>
            </figure>
            <div className='home-btn-container'>
            <h2 className='home-h2 dos'>Aprende todo sobre conejos en esta página web informativa</h2>
            <ul className='home-ul'>
                <li className='home-li'>Lorem ipsum, dolor sit amet consectetur adipisicing elit</li>
                <li className='home-li'>Lorem ipsum, dolor sit amet consectetur adipisicing elit</li>
                <li className='home-li'>Lorem ipsum, dolor sit amet consectetur adipisicing elit</li>
                <li className='home-li'>Lorem ipsum, dolor sit amet consectetur adipisicing elit</li>
            </ul>
            <a href='/' className='home-link'>ver más</a>
            </div>
            </div>
        </div>
        </>
    );
}

export default Home;