import React from 'react'
import { Link } from 'react-router-dom'

const MoreImage = () => {
  return (
   <div className='mt-5 space-x-5'>
      <Link to={'/admin_layout/add-more-image'}> <button className="btn mb-4 md:mb-0">Add More Image</button></Link>
      <Link to={'/admin_layout/view-more-image'}><button className="btn">View More Image</button></Link>
    </div>
  )
}

export default MoreImage
