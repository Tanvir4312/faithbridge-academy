import React, { useState } from 'react'
import useAxiosSecure from '../../../../../../hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import Swal from 'sweetalert2'


const ViewAnnouncementsTeacher = () => {
  const axiosSecure = useAxiosSecure()
  const [announcements, setAnnouncements] = useState([])

  const { data: allAnnouncement = [], refetch } = useQuery({
    queryKey: ['all-announcements'],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/view-announcements')
      setAnnouncements(data)
      return allAnnouncement
    }
  })
  const announcementsTeachers = announcements.filter(announcement => announcement?.announcements === 'teacher')

  // Delete
  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosSecure.delete(`/announcements-data-delete/${id}`)

          refetch()
        } catch (err) {
          console.log(err)
        }

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Data Delete Successfully",
          showConfirmButton: false,
          timer: 1000
        });
      }
    });
  }
  return (
    <div className='max-w-5xl mx-auto'>
      <h1 className='text-2xl font-medium text-center my-5'>View All Announcement for Teachers</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Head Line</th>
              <th>Date</th>
              <th>Action</th>

            </tr>
          </thead>
          {
            announcementsTeachers.map((announcement, idx) => <tbody key={idx}>
              {/* row 1 */}
              <tr>
                <th>{idx + 1}</th>
                <td>{announcement?.head_line}</td>
                <td>{announcement?.date}</td>
                <td><button onClick={() => handleDelete(announcement?._id)} className="btn bg-red-500 text-white">Delete</button></td>

              </tr>

            </tbody>)
          }
        </table>
      </div>
    </div>
  )
}

export default ViewAnnouncementsTeacher

