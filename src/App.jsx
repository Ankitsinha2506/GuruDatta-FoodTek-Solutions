import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from "./pages/Home";
import Footer from "./components/Footer";
import AboutPage from "./pages/About";
import ServiceHero from "./components/ServiceHero";
import VideosPage from "./pages/VideosPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FFFFF2]">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServiceHero />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
