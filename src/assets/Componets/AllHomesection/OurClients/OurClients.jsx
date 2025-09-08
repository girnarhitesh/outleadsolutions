import React from 'react'
import './OurClients.css'

function OurClients() {
    const OurClientsData = [
        { img: "https://www.outleadsolutions.com/Sources/images/logos/prepseed.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/chartered.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/craftezy.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/shivtex.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/cidroy.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/adira.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/drashti.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/FA.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/Bim.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/cardinal.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/digvijay.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/64.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/adrija.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/age.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/archbude.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/bbg.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/beacon.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/biochem.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/bluefire.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/Bsquare.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/hitech.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/ninefive.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/qutone.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/book.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/braincuber.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/codertrails.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/divya.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/enable.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/estrella.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/finanvo.png" },
    ];

    return (
        <div className='sectionpadding'>
            <div className="Ourclients-relative-section">
                <div className='OurClients-section-container'>
                    <div className="status-badge" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <div className="status-dot"></div>
                        <h2>Our Key Clients</h2>
                    </div>
                </div>

                {/* Left Side Slider */}
                <div className="slider left-move">
                    <div className="slide-track">
                        {OurClientsData.concat(OurClientsData).map((item, index) => (
                            <div className="slide" key={index}>
                                <img src={item.img} alt={`client-${index}`} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side Slider */}
                <div className="slider right-move">
                    <div className="slide-track">
                        {OurClientsData.concat(OurClientsData).map((item, index) => (
                            <div className="slide" key={index}>
                                <img src={item.img} alt={`client-${index}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurClients;