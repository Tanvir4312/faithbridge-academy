import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../pages/Dashboard/Sidebar/Sidebar'
import useRole from '../hooks/useRole'

// import useAuth from '../hooks/useAuth'

const DashboardLayout = () => {

    const [role, loading] = useRole()

    if (loading || !role) {
        return <div className="flex justify-center mt-60">
            <span className="loading loading-bars loading-xl"></span>
        </div>
    }

    return (
        <div className='max-w-6xl mx-auto grid grid-cols-12 gap-4'>
            <div className='md:col-span-4 col-span-5 min-h-screen bg-[#006F5C]'>
                {/* Left side */}
                <Sidebar role={role}></Sidebar>
            </div>
            <div className='md:col-span-8 col-span-7'>
                {/* Right side */}
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default DashboardLayout
