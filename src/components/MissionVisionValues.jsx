import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Heart } from 'lucide-react';

function MissionVisionValues() {
  const items = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To deliver cutting-edge food processing solutions that empower our clients to achieve excellence in production while maintaining the highest standards of quality, safety, and efficiency. We are committed to innovation and continuous improvement in every aspect of our service.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the global leader in food processing technology, recognized for our innovative solutions, uncompromising quality, and exceptional customer service. We envision a future where our machinery sets the industry standard for performance and reliability.'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Integrity, Innovation, Quality, and Customer-Centricity are the cornerstones of our business. We believe in building long-term relationships through transparency, delivering sustainable solutions, and exceeding expectations in every project we undertake.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-[#FFFFF2] rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="bg-[#0446F2] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-[#0446F2] mb-4">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default MissionVisionValues;