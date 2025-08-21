import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import ApplyForm from './ApplyForm/ApplyForm'

const AdmissionApply = () => {
    const { user } = useAuth()
    return (
        <div>
            <div className='bg-[#007B5E] py-6 px-7 md:flex justify-between'>
                <h1 className='heading text-3xl font-medium text-white text-center md:text-start'>FaithBridge International Academy</h1>
                <div className='flex items-center justify-center mt-4 md:mt-0'>
                    <Link to={'/'}><button className='btn btn-outline mr-7 border-2 border-white text-white font-bold'>Home</button></Link>
                    {
                        user && <img title={user.displayName} className='w-12 h-12 rounded-full' src={user?.photoURL} alt="" />
                    }
                </div>
            </div>

            {/* Form */}
            <ApplyForm></ApplyForm>
        </div>
    )
}

export default AdmissionApply
