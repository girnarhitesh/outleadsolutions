import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import AllHomesection from './assets/Componets/AllHomesection/AllHomesection';
import Navigation from './assets/Componets/AllHomesection/Navigation/Navigation';
import OurPartners from './assets/Componets/OurPartners/OurPartners';
import Servicespage from './assets/Componets/Servicespage/Servicespage';
import Aboutpage from './assets/Componets/Aboutpage/Aboutpage';
import Contact from './assets/Componets/Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './assets/Componets/Footer/Footer';
import { AiOutlineVerticalAlignTop } from "react-icons/ai";
import './App.css';

// ScrollToTop Component
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [exitPreloader, setExitPreloader] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setExitPreloader(true);
    }, 2500);

    const removeLoaderTimer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(removeLoaderTimer);
    };
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {loading && (
        // 🔹 Smooth Sliding Loader
        <div className={`preloader ${exitPreloader ? 'slide-out' : ''}`}>
          <div className="preloader-content">
            <img src="https://www.outleadsolutions.com/static/media/Outleadlogo.fc63d43a70b138363984.png" alt="" />
            <h1 className="slide-text">Outlead Solutions</h1>
          </div>
        </div>
      )}

      <div className={`content-wrapper ${!loading ? 'show' : ''}`}>
        <BrowserRouter>
          <ScrollToTop />
          <Navigation />
          <Routes>
            <Route path="/" element={<AllHomesection />} />
            <Route path="/clients" element={<OurPartners />} />
            <Route path="/service" element={<Servicespage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />

          {/* 🔹 Top Scroll Button */}
          {/* {showScroll && (
            <div className="Top-earrow-icone" onClick={scrollToTop}>
              <AiOutlineVerticalAlignTop />
            </div>
          )} */}
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;