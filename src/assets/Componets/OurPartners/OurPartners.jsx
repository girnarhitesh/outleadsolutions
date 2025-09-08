import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './OurPartners.css'
import { Row,Col } from 'antd'

function OurPartners() {


    useEffect(() => {
        AOS.init({
            duration: 1000,   // animation duration (ms)
            once: true,       // animation runs only once
            easing: "ease-in-out",
        });
        AOS.refresh();
    }, []);

    const OurpartnersData = [
        { img: 'https://www.outleadsolutions.com/Sources/images/logos/prepseed.png' },
        { img: 'https://www.outleadsolutions.com/Sources/images/logos/chartered.png' },
        { img: 'https://www.outleadsolutions.com/Sources/images/logos/craftezy.png' },
        { img: 'https://www.outleadsolutions.com/Sources/images/logos/shivtex.png' },
        { img: 'https://www.outleadsolutions.com/Sources/images/logos/rdt.png' },
        { img: 'https://www.outleadsolutions.com/Sources/images/logos/cidroy.png' },
        { img: 'https://www.outleadsolutions.com/Sources/images/logos/adira.png' },
        { img: 'https://www.outleadsolutions.com/Sources/images/logos/drashti.png' },
        { img: 'https://www.outleadsolutions.com/Sources/images/logos/FA.png' },
        { img: 'https://www.outleadsolutions.com/Sources/images/logos/Bim.png' },
        { img: 'https://www.outleadsolutions.com/Sources/images/cardinal.png' },
        { img: 'https://www.outleadsolutions.com/Sources/images/logos/digvijay.png' },
        { img: 'https://www.outleadsolutions.com/Sources/images/logos/64.png' },
        { img: 'https://www.outleadsolutions.com/Sources/images/logos/adrija.png' },
        { img: 'https://www.outleadsolutions.com/Sources/images/logos/age.png' },
        { img: 'https://www.outleadsolutions.com/Sources/images/logos/archbude.png' },
        { img: 'https://www.outleadsolutions.com/Sources/images/logos/bbg.png' },
        { img: 'https://www.outleadsolutions.com/Sources/images/logos/beacon.png' },
        { img: 'https://www.outleadsolutions.com/Sources/images/logos/biochem.png' },
        { img: 'https://www.outleadsolutions.com/Sources/images/logos/bluefire.png' },
        { img: 'https://www.outleadsolutions.com/Sources/images/logos/Bsquare.png' },
        { img: 'https://www.outleadsolutions.com/Sources/images/logos/hitech.png' },
        { img: 'https://www.outleadsolutions.com/Sources/images/logos/ninefive.png' },
        { img: 'https://www.outleadsolutions.com/Sources/images/logos/qutone.png' },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/book.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/gloline.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/mandir.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/braincuber.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/gramvaani.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/mastersoft.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/codertrails.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/h4healing.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/online.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/enable.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/happick.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/pet.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/estrella.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/inspire.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/poas.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/finanvo.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/maak.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/savory.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/scones.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/valuemize.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/shinkhan.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/KhushiLogo.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/simplso.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/Neutec.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/softco.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/FR.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/techmyntra.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/Divya.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/v.png" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/TDM.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/Vebbbeeeee.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/SUMS.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/DYD.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/ClarityComm.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/AB%20Mittal.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/EximiusVenture.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/Fiable.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/yellowspot.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/Tribalvedda.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/Growth91.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/ITZEL.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/Tringular.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/Orget.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/Advisory.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/H4Healing.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/ACE%20racquets.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/Tikkaow.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/Soul.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/Happick.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/Vibfast.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/Hyrespree.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/Gloline.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/AlmaShines.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/PBI.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/Club.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/quickDraft.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/Tronsoft.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/RMJ.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/Proffestional%20Edge.JPG" },
        { img: "https://www.outleadsolutions.com/Sources/images/logos/risentech.JPG" },

    ]
    return (
        <>
            <Row>
                <div className='sectionpadding'>
                    {/* <Col> */}
                        <div className='Ourpartners-container-section' style={{ textAlign: "center" }}>
                            <div className="status-badge" data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom">
                                <div className="status-dot"></div>
                                <h2>Our Partners</h2>
                            </div>
                        </div>

                        <div>
                            <div className='ourpartners-img-container-section'>
                                {OurpartnersData.map((item, index) => (
                                    <div key={index} className="OurPartners-img-container">
                                        <img src={item.img} alt={item.name} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    {/* </Col> */}
                </div >
            </Row>



        </>
    )
}

export default OurPartners
