import React from 'react';
import MapLocation from '../components/MapLocation';
import ContactInfo from '../components/ContactInfo';
import About from '../components/About';
import MissionVisionValues from '../components/MissionVisionValues';
import CustomerSatisfaction from '../components/CustomerSatisfaction';


function AboutPage() {
  return (
    <div className="pt-24">
      <About />
      <MissionVisionValues />
      <CustomerSatisfaction />
      <MapLocation />
      <ContactInfo />
    </div>
  );
}

export default AboutPage;
