import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Skills from './components/experience/Skills'
import About from './components/about/About'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App