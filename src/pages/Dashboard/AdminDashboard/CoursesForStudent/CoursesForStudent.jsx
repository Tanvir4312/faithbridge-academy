import React from 'react'
import { Link } from 'react-router-dom'

const CoursesForStudent = () => {
    return (
        <div className='mt-5 space-x-5'>
            <Link to={'/admin_layout/add-courses'}> <button className="btn mb-4 md:mb-0">Add Courses</button></Link>
            <Link to={'/admin_layout/view-courses'}><button className="btn">View Courses</button></Link>
        </div>
    )
}

export default CoursesForStudent
