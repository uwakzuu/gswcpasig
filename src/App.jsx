import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Nav from './components/nav';
import Footer from './components/footer';
import BackToTopButton from './components/topButton';

// Importing CSS
import './App.css';

// Screens
import LandingPage from "./Screens/LandingPage";
import Contact from './Screens/ContactUs';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <BackToTopButton />
    </Router>
  );
}

export default App;