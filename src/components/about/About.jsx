import React from 'react'
import './about.scss'
import ME from '../../assets/me-about.jpg'
import { IoSchoolOutline } from 'react-icons/io5'
import { BsBriefcase } from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsBriefcase className='about__icon'></BsBriefcase>
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>
            <article className='about__card'>
              <IoSchoolOutline className='about__icon'></IoSchoolOutline>
              <h5>Education</h5>
              <small>Bachelor of Science in Computer Science</small>
            </article>
          </div>

          <p>
            There are many variations of passages of Lorem
            Ipsum available, but the majority have suffered alteration in some form, by injected humour,
            r randomised words which don't look even slightly believable. If you are going to use a passage of
            orem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
          </p>

          <a href="#contact" className='btn btn-primary'>Contact Me</a>

        </div>
      </div>
    </section>
  )
}

export default About