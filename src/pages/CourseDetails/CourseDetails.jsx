import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import logo from '../../assets/school-logo-withoutBg.png'
import useAxiosPublic from '../../hooks/useAxiosPublic'

const CourseDetails = () => {
  const { id } = useParams()
  const axiosPublic = useAxiosPublic()
  const [courseDetails, setCourseDetails] = useState(null)


  useEffect(() => {
    if (id) {
      const fetchCourseDetails = async () => {
        const res = await axiosPublic.get(`/course-data-get/${id}`)
        setCourseDetails(res.data)
      }
      fetchCourseDetails()
    }
  }, [axiosPublic, id])


  

  const link = <>
    <Link to={'/'}><li className='text-lg font-bold md:text-white'><button><img className='w-6' src="https://img.icons8.com/?size=100&id=24629&format=png" alt="" /> Home</button></li></Link>

  </>
  const { icon, course_title, course_details } = courseDetails || {}
  return (
    <div>
      <div className="navbar bg-[#007B5E] py-4 px-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {link}
            </ul>
          </div>
          <div className=''>
            <img className='md:w-44' src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {link}
          </ul>
        </div>
      </div>

      <div className='mx-5'>
        <div className='text-center max-w-4xl mx-auto border-2 border-[#007B5E] my-10 p-7'>
          <div className='flex justify-center'>
            <img src={icon} alt="" />
          </div>
          <h1 className='text-4xl font-medium my-5'>{course_title}</h1>
          <p>{course_details}</p>
        </div>
      </div>
    </div>
  )
}

export default CourseDetails
