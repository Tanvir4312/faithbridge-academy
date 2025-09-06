import React from 'react'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './coursesSwiper.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import ImagesSwiper from './ImagesSwiper/ImagesSwiper';


const Images = ({ moreImage }) => {
    return (
        <div className='mt-20'>


            <Swiper

                slidesPerView={3}
                centeredSlides={false}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}


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

                {moreImage.map(image => <SwiperSlide>
                    <ImagesSwiper
                        key={image?._id}
                        image={image}></ImagesSwiper>
                </SwiperSlide>)
                }





            </Swiper>


        </div>
    )
}

export default Images
