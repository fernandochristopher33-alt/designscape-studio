import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import LoadingScreen from './components/LoadingScreen';
import { LoadingProvider } from './context/LoadingContext';

// Scroll restoration component
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const AppRoutes = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <LoadingScreen />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <LoadingProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <AppRoutes />
        </div>
      </LoadingProvider>
    </Router>
  );
}

export default App;