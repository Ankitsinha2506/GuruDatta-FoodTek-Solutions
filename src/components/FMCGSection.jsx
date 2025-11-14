import React from 'react';
import { motion } from 'motion/react';
import { Pencil, Factory, Wrench } from 'lucide-react';

function FMCGSection() {
  const services = [
    {
      icon: Pencil,
      title: 'Design',
      description: 'Custom-engineered solutions tailored to your specific production requirements.',
      highlight: 'Innovative designs for optimal efficiency'
    },
    {
      icon: Factory,
      title: 'Manufacture',
      description: 'State-of-the-art manufacturing facilities producing world-class machinery.',
      highlight: 'Premium quality components & materials'
    },
    {
      icon: Wrench,
      title: 'Installation',
      description: 'Expert installation services ensuring seamless integration into your production line.',
      highlight: 'Complete support & commissioning'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl text-[#0446F2] mb-6">
              We Design, Manufacture and Install Machinery for FMCG
            </h2>
            <div className="w-24 h-1 bg-[#FF9136] mb-6"></div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              At Gurudatta Foodtek Solutions, we provide end-to-end solutions for the FMCG industry. From conceptual design to final installation, our comprehensive services ensure that your production line operates at peak efficiency. With decades of experience in food processing technology, we understand the unique challenges of the FMCG sector and deliver machinery that meets the highest standards of quality, hygiene, and performance.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our integrated approach means you work with a single trusted partner throughout the entire process, ensuring consistency, quality control, and seamless project execution. We combine cutting-edge technology with proven engineering principles to create processing solutions that drive your business forward.
            </p>
          </motion.div>

          {/* Right Side - Cards */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-[#FFFFF2] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-[#0446F2]"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.03, x: 10 }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#0446F2] p-3 rounded-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl text-[#0446F2] mb-2">{service.title}</h3>
                    <p className="text-gray-700 mb-1">{service.description}</p>
                    <p className="text-sm text-[#FF9136]">{service.highlight}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default FMCGSection;
