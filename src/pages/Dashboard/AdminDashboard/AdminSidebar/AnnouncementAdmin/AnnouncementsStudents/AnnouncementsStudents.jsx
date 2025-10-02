import React from 'react'
import { Link } from 'react-router-dom'


const AnnouncementsStudents = () => {
 
    return (
     
        <div className="md:flex gap-5 mt-5">
            <Link to={'/admin_layout/add-ann-stu'}><button className="btn mb-5 md:mb-0">Add Announcements</button></Link>
            <Link to={'/admin_layout/view-ann-stu'}><button className="btn">View Announcements</button></Link>
        </div>
    )
}

export default AnnouncementsStudents
