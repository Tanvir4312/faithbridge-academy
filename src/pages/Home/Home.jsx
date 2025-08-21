import React from 'react'
import Scroll from '../../components/Home/Scroll/Scroll'
import backgroundDesign from '../../assets/background-design.jpeg'
import ImageSwiper from '../../components/Home/Swiper/imageSwiper'
import WelcomeMessage from '../../components/Home/WelcomeMessage/WelcomeMessage'
import Prospectus from '../../components/Home/Prospectus/Prospectus'
import Courses from '../../components/Home/Courses/Courses'
import OtherActivities from '../../components/Home/OtherActivities/OtherActivities'
import Images from '../../components/Home/Images/Images'
import Information from '../../components/Home/Information/Information'


const Home = () => {
  return (
    <div>
      <Scroll></Scroll>

      <div className='relative'>
        {/* Background Layer */}
        <div style={{ backgroundImage: `url(${backgroundDesign})`, opacity: 0.3, }} className='absolute inset-0 z-0'>

        </div>
        {/* Content Layer */}
        <div className='relative z-10 max-w-6xl mx-auto pt-14'>

          {/* image and notice */}
          <div className='lg:flex gap-4'>
            {/* image */}
            <div className='lg:w-2/4 px-5 lg:px-0'>
              <ImageSwiper></ImageSwiper>
            </div>
            {/* notice */}
            <div className='lg:w-2/4 px-5 py-5 lg:px-0 lg:py-0'>
              Notice
            </div>
          </div>

          {/* Welcome message and prospector */}
          <div className='lg:flex gap-6 mt-20'>
            {/* Welcome message */}
            <div className='lg:w-4/6 px-5 lg:px-0'>
             <WelcomeMessage></WelcomeMessage>
            </div>
            {/* prospector */}
            <div className='lg:w-2/6 px-5 py-5 lg:px-0 lg:py-0'>
          <Prospectus></Prospectus>
            </div>
          </div>

          {/* Courses */}
          <div>
            <Courses></Courses>
          </div>

          {/* Other Activities */}
          <div>
            <OtherActivities></OtherActivities>
          </div>

          {/* Images */}
          <div>
            <Images></Images>
          </div>

          {/* Information */}
          <div>
            <Information></Information>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
