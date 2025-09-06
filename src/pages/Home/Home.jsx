
import Scroll from '../../components/Home/Scroll/Scroll'
import backgroundDesign from '../../assets/background-design.jpeg'
import ImageSwiper from '../../components/Home/Swiper/imageSwiper'
import WelcomeMessage from '../../components/Home/WelcomeMessage/WelcomeMessage'
import Prospectus from '../../components/Home/Prospectus/Prospectus'
import Courses from '../../components/Home/Courses/Courses'
import OtherActivities from '../../components/Home/OtherActivities/OtherActivities'
import Images from '../../components/Home/Images/Images'
import Information from '../../components/Home/Information/Information'
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import useNotice from '../../hooks/useNotice'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import useFetchImage from '../../hooks/useFetchImage'
import useCourses from '../../hooks/useCourses'
import useActivities from '../../hooks/useActivities'
import useMoreImage from '../../hooks/useMoreImage'
import useContactNumber from './../../hooks/useContactNumber';



const Home = () => {
  const [notices] = useNotice()
  const containerRef = useRef()
  const [scrollHeight, setScrollHeight] = useState(0)
  const [images] = useFetchImage()
  const [courses] = useCourses()
  const [activities] = useActivities()
  const [moreImage] = useMoreImage()
  const [numbers] = useContactNumber()

  useEffect(() => {
    if (containerRef.current) {

      const noticeHeight = containerRef.current.firstChild?.offsetHeight || 0;

      const totalNotices = notices.length + 2;
      const visibleCount = 4;

      const distance = (totalNotices * noticeHeight) - (visibleCount * noticeHeight);
      setScrollHeight(distance)
    }
  }, [notices.length])



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
              <ImageSwiper
                images={images}
              ></ImageSwiper>
            </div>
            {/* notice */}

            <div>
              <p className='text-3xl font-bold text-[#007B5E] pl-4'>Notice Board</p>
              <div className="h-80 relative overflow-hidden my-5" ref={containerRef}>

                {notices.map((notice) => (
                  <motion.div
                    className='m-5'
                    key={notice?._id}
                    animate={{ y: [0, -scrollHeight, 0] }}
                    transition={{
                      duration: 20, repeat: Infinity,
                      times: [0, 0.9, 1],
                      ease: ["linear", "easeIn"]
                    }}
                  >
                    <div className=' h-12 border-b md:px-0 px-2 flex items-center'>
                      <p className='mr-3 bg-[#007B5E] px-2 py-2 rounded text-white mb-3'>{new Date(notice?.date).toLocaleDateString()}</p>
                      <p>
                        <span className='block'>{notice.notice_title}</span>
                        <Link to={`/notice-details/${notice?._id}`}> <span className='pb-2 font-medium text-[#007B5E] cursor-pointer'>View Notice</span></Link>
                      </p>
                    </div>


                  </motion.div>
                ))}
              </div>
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
            <Courses
              courses={courses}
            ></Courses>
          </div>

          {/* Other Activities */}
          <div>
            <OtherActivities
              activities={activities}
            ></OtherActivities>
          </div>

          {/*More Images */}
          <div>
            <Images
              moreImage={moreImage}
            ></Images>
          </div>

          {/* Information */}
          <div>
            <Information
            numbers={numbers}
            ></Information>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
