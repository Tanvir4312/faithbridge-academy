import React, { useEffect, useState } from 'react'
import useRole from '../../../../hooks/useRole'
import useAxiosSecure from '../../../../hooks/useAxiosSecure'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";

const Announcements = () => {
  const [role] = useRole()
  const axiosSecure = useAxiosSecure()
  const [announcements, setAnnouncements] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axiosSecure.get('/view-announcements')
      setAnnouncements(data)
    }
    fetchData()
  }, [axiosSecure])
  if (!announcements.length) {
    return
  }

  const announcementsBaseRole = announcements.filter(announcement => announcement?.announcements === role)



  return (
    <div>

      <h1 className='text-3xl font-medium text-[#007b5e] text-center my-4'> Announcements</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Head Line</th>
              <th>Published Date</th>
              <th>Action</th>

            </tr>
          </thead>
          {
            announcementsBaseRole.map((announcement, idx) => <tbody key={idx}>
              {/* row 1 */}
              <tr>
                <th>{idx + 1}</th>
                <td>{announcement?.head_line}</td>
                <td>{announcement?.date}</td>
                <td className='text-[#04b98e] font-medium underline'><Link to={`/show-announcements/${announcement?._id}`} className='flex items-center'>Details <span className='mt-1 ml-1'><FaLongArrowAltRight></FaLongArrowAltRight></span></Link></td>

              </tr>

            </tbody>)
          }
        </table>
      </div>


      {
        !announcementsBaseRole.length && <p className='md:text-3xl font-bold my-5 text-red-400'>No announcements at the moment.</p>
      }
    </div>
  )
}

export default Announcements
