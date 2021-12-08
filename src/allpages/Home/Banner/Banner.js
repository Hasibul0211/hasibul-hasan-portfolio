import React from 'react';
import "./Banner.css";
import TypeWriterEffect from 'react-typewriter-effect';

const Banner = () => {
    return (
        <div>
            <section className="banner-container">
                <div className="banner-left">
                    <h1 className="greeting">Welcome!!!!!</h1>
                    <h2 className="title-name">md hasibul hasan</h2>
                    <p className="typeeffect">
                        <TypeWriterEffect
                            textStyle={{
                                fontFamily: 'Merriweather'
                            }}
                            startDelay={100}
                            cursorColor="#161853"
                            text="A Front-End Developer"
                            typeSpeed={200}
                            loop={true}
                        />
                    </p>
                    <p className="typeeffect">
                        <TypeWriterEffect
                            textStyle={{
                                fontFamily: 'Merriweather'
                            }}
                            startDelay={100}
                            cursorColor="#161853"
                            text="&"
                            typeSpeed={200}
                            loop={true}
                        />
                    </p>
                    <p className="typeeffect">
                        <TypeWriterEffect
                            textStyle={{
                                fontFamily: 'Merriweather'
                            }}
                            startDelay={100}
                            cursorColor="#161853"
                            text="A Digital Marketer"
                            typeSpeed={200}
                            loop={true}
                        />
                    </p>

                </div>
                <div className="banner-right">
                    <p>this iss img here</p>
                    <div className="first-div-img">
                        <div className="second-div-img">

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;