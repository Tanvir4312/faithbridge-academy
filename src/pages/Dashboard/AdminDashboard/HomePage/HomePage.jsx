import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='mt-5 space-x-5'>
      <Link to={'/dashboard/notice'}><button className="btn">Notice</button></Link>
      <Link to={'/dashboard/home-page-image'}><button className="btn">Home_Page Image</button></Link>
      <Link to={'/dashboard/courses-for-student'}><button className="btn">Courses For Student</button></Link>
      <Link to={'/dashboard/activities'}><button className="btn">Other Activities</button></Link>
      <Link to={'/dashboard/more-image'}><button className="btn">More Image</button></Link>
      <div className='mt-4'>
        <Link to={'/dashboard/contact-number'}><button className="btn">Contact Number</button></Link>
      </div>
   
    </div>
  )
}

export default HomePage
