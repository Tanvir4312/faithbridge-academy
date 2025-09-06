import React from 'react'
import { Link } from 'react-router-dom'

const Certificate = () => {
    return (
        <div>
            <div className='flex gap-5 mt-7'>

                <Link to={'/dashboard/apply-payment?text=certificate'}><button className="btn">Create New Payment</button></Link>
                <Link to={'/dashboard/apply-certificate'}><button className="btn">Apply For Certificate</button></Link>
                <Link to={'/dashboard/all-certificate-application'}><button className="btn">All Applications</button></Link>

            </div>
        </div>
    )
}

export default Certificate
