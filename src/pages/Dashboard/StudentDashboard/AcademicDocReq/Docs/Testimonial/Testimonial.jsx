import React from 'react'
import { Link } from 'react-router-dom'

const Testimonial = () => {
    return (
        <div>
            <div className='md:flex gap-6 mt-7 text-center'>
                <Link to={'/dashboard/apply-payment?text=testimonial'}><button className="btn">Create New Payment</button></Link>
                <Link to={'/dashboard/apply-testimonial'}><button className="btn my-4 md:my-0">Apply Testimonial</button></Link>
                <Link to={'/dashboard/all-testimonial-application'}><button className="btn">All Application</button></Link>
            </div>
        </div>
    )
}

export default Testimonial
