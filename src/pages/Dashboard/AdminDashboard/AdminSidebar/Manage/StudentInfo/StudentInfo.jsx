import React from 'react'
import { Link } from 'react-router-dom'

const StudentInfo = () => {
    return (
        <div className='mt-5 space-x-5'>
            <Link to={'/admin_layout/all-student-info-admin'}><button className="btn">All Student Information</button></Link>


        </div>
    )
}

export default StudentInfo
