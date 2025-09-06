import React from 'react'
import { Link } from 'react-router-dom'


const AcademicDocReq = () => {


    return (
        <div>
            
            <div className='md:flex gap-6 mt-7 text-center'>
                <Link to={'/dashboard/transcript'}><button className="btn">Transcript</button></Link>
                <Link to={'/dashboard/testimonial'}><button className="btn my-4 md:my-0">Testimonial</button></Link>
                <Link to={'/dashboard/certificate'}><button className="btn">Certificate</button></Link>
            </div>
        </div>
    )
}

export default AcademicDocReq
