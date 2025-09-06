import React from 'react'
import logo from '../../assets/school-logo-withoutBg.png'
import logo2 from '../../assets/logo2.jpg'
import payment from '../../assets/payment.png'
import { Link } from 'react-router-dom'
const OnlineAdmission = () => {
    const handleViewCircularBtn = () =>{
        window.open('../../../public/filepdf.pdf', "_blank")
    }
    const link = <>
        <Link to={'/'}><li className='text-lg font-bold md:text-white'><button><img className='w-6' src="https://img.icons8.com/?size=100&id=24629&format=png" alt="" /> Home</button></li></Link>

        <Link to={'/login'}><li className='text-lg font-bold md:text-white'><button><img className='w-6' src="https://img.icons8.com/?size=100&id=94&format=png" alt="" /> Login</button></li></Link>
    </>
    return (
        <div>
            {/* Navbar start */}
            <div className="navbar bg-[#007B5E] py-4 px-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    <div className=''>
                        <img className='md:w-44' src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={'/admission-apply'}><button className="btn">Apply Now</button></Link>
                </div>
            </div>
            {/* Navbar end */}

            <div className='text-center my-14'>
                <div className='flex justify-center items-center'>
                    <img className='w-80' src={logo2} alt="" />
                </div>
                <div className='space-y-2 md:px-0 px-3'>
                    <h1 className='heading text-3xl font-extrabold'>FaithBridge International Academy</h1>
                    <h1 className='heading text-3xl font-medium'>فايث بريدج إنترناشونال أكاديمي</h1>
                    <p className='font-medium'>Tongi, Gazipur-1712</p>
                    <p className='font-medium'>EIIN: 106045 | School Code: 13635</p>
                </div>
                <div className='mt-5'>
                    <button onClick={handleViewCircularBtn} className='btn btn-outline mr-7 border-2 border-[#007B5E] text-[#007B5E] font-bold'>View Circular</button>
                    <Link to={'/admission-apply'}><button className='btn bg-[#007B5E] text-white font-bold'>Apply Now</button></Link>
                </div>

            </div>
            <div className='max-w-3xl mx-auto px-5'>
                <h2 className='text-2xl font-medium'>Instructions:</h2>
                <p>1. Without the original online admit card, students will not be allowed to sit for the examination.</p>
                <p>2. Except for the original admit card and pen, no paper, books, notebooks, mobile phones, or similar items are allowed with the examinees.</p>
                <p>3. Students must be present in the examination hall at least 15 minutes before the exam starts.</p>
                <p>4.Authorities reserve the right to take any action against misconduct in the examination.</p>
                <p>5. Boys and girls will attend the examination at their respective campuses.</p>

                <div className='mt-7'>
                    <h2 className='text-2xl font-medium'>Admission Test Marks Distribution & Selection:</h2>
                    <p>1. <span className='font-medium'>Hifz Department:</span> Selection will be based only on oral test and A‘mal-Akhlaq (practice & character).</p>
                    <p>2. <span className='font-medium'>Pre-Primary to Class 3:</span> Selection will be made.</p>
                    <p>3. <span className='font-medium'>Class 4–9 (General):</span> Selection will be made.</p>
                    <ol className='ml-10'>
                        <li><span className='font-medium'>Written:</span> <span>40 marks (Arabic – 10, Bangla – 5, English – 10, Math – 10, General Knowledge – 5)</span></li>
                        <li><span className='font-medium'>Oral:</span> <span>10 marks</span></li>
                    </ol>
                    <p>3. <span className='font-medium'>Class 9 (Science):</span> Selection will be made.</p>
                    <ol className='ml-10'>
                        <li><span className='font-medium'>Written:</span> <span>40 marks (Arabic – 10, Bangla – 5, English – 5, Math – 10, Science – 10)</span></li>
                        <li><span className='font-medium'>Oral:</span> <span>10 marks</span></li>
                    </ol>
                    <h2><span className='text-2xl font-medium'>N.B.:</span> <span>Students should prepare from the textbooks of the previous class of the one they are applying for.</span></h2>
                    <div className='mt-4'>
                        <h4 className='text-lg font-medium'>Admission test will be held only once. [28 December 2026]</h4>
                    </div>
                </div>

                <div className='my-20 text-center'>
                    <h1 className='text-3xl font-bold text-[#007B5E]'>Administration Office</h1>
                    <p className='md:text-6xl font-bold mt-2'>09876543212</p>
                    <p className='text-lg font-bold opacity-40'>Sun to Thu 9.30 AM to 5.30 PM (Except Govt. Holiday)</p>
                </div>

                
            </div>
            <div className='text-center my-10'>
                    <h1 className='text-3xl font-bold text-[#007B5E] pb-4'>Payment Partner</h1>
                    <img className='lg:max-w-6xl mx-auto' src={payment} alt="" />
                </div>
        </div>
    )
}

export default OnlineAdmission
