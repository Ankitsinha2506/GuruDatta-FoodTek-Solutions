import React from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

function MapLocation() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-[#0446F2] mb-4">Visit Our Facility</h2>
          <div className="w-24 h-1 bg-[#FF9136] mx-auto mb-6"></div>
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <MapPin className="text-[#FF9136]" size={24} />
            <p className="text-lg">
              S No 184, Bhosari Alandi Road, Banacha Odha, Near Govind Garden, Bhosari, Pune-411039, Maharashtra, India
            </p>
          </div>
        </motion.div>

        <motion.div
          className="rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.0674891234567!2d73.8420123!3d18.6428074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM4JzM0LjEiTiA3M8KwNTAnMzEuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Gurudatta Foodtek Solutions Location"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}

export default MapLocation;
