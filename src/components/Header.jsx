import React from "react";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/gurudatta.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Videos", href: "/videos" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-white"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-full px-4 py-2">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.div
              className="flex items-center gap-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={logo}
                alt="Gurudatta Foodtek Solutions"
                className="w-12 h-12 object-contain"
              />

              <div>
                <h1 className="text-[#0446F2]">Gurudatta Foodtek Solutions</h1>
                <p className="text-xs text-gray-600">Processing Solutions</p>
              </div>
            </motion.div>

          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => window.scrollTo(0, 0)}
              >
                <motion.span
                  className={`text-gray-700 hover:text-[#0446F2] transition-colors cursor-pointer relative group ${location.pathname === item.href
                    ? "text-[#0446F2]"
                    : ""
                    }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#FF9136] transition-all duration-300 ${location.pathname === item.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                      }`}
                  ></span>
                </motion.span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#0446F2]"
            onClick={() =>
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            className="md:hidden mt-4 pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className={`block py-2 text-gray-700 hover:text-[#0446F2] transition-colors ${location.pathname === item.href
                  ? "text-[#0446F2]"
                  : ""
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}