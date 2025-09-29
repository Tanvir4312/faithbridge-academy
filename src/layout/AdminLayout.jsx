import React from 'react'
import useAuth from '../hooks/useAuth'
import { Link, Outlet } from 'react-router-dom'
import Footer from '../components/shared/Footer/Footer'

const AdminLayout = () => {
    const { user } = useAuth()
    return (
        <div>
            <div className='bg-[#007B5E] py-6'>
                <div className='md:flex justify-between items-center lg:max-w-6xl md:max-w-2xl mx-auto'>
                    <h1 className='heading text-3xl font-medium text-white text-center md:text-start'>FaithBridge International Academy</h1>
                    <div className='md:flex-row items-center justify-center mt-4 md:mt-0 flex flex-col-reverse'>
                        <div className='flex items-center'>
                            <Link to={'/dashboard'}><button className='btn btn-outline mr-7 border-2 border-white text-white font-bold'>Dashboard</button></Link>
                            <Link to={'/'}><button className='btn btn-outline mr-7 border-2 border-white text-white font-bold'>Home</button></Link>
                        </div>

                        {
                            user && <img title={user.displayName} className='w-12 h-12 lg:w-12 lg:h-12 md:w-28 md:h-12 rounded-full hidden md:block' src={user?.photoURL} alt="" />
                        }
                        <div className='md:hidden mb-4'>
                            {
                                user && <img title={user.displayName} className='w-14 h-14 rounded-full' src={user?.photoURL} alt="" />
                            }
                        </div>

                    </div>
                </div>

            </div>

            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default AdminLayout
