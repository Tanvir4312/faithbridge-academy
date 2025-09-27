import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='mt-5 space-x-5 flex flex-col gap-5 md:flex-row flex-wrap'>
      <Link to={'/dashboard/notice'}><button className="btn w-full">Notice</button></Link>
      <Link to={'/dashboard/home-page-image'}><button className="btn w-full">Home_Page Image</button></Link>
      <Link to={'/dashboard/courses-for-student'}><button className="btn w-full">Courses For Student</button></Link>
      <Link to={'/dashboard/activities'}><button className="btn w-full">Other Activities</button></Link>
      <Link to={'/dashboard/more-image'}><button className="btn w-full">More Image</button></Link>
      
        <Link to={'/dashboard/contact-number'}><button className="btn w-full">Contact Number</button></Link>
     
   
    </div>
  )
}

export default HomePage
