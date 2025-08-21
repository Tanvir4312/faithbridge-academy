import React from 'react'
import logo from '../../../assets/school-logo-withoutBg.png'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div>
            {/* Header */}
            <div className='bg-[#007B5E] py-6 px-3'>
                <div className='md:flex justify-between items-center text-center'>
                    <div className=''>
                        <img className='md:w-44' src={logo} alt="" />
                    </div>
                    <div className='text-[#FAF3E0] text-center space-y-2'>
                        <h1 className='heading text-3xl font-medium'>FaithBridge International Academy</h1>
                        <h1 className='heading text-3xl font-medium'>فايث بريدج إنترناشونال أكاديمي</h1>
                        <p className='font-medium'>Tongi, Gazipur-1712</p>
                        <p className='font-medium'>EIIN: 106045 | School Code: 13635</p>
                    </div>
                    <div className='mt-5 md:mt-0'>
                        <div className="dropdown dropdown-bottom">
                            <div tabIndex={0} role="button" className="btn m-1 bg-amber-500 border-none heading text-white lg:text-xl md:w-48 lg:w-full">Online Admission <img className='w-6' src="https://img.icons8.com/?size=96&id=3TA7d2I2wPYa&format=png" alt="" /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-amber-500 rounded-box z-1 w-[227px] p-2 shadow-sm">
                                <Link to={'/online-admission'}><p className='text-lg font-medium flex items-center justify-center mb-3 hover:bg-zinc-300 rounded'><img className='w-10 ml-2' src="https://img.icons8.com/?size=128&id=mLHqYFb1BEN2&format=png" alt="" />Online_Admission Boys</p></Link>



                                 <Link to={'/online-admission'}><p className='text-lg font-medium flex items-center justify-center mb-3 hover:bg-zinc-300 rounded'><img className='w-10 ml-2' src="https://img.icons8.com/?size=128&id=mLHqYFb1BEN2&format=png" alt="" />Online_Admission Girls</p></Link>
                            </ul>
                        </div>
                    </div>
                </div>
               
            </div>
            
           {/* Navbar */}
           <Navbar></Navbar>
        </div>
    )
}

export default Header
