import React from 'react'
import { Link } from 'react-router-dom'

const AcademicDocs = () => {
  return (
    <div className='md:flex gap-4 mt-5 w-full'>
      <Link to={'/admin_layout/all-transcript-admin'}><button className="btn w-[95%] md:w-[100%]">All Transcript</button></Link>
      <Link to={'/admin_layout/all-testimonial-admin'}><button className="btn w-[95%] md:w-[100%] my-4 md:my-0">All Testimonial</button></Link>
      <Link to={'/admin_layout/all-certificate-admin'}><button className="btn w-[95%] md:w-[100%]">All Certificate</button></Link>

    </div>
  )
}

export default AcademicDocs
