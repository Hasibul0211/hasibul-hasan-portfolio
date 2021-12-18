import React from 'react';
import "./About.css"
import Marquee from "react-fast-marquee";
import myimg from "../../../images/banner/hasibul02.png"
const About = () => {
    return (
        <div>
            <Marquee speed={50} gradientWidth={5}>Welcome to Md Hasibul Hasan's portfolio | I am a Front-End Developer also a Digital Marketer.</Marquee>
            <section className='about-container'>
                <div className='img'>
                    <img src={myimg} alt="" />
                </div>
                <div className='descrip'>
                    <h3>learn about me</h3>
                    <p>Hi ! Welcome to my introduce section. Myself Md Hasibul Hasan. I like to introduce myself as a Front-End Web developer also a Digital marketer. I have completed my digital marketing course in 2020 from Exprocoder IT Institute. In 2021, I have completed Front-End web development course from Programming Hero. I am certified from both of these institutes. I am also completing my B.Sc in Electrical & Electronic Engineering from World University of Bangladesh. </p>
                    <p>I have completed so many project on front end development. I feel expert on React to develop any kind of website for Front view.All the completed projects has been attached in Github that attach in the social link section also showing on the projects section</p>
                    <p>I am very hardworking person and also challenging. I am always ready to take any kind of challeng on my career for development. You can hire me as challenging and much more active person for your projects or for your company.I ready to provide my best services to you. </p>
                    <br />
                    <p className='text-finish'>
                        With best regards,<br />
                        <span>md hasibul hasan</span>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;