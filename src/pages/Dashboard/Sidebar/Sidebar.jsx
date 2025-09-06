import React from 'react'
import StudentDashboard from '../StudentDashboard/StudentDashboard'
import AdminDashboard from '../AdminDashboard/AdminDashboard'

const Sidebar = ({ role }) => {

  return (
    <div>
      {/* Student */}
      {
        (role === 'student' || role === 'user') && <StudentDashboard role={role}></StudentDashboard>
      }
      {/* Admin */}
      {
        (role === 'admin') && <AdminDashboard></AdminDashboard>
      }
    </div>
  )
}

export default Sidebar
