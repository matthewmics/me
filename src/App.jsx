import React, { useState } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Skills from './components/skills/Skills'
import About from './components/about/About'
import Experiences from './components/experiences/Experiences'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Certifications from './components/certifications/Certifications'

import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css';

const App = () => {

  const [activeNav, setActiveNav] = useState('#');
  return (
    <>
      <Header setActiveNav={setActiveNav} />
      <Nav activeNav={activeNav} />
      <About setActiveNav={setActiveNav} />
      <Skills setActiveNav={setActiveNav} />
      <Experiences setActiveNav={setActiveNav} />
      <Portfolio setActiveNav={setActiveNav} />
      <Certifications setActiveNav={setActiveNav} />
      <Contact setActiveNav={setActiveNav} />
      <Footer />
    </>
  )
}

export default App