import React from "react";
import HomeHero from '../components/HomeHero';
import QualityProducts from "../components/QualityProducts";
import FMCGSection from "../components/FMCGSection";
import MapLocation from "../components/MapLocation";
import ContactInfo from "../components/ContactInfo";

export function HomePage() {
    return (
        <>
            <HomeHero />
            <QualityProducts />
            <FMCGSection />
            <MapLocation />
            <ContactInfo /> 
        </>
    );
}