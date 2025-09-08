import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import "./Hero.css"

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    const [animate, setAnimate] = useState(false);

    // useRef hook to get a reference to the DOM element
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const mousePositionRef = useRef({ x: 0, y: 0 });

    // State for cycling through descriptions
    const descriptions = [
        "Logo Designing & Website Development",
        "Lead Generation for B2B Businesses",
        "Branding & Marketing for B2C Businesses"
    ];
    const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
    const [fade, setFade] = useState(true);

    // Main useEffect for mouse tracking and visibility
    useEffect(() => {
        setIsVisible(true);

        const handleMouseMove = (e) => {
            mousePositionRef.current = {
                x: e.clientX,
                y: e.clientY
            };
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Effect for the description animation
    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Start fade-out
            setTimeout(() => {
                setCurrentParagraphIndex(prevIndex => (prevIndex + 1) % descriptions.length);
                setFade(true); // Start fade-in
            }, 500); // Corresponds to the CSS transition duration
        }, 3000); // 3 seconds per paragraph cycle (including transition)

        return () => clearInterval(interval);
    }, [descriptions.length]);

    // Effect for the canvas animation
    useEffect(() => {
        if (!containerRef.current || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = containerRef.current.offsetWidth;
        let height = containerRef.current.offsetHeight;
        canvas.width = width;
        canvas.height = height;

        // Particle settings for the animation
        const particleCount = 200;
        const particles = [];
        const maxDistance = 120; // Max distance for connecting particles

        // Particle object constructor
        function Particle(x, y) {
            this.x = x;
            this.y = y;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = 1 + Math.random();
            this.color = 'rgba(255, 255, 255, 0.8)';
        }

        // Function to draw a particle on the canvas
        Particle.prototype.draw = function () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        };

        // Function to update particle position
        Particle.prototype.update = function () {
            // Check boundaries and reverse velocity
            if (this.x + this.radius > width || this.x - this.radius < 0) this.vx *= -1;
            if (this.y + this.radius > height || this.y - this.radius < 0) this.vy *= -1;

            this.x += this.vx;
            this.y += this.vy;
        };

        // Function to create initial particles
        function createParticles() {
            for (let i = 0; i < particleCount; i++) {
                const x = Math.random() * width;
                const y = Math.random() * height;
                particles.push(new Particle(x, y));
            }
        }

        // Function to draw lines between nearby particles
        function drawLines() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const p1 = particles[i];
                    const p2 = particles[j];

                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / maxDistance})`;
                        ctx.stroke();
                    }
                }
            }
        }

        // Main animation loop
        let animationFrameId;
        const animateCanvas = () => {
            // Clear the canvas for the next frame
            ctx.clearRect(0, 0, width, height);

            const mouseX = mousePositionRef.current.x;
            const mouseY = mousePositionRef.current.y;

            // Update and draw each particle
            for (const p of particles) {
                p.update();
                p.draw();
                // Handle mouse interaction based on the state directly inside the loop
                const dx = p.x - mouseX;
                const dy = p.y - mouseY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) { // Interaction radius
                    const angle = Math.atan2(dy, dx);
                    const force = (100 - distance) / 100;
                    p.x -= Math.cos(angle) * force * 2;
                    p.y -= Math.sin(angle) * force * 2;
                }
            }

            // Draw connecting lines between nearby particles
            drawLines();

            // Request the next frame
            animationFrameId = requestAnimationFrame(animateCanvas);
        };

        // Event listener for window resize
        const handleResize = () => {
            width = containerRef.current.offsetWidth;
            height = containerRef.current.offsetHeight;
            canvas.width = width;
            canvas.height = height;
            particles.length = 0; // Clear existing particles
            createParticles(); // Re-create particles for new dimensions
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Start the canvas animation
        createParticles();
        animateCanvas();

        // Cleanup function
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleClick = () => {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 600);
    };

    return (
        <>
           


            <Row>
                <Col lg={12} sm={16} md={24}>
                    <div className={`hero-container ${isVisible ? 'loaded' : ''}`} ref={containerRef}>
                        {/* Background Canvas */}
                        <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }} />

                        {/* Interactive cursor glow */}
                        <div
                            className="cursor-glow"
                            style={{
                                left: `${(mousePositionRef.current.x / window.innerWidth) * 100}%`,
                                top: `${(mousePositionRef.current.y / window.innerHeight) * 100}%`
                            }}
                        ></div>

                        <div className="hero-content">
                            {/* Status Badge */}
                            <div className="status-badge" data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                                <div className="status-dot"></div>
                                <h2>Available For Hire</h2>
                            </div>

                            {/* Main Content */}
                            <h1 className="hero-title">
                                Outlead Solutions
                                <span style={{ color: "#916D43" }}> Business Development</span> Agency
                            </h1>

                            <div className="hero-description-container">
                                <p className={fade ? 'fade-in' : 'fade-out'}>
                                    {descriptions[currentParagraphIndex]}
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="cta-buttons">
                                <Link to="/about">
                                    <button onClick={handleClick} className="btn-primary">
                                        Learn More
                                        <span
                                            className={`icon-wrapper ${animate ? "animate" : ""}`}
                                            style={{
                                                textAlign: "center",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "20px",
                                            }}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </button>
                                </Link>

                                <Link to="/contact">
                                    <button
                                        className="btn-secondary"
                                        style={{
                                            letterSpacing: "1px",
                                            fontWeight: "500",
                                            fontSize: "18px",
                                        }}
                                    >
                                        Contact
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Scroll indicator with bounce animation */}
                        <div className="absolute bottom-10 z-10 scroll-arrow">
                            <svg
                                className="w-8 h-8 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 5v14m-5-7l5 5 5-5" />
                            </svg>
                        </div>
                    </div>
                </Col>

            </Row>

        </>
    );
}
