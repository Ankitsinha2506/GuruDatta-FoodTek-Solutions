import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { Card } from "./ui/Card";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: [ "9529672992", "9049043434"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["gurudattafoodteksolutions25@gmail.com"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: [
        "S No 184, Bhosari Alandi Road, Banacha Odha,",
        "Near Govind Garden, Bhosari, Pune-411039,",
        "Maharashtra, India",
      ],
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-[#FFFFF2] to-white"
    >
      <div className="container mx-auto px-2 sm:px-4"> 
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* 🔥 CHANGED mobile font size */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#0446F2] mb-4">
            Contact Us
          </h2>

          <div className="w-20 sm:w-24 h-1 bg-[#FF9136] mx-auto mb-6"></div>

          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Get in touch with our team to discuss your food processing needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* 🔥 CHANGED: added w-full for better responsiveness */}
            <Card className="p-6 sm:p-8 shadow-xl w-full">
              <h3 className="text-xl sm:text-2xl text-[#0446F2] mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name *"
                  value={formData.name}
                  required
                  className="border-gray-300 focus:border-[#0446F2] w-full"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />

                <Input
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  required
                  className="border-gray-300 focus:border-[#0446F2] w-full"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  className="border-gray-300 focus:border-[#0446F2] w-full"
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />

                <Input
                  placeholder="Company Name"
                  value={formData.company}
                  className="border-gray-300 focus:border-[#0446F2] w-full"
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                />

                <Textarea
                  placeholder="Your Message *"
                  value={formData.message}
                  required
                  rows={5}
                  className="border-gray-300 focus:border-[#0446F2] w-full"
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full bg-[#0446F2] hover:bg-[#0446F2]/90 text-white"
                    size="lg"
                  >
                    Send Message <Send className="ml-2" size={18} />
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl sm:text-2xl text-[#0446F2] mb-4 sm:mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                Our team of experts is ready to help you find the perfect food
                processing solution for your business.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-5 sm:p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-3 sm:gap-4">
                    {/* 🔥 CHANGED: mobile icon size fix */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0446F2]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-[#0446F2]" size={22} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-lg text-[#0446F2] mb-2">
                        {info.title}
                      </h4>

                      {info.details.map((detail) => (
                        <p key={detail} className="text-gray-600 text-sm sm:text-base break-words">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
