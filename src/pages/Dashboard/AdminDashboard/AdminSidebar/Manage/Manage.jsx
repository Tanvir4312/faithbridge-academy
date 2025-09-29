import React from 'react'
import { Link } from 'react-router-dom'

const Manage = () => {
    return (
        <div className='mt-5 space-x-5 flex flex-col gap-5 md:flex-row flex-wrap'>
            <Link to={'/dashboard/users'}><button className="btn w-full">Users</button></Link>
            <Link to={'/dashboard/student-info-admin'}><button className="btn w-full">Student Info</button></Link>
            <Link to={'/admin_layout/student-formFillUp-info-admin'}><button className="btn w-full">Student Form fill-up Info</button></Link>
            <Link to={'/admin_layout/form-fill-up-time'}><button className="btn w-full">Form fill-up Time</button></Link>
            <Link to={'/admin_layout/application-time-control'}><button className="btn w-full">Application Time Control</button></Link>
      

        </div>
    )
}

export default Manage
