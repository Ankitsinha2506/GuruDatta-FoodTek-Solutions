import React from "react";
import { motion } from "motion/react";
import {
  CheckCircle,
  Award,
  Users,
  Globe,
  Wrench,
  Settings,
} from "lucide-react";

function About() {
  const stats = [
    { icon: Award, value: "", label: "Professional Designs" },
    { icon: Settings, value: "", label: "Manufacture" },
    { icon: Wrench, value: "", label: "Installation" },
  ];

  const features = [
    "State-of-the-art manufacturing facilities",
    "ISO certified quality standards",
    "Expert engineering team with decades of experience",
    "Custom solutions tailored to your needs",
    "Comprehensive after-sales support",
    "Energy-efficient and sustainable designs",
  ];

  return (
    <section id="about" className="py-20 bg-[#FFFFF2]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-[#0446F2] mb-4">
            About Gurudatta Foodtek Solutions
          </h2>
          <div className="w-24 h-1 bg-[#FF9136] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the industry in innovative food processing
            solutions for over two decades
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1680595848057-66631ee6fd1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwcGxhbnQlMjBtb2Rlcm58ZW58MXx8fHwxNzYyNzAzODA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Manufacturing Facility"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl text-[#0446F2] mb-6">
              Who We Are
            </h3>
            <p className="text-gray-600 mb-6">
              Gurudatta Foodtek Solutions is a trusted name in
              the food processing industry, specializing in the
              design, manufacture, and installation of complete
              processing lines. Our commitment to innovation,
              quality, and customer satisfaction has made us a
              preferred choice for food manufacturers worldwide.
            </p>
            <p className="text-gray-600 mb-8">
              From small-scale operations to large industrial
              facilities, we provide turnkey solutions that
              maximize efficiency, ensure food safety, and
              deliver exceptional value.
            </p>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle
                    className="text-[#FF9136] flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-gray-700">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <stat.icon className="w-12 h-12 text-[#0446F2] mx-auto mb-4" />
              <p className="text-xl text-gray-800">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;