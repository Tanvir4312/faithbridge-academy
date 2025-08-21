import React from 'react'
import StudentDashboard from '../StudentDashboard/StudentDashboard'

const Sidebar = ({role}) => {
  return (
    <div>
      {/* Student */}
      {
        role === 'student' && <StudentDashboard></StudentDashboard>
      }
    </div>
  )
}

export default Sidebar
