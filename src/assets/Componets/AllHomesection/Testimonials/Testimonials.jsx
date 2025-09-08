import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Row, Col } from "antd";


function Testimonials() {
    const TestimonialData = [
        {
            img: "https://www.outleadsolutions.com/Sources/images/3.png",
            name: "SNEH SHAH",
            company: "TIDBIT SOLUTIONS",
            career: "CO-FOUNDER",
            description: "I have worked with a couple of agencies in the past and none of them even come close to how impressed i am with OutLead solutions. The incredible amount of effort and dedication they put into their work is more detailed than you can imagine."
        },
        {
            img: "https://www.outleadsolutions.com/Sources/images/1.png",
            name: "ABHISHEK BANSAL",
            company: "SHIVTEX SPINNING PVT LTD",
            career: "DIRECTOR, CEO",
            description: "When it comes to social media marketing there's plenty of fish in the sea. outlead solutions has helped me to engage customers and industry commentators alike, bringing my business great results."
        },
        {
            img: "https://www.outleadsolutions.com/Sources/images/2.png",
            name: "RAJ SHAH",
            company: "HITECH PROJECTS PVT LTD",
            career: "DIRECTOR",
            description: "Consistency, competency and creativity are the three words I can think have when it comes to ‘OutLead solutions’. They are constantly willing to adapt and support any fast-changes and new initiatives that might be outside of scope."

        }
    ];

    return (
        <>

            <Row>
                <Col lg={12} sm={16} md={24} xs={24}>
                    <div className="testimonials-section">
                        <div className="status-badge" data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <div className="status-dot"></div>
                            <h2>Testimonials</h2>
                        </div>
                        <div className="testimonials-container">
                            <div className="testimonials-right">
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    spaceBetween={20}
                                    slidesPerView={2.5}
                                    navigation
                                    pagination={{ clickable: true }}
                                    breakpoints={{
                                        320: { slidesPerView: 1 },
                                        768: { slidesPerView: 2 },
                                        1024: { slidesPerView: 3 }
                                    }}
                                >
                                    {TestimonialData.map((item, index) => (
                                        <SwiperSlide key={index} data-aos="fade-down"
                                            data-aos-easing="linear"
                                            data-aos-duration="1500">
                                            <div className="testimonial-card"  >
                                                <img src={item.img} alt={item.name} />
                                                <div className="testimonial-text">
                                                    <div className="quote-icon">“</div>
                                                    <p>{item.description}</p>
                                                    <h3>{item.name}</h3>
                                                    <span>{item.company}</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>


        </>
    );
}

export default Testimonials;