import React from 'react'

import Hero from "./Hero";
import CreateRicket from "./CreateRicket";

import Navbar from "../Navbar";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";

function SupportPage() {
    return (
        <>
        <Navbar />
        <Hero />
        <CreateRicket />
        <OpenAccount />
        <Footer />
        </>
    );
}

export default SupportPage;
