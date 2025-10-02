import React from 'react'
import { Link } from 'react-router-dom'

const AnnouncementAdmin = () => {
  return (
    <div className='md:flex gap-5 my-5'>
      <Link to={'/dashboard/announcement-teachers'}><button className="btn mb-5 md:mb-0">Announcement For Teachers</button></Link>
      <Link to={'/dashboard/announcement-students'}><button className="btn">Announcement For Students</button></Link>
    </div>
  )
}

export default AnnouncementAdmin
