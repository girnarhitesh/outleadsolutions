import React, { useEffect, useState } from 'react'
import './ourchoos.css'
import Slider from '../ServicesSlider/Slider';

function WhyChooseUs() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* <div className="sectionpadding"> */}
            <div className="why-choose-us-section">
                <div className="container">
                    <div>
                        <div className='Choose-Us-container-section' style={{ textAlign: "center" }}>
                            <div className="status-badge" data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                                <div className="status-dot"></div>
                                <h2 style={{color:"white"}}>Why Choose Us</h2>
                            </div>
                        </div>

                        <div>
                            <div style={{ textAlign: "center", marginTop: "-3vh" }} data-aos="fade-up"
                                data-aos-duration="3000">
                                <p style={{ fontSize: "2rem", letterSpacing: "1px", fontWeight: "500", fontFamily: "Poppins", color: "white", marginBottom: "3vh" }}>Your <span style={{ color: "#9A7E5D" }}>Comfort</span> is Our Priority</p>
                            </div>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className={`features-grid ${isVisible ? 'slide-in-up' : ''}`}>
                        {/* High Performance */}
                        <div className="feature-card card-1">
                            <div className="icon-container">
                                <div className="performance-chart">
                                    <div className="bar bar-1"></div>
                                    <div className="bar bar-2"></div>
                                    <div className="bar bar-3"></div>
                                    <div className="bar bar-4"></div>
                                    <div className="bar bar-5"></div>
                                </div>
                            </div>
                            <h3 className="feature-title">High Performance</h3>
                            <p className="feature-description">
                                Empowering peak performance with innovative solutions and dedicated service
                            </p>
                        </div>

                        {/* Friendly Prices */}
                        <div className="feature-card card-2">
                            <div className="icon-container">
                                <div className="price-tag">
                                    <div className="dollar-sign">$</div>
                                    <div className="price-lines">
                                        <div className="line"></div>
                                        <div className="line"></div>
                                        <div className="line"></div>
                                    </div>
                                </div>
                            </div>
                            <h3 className="feature-title">Friendly Prices</h3>
                            <p className="feature-description">
                                Experience premium quality at budget-friendly rates.
                            </p>
                        </div>

                        {/* No time-confusing */}
                        <div className="feature-card card-3">
                            <div className="icon-container">
                                <div className="clock">
                                    <div className="clock-face">
                                        <div className="hour-hand"></div>
                                        <div className="minute-hand"></div>
                                        <div className="center-dot"></div>
                                    </div>
                                </div>
                            </div>
                            <h3 className="feature-title">No time-confusing</h3>
                            <p className="feature-description">
                                Quality products, competitive pricing - guaranteed simplicity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
            <Slider />

        </>
    );
}

export default WhyChooseUs;