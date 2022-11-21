import React, { Fragment } from 'react'
import './experiences.scss'
import { BiCheck } from 'react-icons/bi'
import { useInViewEffect } from 'react-hook-inview'

const ServiceItem = ({ title, tags, descriptions }) => {

  return <>
    <article className="service">
      <div className="services__head">
        <h3>
          {title}
        </h3>
        <ul style={{ justifyContent: 'center' }}>
          {tags?.map((tag, index) => {
            return <Fragment key={`services-list-key-${index}`}>
              <li>{tag}</li>

            </Fragment>

          })}
        </ul>
      </div>

      <ul className='service__list'>
        {
          descriptions && <>
            {descriptions.map((description, index) => {
              return <Fragment key={'service-list-description-' + index}>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>{description}</p>
                </li>
              </Fragment>

            })}
          </>
        }

      </ul>
    </article>
  </>

}

const Services = ({ setActiveNav }) => {

  const ref = useInViewEffect(([entry]) => {
    if (entry.isIntersecting) {
      console.log("test experience")
      setActiveNav("#experience");
    }
  }, { threshold: 0.25 })

  return (
    <section id="experience" ref={ref}>

      <h5>My Work Experience</h5>
      <h2>Experience</h2>
      <div className="container services__container">

        <ServiceItem

          title='Senior Software Engineer'
          tags={['Cloudstaff', 'June 2022 - Present']}
          descriptions={
            [
              'Develop and maintain an existing web application using Angular, SLIM PHP, Laravel and React',
              'Implement new features and modifications to existing web applications',
              'Help in reviewing codes to ensure the readability and maintainabiliy of applications',
              'Deploy and troubleshoot applications on stage and live servers'
            ]
          }
        />
        <ServiceItem title='Applications Developer'
          tags={['Connext', 'June 2021 - June 2022']}
          descriptions={[
            'Develop and maintain an existing web application using Angular and SLIM PHP',
            'Deploy existing Wordpress applications and static websites to a shared hosting using CPANEL',
            'Develop a mobile friendly static website for a client in Hawaii',
            'Create Robotic Process Automations for a client in Hawaii'
          ]}
        />
        <ServiceItem title='Java Programmer'
          tags={['Titus Global-Tech', 'February 2021 - May 2021']}
          descriptions={[
            'Develop and maintain an existing web application using Angular, Groovy, Java and their In-House framework',
            'Maintain database and wrote Postgresql Stored procedures',
            'Help in troubleshooting and debugging existing applications and also implemented solutions to make codes run more efficiently'
          ]}
        />
        <ServiceItem title='Mobile Developer'
          tags={['Tigernethost', 'May 2019 - October 2020']}
          descriptions={[
            'Create a Cross platform (IOS and Android) mobile application for their Learning Management System using Xamarin Forms and C#',
            'Integrate third party services such as Paypal and Big Blue Button',
            'Develop and maintain existing web application using Laravel and VueJS'
          ]}
        />
        <ServiceItem title='Jr. Java Programmer'
          tags={['ZGetCare', 'May 2018 - May 2019']}
          descriptions={[
            'Develop and maintain and existing web application using PHP, Java and SEAM Framework',
            'Create web test automations using Selenium Webdriver',
            'Help in debugging and testing codes. Have also performed regression and stress test on server using JMeter',
            'Maintain database and wrote stored procedures in Postgresql'
          ]}
        />

      </div>
    </section>
  )
}

export default Services