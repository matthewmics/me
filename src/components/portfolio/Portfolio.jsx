import React, { Fragment, useState } from 'react'
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

const spikeRollScreenshotData = { path: '/spikeroll', total: 19 }
const inventoryScreenshotData = { path: '/inventory', total: 15 }
const bettingScreenshotData = { path: '/betting', total: 27 }
const facerecogScreenshotData = { path: '/facerecog', total: 10 }

const Portfolio = () => {

  const screenshotsModalRef = useRef(null);

  const [screenshotData, setScreenshotData] = useState([{
    path: '', total: 0
  }]);

  useEffect(() => {
    screenshotsModalRef.current.classList.add("hidden");
  }, []);

  const openScreenshotsModal = (screenshotData) => {

    setScreenshotData({ ...screenshotData });

    document.body.classList.add('overflow-hidden');
    screenshotsModalRef.current.classList.remove("hidden");
  }

  const closeScreenshotsModal = () => {

    setScreenshotData({ path: '', total: 0 });

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
          tags={['C#', 'React', 'Typescript', 'Semantic-UI', 'SignalR', 'Entity Framework']}
          githubLink='https://github.com/matthewmics/sports-esports-betting-system'
          onScreenshotsClicked={() => { openScreenshotsModal(bettingScreenshotData) }}
        />
        <PortfolioItem thumbnail={IMG2}
          title="School Inventory System"
          tags={['PHP', 'Laravel', 'ReactJS', 'Semantic-UI']}
          githubLink='https://github.com/matthewmics/spcf-inventory-system-api'
          onScreenshotsClicked={() => { openScreenshotsModal(inventoryScreenshotData) }}
        />
        <PortfolioItem thumbnail={IMG3}
          title="Face Recognition Attendance System"
          tags={['PHP', 'Laravel', 'Python', 'ReactJS', 'Semantic-UI']}
          githubLink='https://github.com/matthewmics/attendance-management-face-recognition'
          onScreenshotsClicked={() => { openScreenshotsModal(facerecogScreenshotData) }}
        />
        <PortfolioItem thumbnail={IMG4}
          title="SpikeRoll"
          tags={['C#', 'Unity3D', 'LLAPI']}
          githubLink='https://github.com/matthewmics/spikeroll'
          onScreenshotsClicked={() => { openScreenshotsModal(spikeRollScreenshotData) }}
        />
      </div>

      <div ref={screenshotsModalRef} id="portfolio__modal-screenshots">
        <div className="portfolio__modal-content">
          <div className='portfolio__modal-swiper-wrapper'>
            {screenshotData.total > 0 && <>
              {
                <Swiper

                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={false}
                  modules={[Pagination, Navigation]}
                  className="portfolio__modal-swiper"
                >

                  {[...Array(screenshotData.total).keys()].map(v => {
                    return <Fragment key={'screenshot-' + (v + 1)}>
                      <SwiperSlide key={'slider-' + (v + 1)}>
                        <div className='portfolio__modal-swiper-content'>
                          <div className='portfolio__modal-img-wrapper'>
                            <img src={`${screenshotData.path}/${v + 1}.PNG`} alt="" />
                          </div>
                        </div>
                      </SwiperSlide>
                    </Fragment>
                  })}

                </Swiper>

              }
            </>}
          </div>
          <a className='btn btn-secondary portfolio__modal-btn-close btn-sm' onClick={closeScreenshotsModal}>CLOSE</a>
        </div>
      </div>

    </section>
  )
}

export default Portfolio