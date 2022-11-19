import React, { useState } from 'react'
import './portfolio.scss'
import IMG1 from '../../assets/portfolio/betting/thumbnail.png'
import IMG2 from '../../assets/portfolio/inventory/thumbnail.png'
import IMG3 from '../../assets/portfolio/facerecog/thumbnail.png'
import IMG4 from '../../assets/portfolio/spikeroll/thumbnail.png'
import PortfolioItem from './PortfolioItem'
import { useEffect } from 'react'
import { useRef } from 'react'
import { Navigation, Pagination } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'

const Portfolio = () => {

  const screenshotsModalRef = useRef(null);

  useEffect(() => {
    screenshotsModalRef.current.classList.add("hidden");
  }, []);

  const openScreenshotsModal = () => {
    document.body.classList.add('overflow-hidden');
    screenshotsModalRef.current.classList.remove("hidden");
  }

  const closeScreenshotsModal = () => {
    document.body.classList.remove('overflow-hidden');
    screenshotsModalRef.current.classList.add("hidden");
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
        <div className='wrapper'>
          <div className="screenshots">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className='portfolio__modal-swiper'
            >
              <SwiperSlide>
                <div className='swiper-content'>
                  test
                  <img src="/betting/1.PNG"  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-content'>
                  test
                  <img src="/betting/2.PNG"  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <a className='btn btn-secondary btn-close' onClick={closeScreenshotsModal}>CLOSE</a>
        </div>
      </div>

    </section>
  )
}

export default Portfolio