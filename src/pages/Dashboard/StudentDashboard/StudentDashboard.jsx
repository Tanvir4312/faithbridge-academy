import React from 'react'
import StudentSidebar from './StudentSidebar/StudentSidebar'

const StudentDashboard = ({role}) => {
    return (
        <div>
            {/* Student Sidebar */}
            <StudentSidebar role={role}></StudentSidebar>
        </div>
    )
}

export default StudentDashboard
