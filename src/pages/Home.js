import React from 'react'
import Blog from '../components/Blog';
import About from '../components/About';
import Contact from '../components/Contact';
import Gap from '../components/Gap'
import Footer from '../components/Footer'
import Pricing from '../components/Pricing';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <div>
     {/* <Navbar /> */}
      <main>
        <About />
        <Blog />
        <Pricing />
        <Contact />
        <Gap />
        <Footer />
      </main>
    </div>
  )
}

export default Home
