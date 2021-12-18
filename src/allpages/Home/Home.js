import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Banner from './Banner/Banner';
import About from './About/About';
import Contact from './Contact/Contact';
import "./Home.css";

const Home = () => {
    return (
        <div className='all-container'>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

export default Home;