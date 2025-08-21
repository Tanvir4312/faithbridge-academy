import React from 'react'
import useAuth from '../../../../hooks/useAuth'
import useAxiosSecure from '../../../../hooks/useAxiosSecure'

import { useState } from 'react'
import { useEffect } from 'react'

const StudentProfile = () => {
  const { user } = useAuth()
  const [userInfo, setUserInfo] = useState('')
  const axiosSecure = useAxiosSecure()




  useEffect(() => {
    axiosSecure.get(`/user/${user?.email}`)
      .then(res => {
        setUserInfo(res.data)
      })
  }, [axiosSecure, user?.email])


  return (
    <div className='text-center pt-20 lg:max-w-2xl md:max-w-96 max-w-40 mx-auto mt-20 pb-10 rounded-2xl bg-[#bdf9eb]'>
      <h1 className='px-2'><span className='md:text-2xl font-bold'>Role:</span> <span className='md:text-3xl text-lg font-bold bg-[#006F5C] text-white md:px-4 py-2 px-2  rounded'>{userInfo?.role}</span></h1>
      <div className='flex justify-center items-center mt-10'>
        {
          user.photoURL && <img referrerPolicy='no-referrer' className='md:w-44 rounded-bl-4xl rounded-tr-4xl' src={user?.photoURL} alt="" />
        }
      </div>
      <p className='mt-6'><span className='text-3xl font-bold'>Monthly Fee:</span> {!userInfo?.paymentVerified ? <span className='text-red-600 text-2xl font-medium '>Due</span>: <span className='text-green-600 text-2xl font-medium '>Done</span>}</p>
    </div>
  )
}

export default StudentProfile
