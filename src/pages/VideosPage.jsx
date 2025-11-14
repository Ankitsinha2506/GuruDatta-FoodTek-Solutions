import React from 'react';
import MapLocation from '../components/MapLocation';
import ContactInfo from '../components/ContactInfo';
import Videos from '../components/Videos';


function VideosPage() {
    return (
        <div className="pt-24">
            <Videos />
            <MapLocation />
            <ContactInfo />
        </div>
    );
}

export default VideosPage;