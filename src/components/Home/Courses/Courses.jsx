import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './coursesSwiper.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CoursesSlide from './CoursesSlide/CoursesSlide';


const Courses = () => {
    return (
        <div className='my-10 mx-5'>
           
                <h1 className='text-5xl heading font-bold text-center text-[#007B5E]'>Our Courses For Students</h1>

                <Swiper

                    slidesPerView={3}
                    centeredSlides={false}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                  
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
               
                     <SwiperSlide><CoursesSlide></CoursesSlide></SwiperSlide>
                  
                    <SwiperSlide><CoursesSlide></CoursesSlide></SwiperSlide>
                    <SwiperSlide><CoursesSlide></CoursesSlide></SwiperSlide>
                    <SwiperSlide><CoursesSlide></CoursesSlide></SwiperSlide>
                    <SwiperSlide><CoursesSlide></CoursesSlide></SwiperSlide>
                    <SwiperSlide><CoursesSlide></CoursesSlide></SwiperSlide>
                    <SwiperSlide><CoursesSlide></CoursesSlide></SwiperSlide>
                  
                </Swiper>


            </div>
           
     
    )
}

export default Courses
