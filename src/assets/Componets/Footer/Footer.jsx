import React, { useState, useEffect } from 'react';
import { Instagram, MessageCircle, Linkedin, TrendingUp, Mail, Phone, MapPin, Target } from 'lucide-react';
import './Footer.css'
import { Link } from 'react-router-dom';

const AnimatedFooter = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [setHoveredSocial] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const footerElement = document.querySelector('.footer-container');
        if (footerElement) {
            observer.observe(footerElement);
        }

        return () => observer.disconnect();
    }, []);

    const socialLinks = [
        { icon: Instagram, name: 'Instagram', color: '#E1306C', url: "https://www.instagram.com/outlead_solutions/" },
        { icon: MessageCircle, name: 'WhatsApp', color: '#25D366', url: '#' },
        { icon: Linkedin, name: 'LinkedIn', color: '#0077B5', url: 'https://www.linkedin.com/company/outlead-solutions/?originalSubdomain=in', }
    ];

    const navLinks = [
        { name: 'CLIENTS', href: '/clients' },
        { name: 'ABOUT', href: '/about' },
        { name: 'CONTACT', href: '/contact' },
        { name: 'SERVICE', href: '/service' }
    ];

    const services = [
        'Digital Marketing',
        'Business Consulting',
        'Lead Generation',
        'Analytics & Insights',
        'Growth Strategy',
        'Marketing Automation'
    ];

    return (
        <footer className="footer-container">
            {/* Animated Background Elements */}
            <div className="background-elements">
                {/* Floating Particles */}
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 2}s`
                        }}
                    />
                ))}

                {/* Gradient Waves */}
                <div className="wave wave-1" />
                <div className="wave wave-2" />
                <div className="wave wave-3" />
            </div>

            <div className="footer-content">
                {/* Main Footer Content */}
                <div className="footer-main">
                    {/* Company Logo & Info */}
                    <div className={`footer-section company-info ${isVisible ? 'animate-slide-up' : ''}`}>
                        <div className="logo-container">
                            <Link to="/">
                                <div className="logo-circle">
                                    <img src="https://www.outleadsolutions.com/static/media/Outleadlogo.fc63d43a70b138363984.png" alt="" />
                                </div>
                            </Link>
                        </div>




                    </div>

                    {/* Navigation Links */}
                    <div className={`footer-section nav-section ${isVisible ? 'animate-slide-up' : ''}`}>
                        {/* <h4>Quick Links</h4> */}
                        <ul className="nav-links">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    {/* <div className={`footer-section services-section ${isVisible ? 'animate-slide-up' : ''}`}>
                        <h4>Our Services</h4>
                        <ul className="services-list">
                            {services.map((service, index) => (
                                <li
                                    key={index}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div> */}

                    {/* Newsletter */}
                    {/* <div className={`footer-section newsletter-section ${isVisible ? 'animate-slide-up' : ''}`}>
                        

                        <div className="newsletter-form">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="newsletter-input"
                            />
                            <button className="newsletter-btn">
                                <Mail size={16} />
                                Subscribe
                            </button>
                        </div>

                        
                    </div> */}
                </div>

                {/* Social Links */}
                <div className={`social-section ${isVisible ? 'animate-fade-in' : ''}`}>
                    {/* <h4>Follow Us</h4> */}
                    <div className="social-links">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                className="social-link"
                                Target='_blank'
                                onMouseEnter={() => setHoveredSocial(index)}
                                onMouseLeave={() => setHoveredSocial(null)}
                                style={{
                                    animationDelay: `${index * 0.2}s`,
                                    '--social-color': social.color
                                }}
                            >
                                <social.icon size={24} />
                                <span className="social-tooltip">{social.name}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Copyright */}
                <div className={`footer-bottom ${isVisible ? 'animate-fade-in' : ''}`}>
                    <div className="copyright-line" />
                    <p className="copyright-text">
                        Copyright © All rights reserved by  <Link to='/'><span>Outlead Solution</span></Link>
                    </p>
                </div>
            </div>


        </footer>
    );
};

export default AnimatedFooter;