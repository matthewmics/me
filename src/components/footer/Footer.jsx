import React from 'react'
import './footer.scss'
import { AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MATTHEW MICLAT</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/matthewmics"><AiFillGithub /></a>
      </div>
    </footer>
  )
}

export default Footer