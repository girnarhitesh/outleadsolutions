import React, { useState, useEffect } from 'react'
import './Aboutpage.css';
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Row, Col } from 'antd';

function Aboutpage() {
    const [fly, setFly] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setFly(true);
        setTimeout(() => {
            navigate("/contact");
        }, 1500);
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,   // animation duration (ms)
            once: true,       // animation runs only once
            easing: "ease-in-out",
        });
        AOS.refresh();
    }, []);


    return (
        <>
            <Row>
                <div className='sectionpadding'>
                    {/* <Col lg={12} sm={16} md={24}> */}
                    <div className='Aboutpage-section-container' style={{ textAlign: "center" }}>
                        <div className="status-badge" data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500">
                            <div className="status-dot"></div>
                            <h2>About us</h2>
                        </div>

                        <div>
                            <div className='Aboutpage-contant-section' data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1500">
                                <p>
                                    We are an innovative marketing company, dedicated to helping
                                    businesses succeed through tailored strategies and captivating campaigns.
                                </p>

                                <div className="About-section-button">
                                    <Button
                                        type="primary"
                                        size="large"
                                        onClick={handleClick}
                                        className="fly-button"
                                    >
                                        Reach Out To Us!{" "}
                                        {!fly && <FaPaperPlane style={{ marginLeft: "8px", color: "#958871" }} />}

                                        {fly && (
                                            <motion.div
                                                initial={{ x: 0, y: 0, opacity: 1 }}
                                                animate={{ x: 250, y: -180, opacity: 0 }}
                                                transition={{ duration: 1.3, ease: "easeInOut" }}
                                                className="fly-plane"
                                            >
                                                <FaPaperPlane className='Fapaperplane-container' size={22} color="#958871" />
                                            </motion.div>
                                        )}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </Col> */}

                    <Col lg={12} sm={16} md={24}>
                        <div className='Aboutpage-contant-container'>
                            {/* Left side: Text */}
                            <div className='Aboutpage-section-contant-container'>
                                <h1>
                                    Outlead <span style={{ color: "#958871" }}>Solution</span>
                                </h1>
                                <p>
                                    Outlead Solutions is a premier graphics design, marketing, and web development
                                    company, dedicated to helping businesses grow their online presence.
                                    We specialize in crafting visually stunning designs, innovative marketing
                                    strategies, and high-performance websites tailored to your unique needs.
                                    Our expert team ensures optimal user experiences and drives measurable
                                    results, empowering your brand to succeed in the digital landscape.
                                </p>
                            </div>

                            {/* Right side: Image with animation */}
                            <div className='Aboutpage-animation-img' >
                                <img
                                    src="/background.img/OutleadSolutions.jpeg"
                                    alt="Outlead Solutions"
                                    data-aos="fade-left"
                                    data-aos-anchor="#example-anchor"
                                    data-aos-offset="500"
                                    data-aos-duration="500"
                                />
                            </div>
                        </div>
                    </Col>

                    <Col lg={12} sm={16} md={24}>
                        <div>
                            <div className='Aboutpage-2container-section'>
                                <h1>What is <span style={{ color: "#958871" }}>Outlead Solution?</span></h1>
                            </div>
                            <div>
                                <div className='Aboutpage-secound-contnat'>
                                    <p>The onset of the global pandemic has drastically changed the way businesses survive and thrive. The founders of OutLead took this challenge as an opportunity with one simple goal - to reconstruct the pillars of sales and marketing in the digital world.</p>

                                    {/* <br /> */}

                                    <p>OutLead is a proud composer of a unique 5-stage process for lead generation, where special emphasis is laid on establishing trust and authenticity with clients over the internet. This process further includes researching and identifying key potential customer bases over LinkedIn, by engaging with them in a dialogue and thereby selling the idea of your product/service.</p>

                                    {/* <br /> */}

                                    <p>This process of lead generation is further accompanied with carefully designed digital marketing tools, which involve - establishing digital presence of your business on key social media platforms, targeted strategies to identify and grow followers on such platforms, designing and posting of informative content pertaining to the business on a regular basis and so on.</p>

                                    {/* <br /> */}
                                    <p>It's time to join hands; and lead together with OutLead!</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </div>

            </Row >

        </>
    )
}

export default Aboutpage