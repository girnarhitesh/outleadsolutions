import React, { useRef } from "react";
import "./Slider.css";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Slider() {
    const swiperRef = useRef(null);

    const ServicesSlider = [
        {
            img: "https://www.outleadsolutions.com/static/media/outbonding.b6ed87621917b113d51a.gif",
            title: "LINKEDIN OUTBOUND",
            Descriptions:
                "Digital Branding Web & Mobile Sites User Interface Design Responsive Techs",
        },
        {
            img: "https://www.outleadsolutions.com/static/media/discount-unscreen.be94f4d6e5ed0c744912.gif",
            title: "B2B LEAD GENERATION",
            Descriptions:
                "OutLead Solutions provides Lead Generation service which has unique process itself and can be useful to fulfil your need for business goal.",
        },
        {
            img: "https://www.outleadsolutions.com/static/media/computer-unscreen.7ad4ccbe0d2f7db17e76.gif",
            title: "UI-UX DESIGN",
            Descriptions:
                "Digital StrategyUser Experience Design User Interface Design Mobile Sites",
        },
        {
            img: "https://www.outleadsolutions.com/static/media/responsive-design-unscreen.cec66ed763cb9b08308e.gif",
            title: "WEB DEVELOPMENT",
            Descriptions:
                "Outlead Solutions also improvises your online visibility by using website development which can be further used to explore your work by your customers.",
        },
        {
            img: "https://www.outleadsolutions.com/static/media/email-unscreen.7dea8cf89ddab6172533.gif",
            title: "Cold Emailing",
            Descriptions:
                "Custom PlatformBack-End ExecutionsInterface AppsMobile Systems",
        },
        {
            img: "https://www.outleadsolutions.com/static/media/copywriting-unscreen.2b7870f4910fee862357.gif",
            title: "Social Media Marketing",
            Descriptions:
                "OutLead Solutions further harmonizes the unique tool for Lead Generation with careful and meticulously planned social media marketing techniques.",
        },
        {
            img: "https://www.outleadsolutions.com/static/media/notebook-unscreen.1cfba19b8b4594f4ed63.gif",
            title: "Content Writing",
            Descriptions:
                "OutLead Solutions offers the option of Content Writing and Posting for instances where sharing of detailed information is vital and pictures/graphics cannot do enough justice to the data in hand.",
        },
        {
            img: "https://www.outleadsolutions.com/static/media/seo-unscreen.0a0897dca8bb03dc0f2a.gif",
            title: "SEO & GOOGLE ADS",
            Descriptions:
                "Amplify your online presence with our expert SEO and Google Ads management. With Keyword Optimization & Strategic Ad Campaigns, we enhance your website's visibility and drive targeted traffic..",
        },
        {
            img: "https://www.outleadsolutions.com/static/media/camera-unscreen.30e585cc96d5562b1a75.gif",
            title: "PHOTOSHOOT",
            Descriptions:
                "Photoshoot services for a company involve creating professional images of products, commercial properties, or events, enhancing branding and marketing materials, as well as online presence to attract customers and showcase offerings effectively.",
        },
    ];

    return (
        <div className="sectionpadding">
            <div
                className="Servicesslider-contant-section"
                style={{ textAlign: "center" }}
            >
                <div className="status-badge" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <div className="status-dot"></div>
                    <h2>Our Services</h2>
                </div>
            </div>

            {/* Swiper Slider */}
            {/* <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={20}
                slidesPerView={3}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false, // user interaction hone ke baad bhi autoplay chalta rahega
                    pauseOnMouseEnter: true, // hover karne par stop
                }}
                speed={1000} // smooth slide transition
                pagination={{ clickable: true }}
                navigation={true}
                loop={true}
                breakpoints={{
                    320: { slidesPerView: 1 }, // mobile
                    768: { slidesPerView: 2 }, // tablet
                    1024: { slidesPerView: 3 }, // desktop
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            > */}

            <div>
                <div className="Sevies-grid-template-section">
                    {ServicesSlider.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="ServicesSlider-img-contant"
                                onClick={() => {
                                    if (swiperRef.current) {
                                        swiperRef.current.autoplay.stop(); // click par autoplay stop
                                    }
                                }}
                            >
                                <img src={item.img} alt={item.title} />
                                <h1>{item.title}</h1>
                                <p>{item.Descriptions}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </div>
            {/* </Swiper> */}
        </div>
    );
}

export default Slider;