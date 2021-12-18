import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='link-container'>
                <div>
                    <p className='scl-link'>social link</p>
                    <div>
                        <a href="https://www.facebook.com/mdhasibul.1998" title='go to facebook'><i class="fab fa-facebook-square icon"> </i></a>
                        <a href="https://twitter.com/mdhasibul02" title='go to twitter'><i class="fab fa-twitter icon"></i></a>
                        <a href="https://www.linkedin.com/in/hasibul-hasan-0211/" title='go to linkedin'><i class="fab fa-linkedin icon"></i></a>
                        <a href="https://www.instagram.com/mdhasibul_16/" title='go to instagram'><i class="fab fa-instagram icon"></i></a>
                    </div>
                </div>
                <div>
                    <p className='scl-link'>other's link</p>
                    <div className='othr-link'>
                        <a href="/">home</a>
                        <a href="/">projects</a>
                        <a href="/">about</a>
                        <a href="/">contact me</a>

                    </div>
                </div>

            </div>



            <div className='footer-bottom'>
                <p>hasibul hasan's portfolio</p>
                <p>copyright 2021,all rights reserved by md hasibul hasan</p>
            </div>

        </div >
    );
};


export default Footer;