import React from 'react'
import { Link } from 'react-router-dom'

const Notice = () => {
  return (
    <div className='mt-5 space-x-5'>
    <Link to={'/admin_layout/add-notice'}><button className="btn mb-4 md:mb-0">Add Notice</button></Link>
      <Link to={'/admin_layout/view-notice'}><button className="btn">View Notice</button></Link>
    </div>
  )
}

export default Notice
