import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Components
import Nav from './components/nav';
import Footer from './components/footer';
import BackToTopButton from './components/topButton';
import Preloader from './components/preLoader';
import ChatBox from './components/chatBox';

// Importing CSS
import './App.css';

// Screens
import LandingPage from "./Screens/LandingPage";
import Contact from './Screens/ContactUs';
import Events from './Screens/Events';
import Branches from './Screens/Branches';

// ScrollToTop Component Inline
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

// Main Content
function AppContent() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // Simulate loading time when route changes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); 

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    // Change document title based on pathname
    switch (pathname) {
      case '/branches':
        document.title = 'Branches - GSWC Pasig';
        break;
      case '/events':
        document.title = 'Events - GSWC Pasig';
        break;
      case '/contact':
        document.title = 'Contact Us - GSWC Pasig';
        break;
      default:
        document.title = 'GSWC Pasig'; 
    }
  }, [pathname]);

  return loading ? (
    <Preloader />
  ) : (
    <>
      <ScrollToTop />
      <main className="min-h-screen">
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <ChatBox />
        <BackToTopButton />
      </main>
    </>
  );
}

// App Component
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;