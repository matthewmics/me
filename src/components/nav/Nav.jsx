import React from 'react'
import './nav.scss'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { BiMessageSquareDetail, BiLibrary } from 'react-icons/bi'
import { BsBriefcase } from 'react-icons/bs'
import { useState } from 'react'
import { TbCertificate } from 'react-icons/tb'

const Nav = ({ activeNav }) => {


  return (
    <nav>
      <a href="#"
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>

      <a
        href="#about"
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>

      <a href="#skills"
        className={activeNav === '#skills' ? 'active' : ''}
      >
        <BiBook />
      </a>

      <a href="#experience"
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BsBriefcase />
      </a>

      <a href="#portfolio"
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <BiLibrary />
      </a>

      <a href="#certifications"
        className={activeNav === '#certifications' ? 'active' : ''}
      >
        <TbCertificate />
      </a>

      <a href="#contact"
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>

    </nav>
  )
}

export default Nav