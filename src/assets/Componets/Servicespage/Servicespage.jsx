import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Servicespage.css'
import WhyChooseUs from '../ourchoose/ourchoos'


function Servicespage() {

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
            <div className='sectionpadding'>
                <div className='Servicespage-section'>
                    <div className='Servicespage-csection-container' style={{ textAlign: "center" }}>
                        <h1 data-aos="fade-up"
                            data-aos-duration="2000">We're <span style={{ color: "#957653" }}>ready</span> to Serve you with best</h1>
                        <p data-aos="fade-up"
                            data-aos-duration="3000">We provide marketing services to startups & small business to lookingfor partner for their digital media, design & dev lead generation & communication.</p>
                    </div>

                    <div>
                        <div className='Servicespage-img-section'>
                            <img src="public/background.img/3893300.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <WhyChooseUs />


        </>
    )
}

export default Servicespage;
