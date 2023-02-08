import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import member1 from '../../assets/Images/member1.png';
import member2 from '../../assets/Images/member2.png';
import member3 from '../../assets/Images/member3.png';
import member4 from '../../assets/Images/member4.png';
import member5 from '../../assets/Images/member5.png';
import './team.css';
import TeamBox from './TeamBox';
import Brand from '../Brand/Brand';
import { Fade } from 'react-reveal';
import { Autoplay } from 'swiper';

const Team = () => {
  return (
    <section className='team'>
      <div className='lg:max-w-screen-lg xl:max-w-screen-xl w-full mx-auto p-4'>
        <div class="block-text text-center">
          <h6 class="sub-heading"><span>Team Members</span></h6>
          <h3 class="heading lg:text-4xl text-2xl text-base-100 font-bold leading-normal">Our Amazing Team Members</h3>
        </div>


        <div className="mt-8">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="teamSlider"
            modules={[Autoplay]}
            breakpoints={{
              1100: {
                slidesPerView: 4
              },
              850: {
                slidesPerView: 3
              },
              650: {
                slidesPerView: 2
              },
              200: {
                slidesPerView: 1
              }
            }}
          >

            <SwiperSlide>
              <TeamBox
                photo={member1}
                name="Rasel Ahmmed"
                position="Frontend Developer"
              />
            </SwiperSlide>

            <SwiperSlide>
              <TeamBox
                photo={member2}
                name="Rasel Ahmmed"
                position="Frontend Developer"
              />
            </SwiperSlide>

            <SwiperSlide>
              <TeamBox
                photo={member3}
                name="Rasel Ahmmed"
                position="Frontend Developer"
              />
            </SwiperSlide>

            <SwiperSlide>
              <TeamBox
                photo={member4}
                name="Rasel Ahmmed"
                position="Frontend Developer"
              />
            </SwiperSlide>

            <SwiperSlide>
              <TeamBox
                photo={member5}
                name="Rasel Ahmmed"
                position="Frontend Developer"
              />
            </SwiperSlide>
          </Swiper>
          <Fade duration="3000">
            <Brand></Brand>
          </Fade>
        </div>

      </div>

    </section>
  );
};

export default Team;