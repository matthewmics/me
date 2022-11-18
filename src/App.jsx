import React from 'react'
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
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Experiences />
      <Portfolio />
      <Certifications />
      <Contact />
      <Footer />
    </>
  )
}

export default App