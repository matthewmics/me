import React from 'react'
import './skills.scss'

import { BsPatchCheckFill } from 'react-icons/bs'

const Skills = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>NODE JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>NODE JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>NODE JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>NODE JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>NODE JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF BACKEND */}
      </div>
    </section>
  )
}

export default Skills