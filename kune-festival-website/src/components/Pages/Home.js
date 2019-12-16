import React from 'react';
import Navigation from '../Navbar/Navigation';
import MainAnimation from '../MainAnimation/MainAnimation';
import Footer from '../Footer/Footer.js';

const Home = () => {
    return (
        <div className="container pt-3">
            <Navigation />
            <MainAnimation />
            <Footer />
        </div>
    );
};

export default Home;