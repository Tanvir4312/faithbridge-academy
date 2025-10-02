import React from 'react'
import { NavLink } from 'react-router-dom'
import useAuth from '../../../../hooks/useAuth'

const AdminSidebar = () => {
    const { logout } = useAuth()

    const handleLogout = () => {
        logout()
            .then(() => {
                console.log(logout)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className='flex flex-col gap-28 items-center'>
            <div className='space-y-5 mt-4'>
                <div>
                    <NavLink className={({ isActive }) => isActive ? 'bg-[#FFD54F] md:py-4 py-2 rounded text-[#333333] font-medium' : ''} to={'home-page'}><button className='lg:w-72 md:w-60 w-[117px] lg:text-3xl md:text-xl text-sm cursor-pointer'>Home_Page</button></NavLink>
                </div>
                <div>
                    <NavLink className={({ isActive }) => isActive ? 'bg-[#FFD54F] md:py-4 py-2 rounded text-[#333333] font-medium' : ''} to={'manage'}><button className='lg:w-72 md:w-60 w-[117px] lg:text-3xl md:text-xl text-sm cursor-pointer'>Manage</button></NavLink>
                </div>
                <div>
                    <NavLink className={({ isActive }) => isActive ? 'bg-[#FFD54F] md:py-4 py-2 rounded text-[#333333] font-medium' : ''} to={'academic-docs-admin'}><button className='lg:w-72 md:w-60 w-[117px] lg:text-3xl md:text-xl text-sm cursor-pointer'>Academic_Docs</button></NavLink>
                </div>
                <div>
                    <NavLink className={({ isActive }) => isActive ? 'bg-[#FFD54F] md:py-4 py-2 rounded text-[#333333] font-medium' : ''} to={'payments'}><button className='lg:w-72 md:w-60 w-[117px] lg:text-3xl md:text-xl text-sm cursor-pointer'>Payments</button></NavLink>
                </div>
                <div>
                    <NavLink className={({ isActive }) => isActive ? 'bg-[#FFD54F] md:py-4 py-2 rounded text-[#333333] font-medium' : ''} to={'announcements-admin'}><button className='lg:w-72 md:w-60 w-[117px] lg:text-3xl md:text-xl text-sm cursor-pointer'>Announcements</button></NavLink>
                </div>
            
            </div>
            <div className='flex flex-col items-center'>
                <div className='divider '></div>
                {/* Profile */}
                <div>
                    <NavLink className={({ isActive }) => isActive ? 'bg-[#FFD54F] md:py-4 py-2 rounded text-[#333333] font-medium' : ''} to={'admin-profile'}><button className='lg:w-72 md:w-60 w-[117px] lg:text-3xl md:text-xl text-sm cursor-pointer'>Profile</button></NavLink>
                </div>

                <div className='my-8'>
                    <button onClick={handleLogout} className='btn btn-outline'>Logout</button>
                </div>
            </div>
        </div>

    )
}

export default AdminSidebar
