import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin } from 'lucide-react';

function ContactInfo() {
  const contactDetails = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['9049043434', '95296 72992']
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['gurudattafoodteksolutions25@gmail.com']
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['S No 184, Bhosari Alandi Road, Banacha Odha, Near Govind Garden, Bhosari, Pune-411039, Maharashtra, India']
    }
  ];

  return (
    <section className="py-16 bg-[#FFFFF2]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-[#0446F2] mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-[#FF9136] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contactDetails.map((contact, index) => (
            <motion.div
              key={contact.title}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="bg-[#0446F2] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <contact.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-[#0446F2] mb-4">{contact.title}</h3>
              <div className="space-y-2">
                {contact.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-700 break-words">
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ContactInfo;