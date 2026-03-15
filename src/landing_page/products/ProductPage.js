import React from 'react'

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

import Navbar from "../Navbar";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";

function ProductPage() {
    return (
        <>
        <Navbar />
        <Hero />
        <LeftSection />
        <RightSection />
        <Universe />
        <OpenAccount />
        <Footer />
        </>
    );
}

export default ProductPage;
