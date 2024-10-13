import React from 'react'
import './HomeStyle.css'
// import Video from '../components/Video'
import laptopVideo from '../assets/LapTop.mp4'

const Home = () => (
  <section id="home" className="home-section">
        <video autoPlay muted className="background-video">
            <source src={laptopVideo} type='video/mp4' />
        </video>

        <div className="overlay">
          <h1>معین اینارو تو باید بگی </h1>
          <p>Discover more about us.</p>
          <button onClick={() => scrollToSection('about')}>About Us</button>
          <button onClick={() => scrollToSection('contact')}>Contact Us</button>
      </div>
  </section>
  );
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


export default Home