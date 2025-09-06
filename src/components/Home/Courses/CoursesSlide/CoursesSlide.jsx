import React from 'react'
import prospectusBg from '../../../../assets/prospectus-bg.avif'
import { Link } from 'react-router-dom'

const CoursesSlide = ({ course }) => {

    const { icon, course_title, course_details } = course || {}

    return (

        <Link to={`/course-details/${course?._id}`}>
            <div className='group hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105'>
                <div style={{ backgroundImage: `url(${prospectusBg})` }} className='text-center py-1'>
                    <div className='flex justify-center mb-3'>
                        <img className='!w-16 !h-16 mt-8' src={icon} alt="" />
                    </div>
                    <div className='px-4'>
                        <h1 className='text-2xl font-medium'>{course_title}</h1>
                        <p>{course_details.slice(0, 100)}...</p>
                    </div>
                    <button className='btn btn-outline my-7 group-hover:bg-[#007B5E] group-hover:text-white group-hover:border-none '>Details</button>
                </div>
            </div>
        </Link>

    )
}

export default CoursesSlide
