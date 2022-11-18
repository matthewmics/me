import React from 'react'

import './certifications.scss';

import CERT1 from '../../assets/cert1.jpg'
import CERT2 from '../../assets/cert2.jpg'
import CERT3 from '../../assets/cert3.jpg'
import CERT4 from '../../assets/cert4.jpg'
import CERT5 from '../../assets/cert5.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

const Certifications = () => {
  return (
    <section>
      <h5>My Certifications</h5>
      <h2>Certifications</h2>
      <div className='certifications__container'>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Pagination, Navigation]}
          className="certifications__swiper"
        >
          <SwiperSlide>
            <div className='certifications__swiper-content'>
              <div>
                <div className='img-wrapper'>
                  <img src={CERT1} alt="" />
                </div>
                <h2>UiPath Certified Advanced RPA Developer</h2>
              </div>
              {/* <h3>Verification Code • ZMZFS0W22N41Q7CZ</h3>
              <h3><a target='_blank' href="https://www.certmetrics.com/uipath/public/verification.aspx">Verification Site</a></h3> */}
              {/* <br />  <br /> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='certifications__swiper-content'>
              <div>
                <div className='img-wrapper'>
                  <img src={CERT2} alt="" />
                </div>
                <h2>
                  Udemy - Complete guide to building an app with dot Net Core and React
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='certifications__swiper-content'>
              <div>
                <div className='img-wrapper'>
                  <img src={CERT3} alt="" />
                </div>
                <h2>
                  Udemy - Angular and Laravel: Practical guide with docker
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='certifications__swiper-content'>
              <div>
                <div className='img-wrapper'>
                  <img src={CERT4} alt="" />
                </div>
                <h2>
                  Best Thesis
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='certifications__swiper-content'>
              <div>
                <div className='img-wrapper'>
                  <img src={CERT5} alt="" />
                </div>
                <h2>
                  SWEEPx: GAME DEVELOPMENT USING UNITY3D
                </h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Certifications