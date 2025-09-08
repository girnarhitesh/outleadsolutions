import React from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services';
import OurClients from './OurClients/OurClients';
import OurProcess from './OurProcess/OurProcess';
import Testimonials from './Testimonials/Testimonials';

function AllHomesection() {
    return (
        <div>
            <Hero />
            <Services/>
            <OurClients/>
            <OurProcess/>
            <Testimonials/>
        </div>
    )
}

export default AllHomesection;
