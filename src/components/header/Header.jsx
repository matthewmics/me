import React from 'react'
import CTA from './CTA'
import './header.scss'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Matthew Miclat</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />

        <div className='header__container-wrapper'>
          <HeaderSocials />

          <div className="me">
            <div className='me__img-wrapper'>

              <img src={ME} alt="" />
            </div>
          </div>

          <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>

      </div>
    </header>
  )
}

export default Header