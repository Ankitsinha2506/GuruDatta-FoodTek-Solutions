// ⭐ CHANGED: Added Link import
import { Link } from "react-router-dom";

import React from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/orange.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  // ⭐ CHANGED: Route mapping for footer menu
  const linkRoutes = {
    Home: "/",
    "About Us": "/about",
    Services: "/services",
    Videos: "/videos",
    Contact: "/contact",

    // Optional scroll routes for service categories
    "Tomato Processing": "/services#tomato",
    "Canning Solutions": "/services#canning",
    "Frozen Food Lines": "/services#frozen",
    "Pet Food Equipment": "/services#petfood",
    "Custom Solutions": "/services#custom",
  };

  const footerLinks = {
    "Quick Links": ["Home", "About Us", "Services", "Videos", "Contact"],
    Services: [
      "Tomato Processing",
      "Canning Solutions",
      "Frozen Food Lines",
      "Pet Food Equipment",
      "Custom Solutions",
    ],
  };

  return (
    <footer className="bg-[#0446F2] text-[#FFFFF2] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Gurudatta Foodtek Solutions"
                className="w-12 h-12 object-contain bg-white rounded-lg p-1"
              />
              <div>
                <h3 className="text-xl">Gurudatta Foodtek Solutions</h3>
                <p className="text-sm text-[#FFFFF2]/80">
                  Processing Solutions
                </p>
              </div>
            </div>

            <p className="text-[#FFFFF2]/80 text-sm sm:text-base mb-4">
              Leading manufacturer of high-quality food processing equipment with
              over 25 years of industry experience.
            </p>

            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <div className="flex flex-col">
                  <span>9049043434</span>
                  <span>95296 72992</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>gurudattafoodteksolutions25@gmail.com</span>
              </div>

              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>
                  S No 184, Bhosari Alandi Road, Banacha Odha, Near Govind
                  Garden, Bhosari, Pune-411039, Maharashtra, India
                </span>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="text-lg mb-4 text-[#FF9136]">{title}</h4>

              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    {/* ⭐ CHANGED: Replaced <a> with <Link> */}
                    <Link
                      to={linkRoutes[link] || "/"}
                      className="text-[#FFFFF2]/80 hover:text-[#FF9136] transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Copyright */}
        <motion.div
          className="flex items-center justify-center pt-8 border-t border-[#FFFFF2]/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-[#FFFFF2]/80 text-sm text-center">
            © {currentYear} Gurudatta Foodtek Solutions. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
