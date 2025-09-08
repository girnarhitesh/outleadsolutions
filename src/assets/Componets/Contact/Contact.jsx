import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Contact.css'

function Contact() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true })  // animation speed & once on scroll
    }, [])

    const contacts = [
        {
            video: "/video.aniamtion/animation2.mp4",
            name: "Shanay Shah",
            subtitle: "For B2B"
        },
        {
            video: "/video.aniamtion/animation2.mp4",
            name: "Vivek Kankaria",
            subtitle: "For B2C"
        },
    ];

    return (
        <div className='sectionpadding'>
            {/* Background video */}
            <div className="contact-video-container">
                <video
                    src="/video.aniamtion/animation1.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="contact-video"
                />
            </div>

            {/* Contact Cards */}
            <div className="card-container">
                {contacts.map((c, i) => (
                    <div
                        key={i}
                        className="contact-card"
                        data-aos={i % 2 === 0 ? "fade-right" : "fade-left"} // alternate effect
                    >
                        <div className="video-wrapper" data-aos="zoom-in">
                            <video
                                src={c.video}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="contact-video-profile"
                            />
                        </div>
                        <h1 className="contact-name" data-aos="fade-up">{c.name}</h1>
                        <p className="contact-subtitle" data-aos="fade-up" data-aos-delay="200">{c.subtitle}</p>
                        <button className="contact-btn" data-aos="zoom-in-up">Contact</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Contact;