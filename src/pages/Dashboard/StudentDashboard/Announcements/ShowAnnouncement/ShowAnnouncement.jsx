import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useAxiosSecure from '../../../../../hooks/useAxiosSecure'
import principleSign from '../../../../../assets/signature_principle.png'
import logo2 from '../../../../../assets/logo2.jpg'
import useRole from '../../../../../hooks/useRole'
import useAuth from '../../../../../hooks/useAuth'

const ShowAnnouncement = () => {
  const { id } = useParams()
  const axiosSecure = useAxiosSecure()
  const [announcement, setAnnouncement] = useState(null)
  const [role] = useRole()
  const { user } = useAuth()

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axiosSecure.get(`/get-announcements/${id}`)
      setAnnouncement(data)
    }
    fetchData()
  }, [axiosSecure, id])
  const { head_line, details, date } = announcement || {}
  return (
    <div className='max-w-5xl mx-auto my-7 border p-5'>

      <div className='md:flex items-center justify-between'>
        <div className='flex gap-3 md:w-96'>
          <img className='w-20' src={logo2} alt="" />
          <div>
            <h1 className='heading text-xl font-bold'>FaithBridge International Academy</h1>
            <p className='font-medium'>Tongi, Gazipur-1712</p>
          </div>
        </div>
        <p className='font-medium mt-5 md:mt-0'>Notice Published: {date}</p>
      </div>

      <div className='my-10'>
        <h1 className='text-xl font-bold'>{head_line}</h1>
        <p className='font-medium my-1'>{role === 'student' ? 'Dear Student,' : `Dear ${user?.displayName} Sir/Madam,`}</p>
        <p>{details}</p>
        <div className='mt-5 flex items-center justify-between'>
          <div className='font-medium'>
            <p>By Order,</p>
            <p>School Authority</p>
          </div>
          <div>
            <img className='w-36' src={principleSign} alt="" />
            <p className='font-medium'>Principle's Sign</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowAnnouncement
