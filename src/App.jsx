import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from "./pages/Home";
import Footer from "./components/Footer";
// import { Footer } from './components/Footer';
// import { HomePage } from './pages/HomePage';
// import { AboutPage } from './pages/AboutPage';
// import { ServicesPage } from './pages/ServicesPage';
// import { VideosPage } from './pages/VideosPage';
// import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FFFFF2]">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
