import React from 'react'
import { Link } from 'react-router-dom'

const ContactNumber = () => {
    return (
        <div className='mt-5 space-x-5'>
            <Link to={'/admin_layout/add-contact-number'}><button className="btn">Add Contact Number</button></Link>
            <Link to={'/admin_layout/view-contact-number'}><button className="btn">View Contact Number</button></Link>
        </div>
    )
}

export default ContactNumber
