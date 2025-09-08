import React, { useEffect, useRef } from 'react'
import './OurProcess.css'
import { gsap } from "gsap";
import { Row, Col } from 'antd';

function OurProcess() {
    const headingRef = useRef(null);
    const paraRefs = useRef([]);

    useEffect(() => {
        // Wrap text into spans for animation
        const wrapText = (element) => {
            const chars = element.innerText.split("").map((char) => {
                const span = document.createElement("span");
                span.innerText = char === " " ? "\u00A0" : char;
                span.style.display = "inline-block";
                span.style.opacity = 0;
                span.style.transform = "translateY(10px)";
                return span;
            });
            element.innerHTML = "";
            chars.forEach(span => element.appendChild(span));
            return chars;
        };

        // Wrap heading + paragraphs
        const headingChars = wrapText(headingRef.current);
        const para1Chars = wrapText(paraRefs.current[0]);
        const para2Chars = wrapText(paraRefs.current[1]);

        // Timeline for sequential animation
        const tl = gsap.timeline();

        // Animate heading first
        tl.to(headingChars, {
            opacity: 1,
            y: 0,
            stagger: 0.02,
            duration: 0.2,
            ease: "power3.out"
        });

        // Animate first paragraph
        tl.to(para1Chars, {
            opacity: 1,
            y: 0,
            stagger: 0.02,
            duration: 0.4,
            ease: "power2.out"
        }, "+=0.5"); // small delay after heading

        // Animate second paragraph (starts only after first finishes)
        tl.to(para2Chars, {
            opacity: 1,
            y: 0,
            stagger: 0.02,
            duration: 0.4,
            ease: "power2.out"
        }, "+=0.5"); // delay after 1st para
    }, []);

    return (
        <>
            <Row>
                <div className='sectionpadding'>
                    <div className='ourprocess-section'>
                        <div className='OurProcess-container-section'>
                            <div className="status-badge" data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                                <div className="status-dot"></div>
                                <h2>Our Process</h2>
                            </div>
                        </div>
                        <div className='Ourprocess-contant-container-section'>
                            <Col lg={12} sm={16} md={24} xs={ 24}>
                                <div className='Ourprocess-img-section' data-aos="fade-right">
                                    <img src="https://www.outleadsolutions.com/static/media/Outlead%20Post%202024%20(1).dcdb4aa380fe9226bc6f.png" alt="" />
                                </div>
                            </Col>
                            <Col lg={12} sm={16} md={24} xs={24}>
                                <div className='Ourprocess-contant'>
                                    <h1 ref={headingRef} data-aos="fade-left">Why to Choose us??</h1>
                                    <p ref={el => paraRefs.current[0] = el} data-aos="fade-left">
                                        Outlead Solutions delivers unparalleled Graphics Design and Websites Development expertise, crafting visually stunning and highly functional websites tailored to your business needs.
                                    </p>
                                    <br />
                                    <p ref={el => paraRefs.current[1] = el} data-aos="fade-left">
                                        Our team is committed to delivering excellence, innovation, and personalized service, ensuring your online presence stands out in today's competitive digital landscape. Choose Outlead Solutions for unmatched results.
                                    </p>
                                </div>
                            </Col>
                        </div>
                    </div>
                </div >
            </Row>
        </>

    )
}

export default OurProcess