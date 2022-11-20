import React from 'react'
import './about.scss'
import ME from '../../assets/me-about.jpg'
import { IoSchoolOutline } from 'react-icons/io5'
import { BsBriefcase } from 'react-icons/bs'
import { useInView, useInViewEffect } from 'react-hook-inview'

const About = ({setActiveNav}) => {

  const ref = useInViewEffect(([entry]) => {
    if (entry.isIntersecting) {
      setActiveNav("#about");
    }
  })


  return (
    <section id='about' ref={ref}>
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
              <small className='about__card-education-full-text'>Bachelor of Science in Computer Science</small>
              <small className='about__card-education-trimmed'>BS in Computer Science</small>
            </article>
          </div>

          <p>
            Hi, I'm Matthew Miclat. I love computer programming. I started my career back in 2018 as a Java Programmer
            and years later was able to learn different programming languages such as C# and PHP. As a fullstack developer,
            I am also comfortable in using the popular javascript frameworks like React and Angular. I am always eager to learn
            new things, recently I was able to learn RPA.
          </p>

          <p>
            These days my time is spent learning new things to elevate my skills. Currently studying docker and the proper way of
            microservices implementation.
          </p>

          <p>
            Out of the office you'll find me dreaming of basketball. I love watching NBA games and my favorite team is the Atlanta Hawks.
          </p>

          <a href="#contact" className='btn btn-primary'>Contact Me</a>

        </div>
      </div>
    </section>
  )
}

export default About