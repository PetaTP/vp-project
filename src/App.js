import React, { useEffect } from 'react';
import './styles.css';

import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Header />
      <Home />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
