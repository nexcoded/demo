import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import Gap from './components/Gap'
import Footer from './components/Footer'
import Pricing from './components/Pricing';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        {/* <Home />
        <Gap /> */}
        <About />
        <Blog />
        {/* <Gap /> */}
        <Pricing />
        <Contact />
        <Gap />
        <Footer />
      </main>
    </div>
  );
}

export default App;
