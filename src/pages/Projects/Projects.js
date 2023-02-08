import React from 'react';
import { data } from './data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import "swiper/css/pagination";
import 'swiper/css';
import './projects.css'


const Projects = () => {
  return (
    <section className='project relative lg:py-10'>
      <div className="pr-shape"></div>

      <div className="lg:max-w-screen-lg xl:max-w-screen-xl w-full mx-auto p-4 z-50 relative">
        <div class="block-text text-center">
          <h6 class="sub-heading"><span>Marketplace</span></h6>
          <h3 class="heading lg:text-4xl text-2xl text-base-100 font-bold leading-normal">OUR COLLECTION</h3>
        </div>

        <div className='mt-8'>

          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="projectSlider"
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
            {
              data.map(item => (
                <SwiperSlide>
                  <div className="project-box">
                    <div className="image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="content">
                      <a className='title text-xl text-base-100' href="/nft">{item.name}</a>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }

          </Swiper>



        </div>
      </div>

    </section>
  );
};

export default Projects;