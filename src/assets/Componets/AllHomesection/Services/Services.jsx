import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import "./Services.css";
import { Row, Col } from 'antd';

const services = [
  {
    title: "LinkedIn Outbound",
    desc: "Tap businesses on LinkedIn on a one-to-one basis with our proven communication methodologies.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #0077b5, #00a0dc)",
  },
  {
    title: "Cold Emailing",
    desc: "Reach out to businesses and individuals at large with high ROI emailing sequences.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #ea4335, #fbbc04)",
  },
  {
    title: "Social Media Marketing",
    desc: "Establish your brand and create effective sales channels through our social media prowess.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2z" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #e1306c, #405de6)",
  },
  {
    title: "Logo & Website Development",
    desc: "Transform your vision into a captivating digital experience with our logo & website development expertise.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 10h-1.26a8 8 0 1 0-16.74 0H6" />
        <path d="M12 2v6" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #667eea, #764ba2)",
  },
];

function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // A simple timeout to show a fade-in effect on load.
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Row>
        <Col lg={12} sm={16} md={24}>
          <div className="sectionpadding">
            <div className="services-section">
              <div className="status-badge fade-up">
                <div className="status-dot"></div>
                <h2>Services</h2>
              </div>

              <div className="services-grid">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="service-card"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Floating particles background effect */}
                    <div className="card-particles">
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                    </div>

                    <div className="service-card-content fade-up" style={{ animationDelay: `${index * 0.2}s` }}>
                      <div className="icon-container" data-gradient={service.gradient}>
                        {service.icon}
                      </div>
                      <h3>{service.title}</h3>
                      <p>{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Col>
      </Row>

    </>
  );
}

export default Services;
