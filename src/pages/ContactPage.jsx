import React from 'react';
import MapLocation from '../components/MapLocation';
import ContactInfo from '../components/ContactInfo';
import Contact from '../components/Contact';
function ContactPage() {
  return (
    <div className="pt-24">
      <Contact />
      <MapLocation />
      <ContactInfo />
    </div>
  );
}
export default ContactPage;