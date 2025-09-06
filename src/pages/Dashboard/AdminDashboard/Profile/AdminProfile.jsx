import React from 'react'
import useAuth from '../../../../hooks/useAuth'
import useRole from '../../../../hooks/useRole'

const AdminProfile = () => {
    const {user} = useAuth()
    const [role] = useRole()
    return (
        <div className='text-center pt-20 lg:max-w-2xl md:max-w-96 max-w-40 mx-auto mt-10 pb-10 rounded-2xl bg-[#bdf9eb]'>
            <h1 className='px-2'><span className='md:text-2xl font-bold'></span> <span className='md:text-3xl text-lg font-bold bg-[#006F5C] text-white md:px-4 py-2 px-2  rounded'>{role}</span></h1>
            <div className='flex justify-center items-center mt-10'>
                {
                    user?.photoURL && <img referrerPolicy='no-referrer' className='md:w-44 rounded-bl-4xl rounded-tr-4xl' src={user?.photoURL} alt="" />
                }
            </div>

        </div>
    )
}

export default AdminProfile
