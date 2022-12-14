import React, { Fragment } from 'react'
import './skills.scss'

import { BsPatchCheckFill } from 'react-icons/bs'
import { useInViewEffect } from 'react-hook-inview'


const SkillItem = ({ title, skills }) => {

  return <>
    <div className="experience__frontend">
      <h3>{title}</h3>
      <div className="experience__content">
        {
          skills && skills.map((data, index) => {
            return <Fragment key={`fragment-experience__details-key-${index}`} >

              <article className='experience__details' key={`experience__details-key-${index}`}>
                <BsPatchCheckFill />
                <div>
                  <h4>{data.skill}</h4>
                  <small className='text-light'>{data.level}</small>
                </div>
              </article>
            </Fragment>
          })
        }
      </div>
    </div>
  </>

}

const Skills = ({ setActiveNav }) => {

  const ref = useInViewEffect(([entry]) => {
    if (entry.isIntersecting) {
      setActiveNav("#skills");
    }
  }, {threshold: 0.3})

  return (
    <section id="skills" ref={ref}>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        <SkillItem
          title='Backend Development'
          skills={
            [
              {
                skill: '.Net',
                level: 'Experienced'
              },
              {
                skill: 'Laravel',
                level: 'Experienced'
              },
              {
                skill: 'Slim PHP',
                level: 'Experienced'
              },
              {
                skill: 'NodeJS',
                level: 'Experienced'
              },
              {
                skill: 'Springboot',
                level: 'Basic'
              },
              {
                skill: 'SQL / ORMs',
                level: 'Experienced'
              },
            ]
          }
        />


        <SkillItem
          title='Frontend Development'
          skills={
            [
              {
                skill: 'React',
                level: 'Experienced'
              },
              {
                skill: 'Angular',
                level: 'Experienced'
              },
              {
                skill: 'VueJS',
                level: 'Basic'
              },
              {
                skill: 'Semantic-UI',
                level: 'Experienced'
              },
              {
                skill: 'Bootstrap',
                level: 'Experienced'
              },
            ]
          }
        />
        <SkillItem
          title='Automation'
          skills={[
            {
              skill: 'UiPath',
              level: 'Experienced'
            },
            {
              skill: 'Selenium Webdriver',
              level: 'Experienced'
            }
          ]}
        />
        <SkillItem
          title='Mobile Development'
          skills={[
            {
              skill: 'Xamarin Forms',
              level: 'Basic'
            },
            {
              skill: 'React Native',
              level: 'Basic'
            }
          ]}
        />
      </div>
    </section>
  )
}

export default Skills