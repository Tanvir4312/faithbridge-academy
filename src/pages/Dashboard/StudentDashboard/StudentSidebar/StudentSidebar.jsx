import React from 'react'
import { NavLink } from 'react-router-dom'
import useAuth from '../../../../hooks/useAuth'

const StudentSidebar = () => {
    const {logout} = useAuth()
    

    const handleLogout = () =>{
        logout()
        .then(() =>{
            console.log(logout) 
        })
        .catch(err =>{
            console.log(err)
        })
    }
    return (
        <div className='flex flex-col justify-center items-center gap-6 py-6'>

            {/* Apply for Admission */}
            <div>
                <NavLink className={({ isActive }) => isActive ? 'bg-[#FFD54F] md:py-4 py-2 rounded text-[#333333] font-medium' : ''} to={'/online-admission'}><button className='lg:w-72 md:w-60 w-[117px] lg:text-3xl md:text-2xl text-sm cursor-pointer'>Admission</button></NavLink>
            </div>

            {/* Pay Monthly Fee */}
            <div>
                <NavLink className={({ isActive }) => isActive ? 'bg-[#FFD54F] md:py-4 py-2 rounded text-[#333333] font-medium' : ''} to={'pay'}><button className='lg:w-72 md:w-60 w-[117px] lg:text-3xl md:text-2xl text-sm cursor-pointer'>Pay Monthly Fee</button></NavLink>
            </div>

            {/* Download Receipt */}
            <div>
                <NavLink className={({ isActive }) => isActive ? 'bg-[#FFD54F] md:py-4 py-2 rounded text-[#333333] font-medium' : ''} to={'Receipt'}><button className='lg:w-72 md:w-60 w-[117px] lg:text-3xl md:text-2xl text-sm cursor-pointer'>Download_Receipt</button></NavLink>
            </div>

            {/* Announcements */}
            <div>
                <NavLink className={({ isActive }) => isActive ? 'bg-[#FFD54F] md:py-4 py-2 rounded text-[#333333] font-medium' : ''} to={'announcements'}><button className='lg:w-72 md:w-60 w-[117px] lg:text-3xl md:text-2xl text-sm cursor-pointer'>Announcements</button></NavLink>
            </div>

            {/* Class Routine */}
            <div>
                <NavLink className={({ isActive }) => isActive ? 'bg-[#FFD54F] md:py-4 py-2 rounded text-[#333333] font-medium' : ''} to={'announcements'}><button className='lg:w-72 md:w-60 w-[117px] lg:text-3xl md:text-2xl text-sm cursor-pointer'>Class Routine</button></NavLink>
            </div>

            {/* View Homework */}
            <div>
                <NavLink className={({ isActive }) => isActive ? 'bg-[#FFD54F] md:py-4 py-2 rounded text-[#333333] font-medium' : ''} to={'announcements'}><button className='lg:w-72 md:w-60 w-[117px] lg:text-3xl md:text-2xl text-sm cursor-pointer'>View Homework</button></NavLink>
            </div>

            {/* Contact School */}
            <div>
                <NavLink className={({ isActive }) => isActive ? 'bg-[#FFD54F] md:py-4 py-2 rounded text-[#333333] font-medium' : ''} to={'application-status'}><button className='lg:w-72 md:w-60 w-[117px] lg:text-3xl md:text-2xl text-sm cursor-pointer'>Application_Status</button></NavLink>
            </div>
            {/* Contact School */}
            <div>
                <NavLink className={({ isActive }) => isActive ? 'bg-[#FFD54F] md:py-4 py-2 rounded text-[#333333] font-medium' : ''} to={'announcements'}><button className='lg:w-72 md:w-60 w-[117px] lg:text-3xl md:text-2xl text-sm cursor-pointer'>Contact School</button></NavLink>
            </div>
            <div className="divider"></div>

            {/* Profile */}
          <div>
                <NavLink className={({ isActive }) => isActive ? 'bg-[#FFD54F] md:py-4 py-2 rounded text-[#333333] font-medium' : ''} to={'profile'}><button className='lg:w-72 md:w-60 w-[117px] lg:text-3xl md:text-2xl text-sm cursor-pointer'>Profile</button></NavLink>
            </div>

            <div className=''>
                <button onClick={handleLogout} className='btn btn-outline'>Logout</button>
            </div>
        </div>
    )
}

export default StudentSidebar
