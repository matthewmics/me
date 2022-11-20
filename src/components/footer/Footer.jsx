import React from 'react'
import './footer.scss'
import { AiFillGithub } from 'react-icons/ai'
import { FaKeyboard } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MATTHEW MICLAT</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#certifications">Certifications</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/matthewmics" target={"_blank"}><AiFillGithub /></a>
        <a href="https://data.typeracer.com/misc/badge?user=micsmatthew77" target="_blank"><FaKeyboard /></a>
      </div>
    </footer>
  )
}

export default Footer