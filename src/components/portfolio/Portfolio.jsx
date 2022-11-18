import React, { useState } from 'react'
import './portfolio.scss'
import IMG1 from '../../assets/portfolio/betting/thumbnail.png'
import IMG2 from '../../assets/portfolio/inventory/thumbnail.png'
import IMG3 from '../../assets/portfolio/facerecog/thumbnail.png'
import IMG4 from '../../assets/portfolio/spikeroll/thumbnail.png'
import PortfolioItem from './PortfolioItem'
import { useEffect } from 'react'
import { useRef } from 'react'

const Portfolio = () => {

  const screenshotsModalRef = useRef(null);

  useEffect(() => {

    screenshotsModalRef.current.classList.add("hidden");

  }, []);

  const openScreenshotsModal = () => {
    console.log("opening modal");
    document.body.classList.add('overflow-hidden');
    screenshotsModalRef.current.classList.remove("hidden");
  }

  return (
    <section id="portfolio">
      <h5>My Sample Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <PortfolioItem thumbnail={IMG1}
          title="Sports/ESports Betting Application"
          tags={['C#', 'React', 'Typescript', 'Semantic-UI', 'Entity Framework']}
          onScreenshotsClicked={openScreenshotsModal}
        />
        <PortfolioItem thumbnail={IMG2}
          title="School Inventory System"
          tags={['PHP', 'Laravel', 'ReactJS', 'Semantic-UI']}
        />
        <PortfolioItem thumbnail={IMG3}
          title="Face Recognition Attendance System"
          tags={['PHP', 'Laravel', 'Python', 'ReactJS', 'Semantic-UI']}
        />
        <PortfolioItem thumbnail={IMG4}
          title="SpikeRoll"
          tags={['C#', 'Unity3D', 'LLAPI']}
        />
      </div>

      <div ref={screenshotsModalRef} id="portfolio__modal-screenshots">

      </div>

    </section>
  )
}

export default Portfolio