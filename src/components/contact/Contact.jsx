import React from 'react'
import { useInViewEffect } from 'react-hook-inview';
import './contact.scss'

const Contact = ({ setActiveNav }) => {

  const ref = useInViewEffect(([entry]) => {
    if (entry.isIntersecting) {
      setActiveNav("#contact");
    }
  }, { threshold: 0.5 })

  return (
    <section id="contact" ref={ref}>
      <h5>Say Hello</h5>
      <h2>Contact Me</h2>

      <div className="container container__contact">
        <form className="contact__form">
          <input type="text" placeholder='Full Name' />
          <input type="email" placeholder='Email' />
          <textarea rows="10" placeholder='Message'></textarea>
          <a className='btn btn-secondary fluid'>Send</a>
        </form>
      </div>

    </section>
  )
}

export default Contact