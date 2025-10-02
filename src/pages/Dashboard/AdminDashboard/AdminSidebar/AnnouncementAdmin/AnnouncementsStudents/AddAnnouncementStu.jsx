import React from 'react'
import useAxiosSecure from '../../../../../../hooks/useAxiosSecure'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AddAnnouncementStu = () => {
  const axiosSecure = useAxiosSecure()
  const navigation = useNavigate()

  const handleAnnouncements = async e => {
    e.preventDefault()

    const form = e.target;
    const head_line = form.head_line.value
    const details = form.details.value

    const announcements_students = {
      head_line,
      details,
      announcements: 'student',
      date: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
      })
    }
    await axiosSecure.post('/add-announcements', announcements_students)
    toast.success('Announcements add Successfully')
    form.reset()
    navigation('/admin_layout/view-ann-stu')

  }
  return (
    <div className='max-w-4xl mx-auto'>
      <h1 className='text-3xl font-medium text-[#007b5e] text-center my-4'> Announcement For Students</h1>


      {/* Announcements Field */}
      <form onSubmit={handleAnnouncements} className='border-[#007b5e] border-2 p-5 mb-8'>
        <div>
          <input type="text" name='head_line' className="input w-full" placeholder='Head Line' />
        </div>
        <div>
          <textarea name="details" id="" cols="30" rows="10" className='textarea w-full my-5' placeholder='Details'></textarea>
        </div>
        <button className="btn btn-block bg-[#007b5e] text-white">Submit</button>
      </form>
    </div>
  )
}

export default AddAnnouncementStu

