import React, { useEffect, useState } from 'react'
import NavbarLogo from '../../../assets/navbar-logo.jpg'
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
    const [isFixed, setIsFixed] = useState(false)
    const { user } = useAuth()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsFixed(true)
            }
            else {
                setIsFixed(false)
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`bg-[#4cfcd3] w-full z-50  ${isFixed ? 'transition-all duration-300 fixed top-0 opacity-80 text-white font-bold' : 'relative'}`}>
            <div className='navbar max-w-6xl mx-auto'>
                <div className="mx-auto md:mx-0">

                    <div className="dropdown">
                        <div className='text-center'>
                            <div className="btn btn-ghost text-xl md:hidden block">daisyUI</div>
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                        </div>
                        {/* ------------------------------Small------------------------- */}
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#4cfcd3] rounded-box z-1 mt-3 w-44 p-2 shadow">
                            {/* Home */}
                            <div className="ml-4 font-medium mb-2">Home</div>
                            {/* About */}
                            <div className="dropdown dropdown-hover relative group ">
                                <div tabIndex={0} role="button" className="btn btn-ghost group-hover:bg-[#006E51]">About </div>
                                <ul tabIndex={0} style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center' }} className="dropdown-content menu rounded-box z-20 w-40 p-2 shadow-sm absolute top-4 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-white text-[16px] font-bold cursor-pointer space-y-2">
                                    <Link><li className='hover:text-red-300'>School at a Glance</li></Link>
                                    <Link><li className='hover:text-red-300'>Complex</li></Link>
                                    <Link> <li className='hover:text-red-300'>Principal's Message</li></Link>
                                    <Link><li className='hover:text-red-300'>Faculty Information</li></Link>
                                    <Link> <li className='hover:text-red-300'>Officers and Staff</li></Link>
                                    <Link> <li className='hover:text-red-300'>Key Features</li></Link>
                                    <Link> <li className='hover:text-red-300'>Founding Vision</li></Link>
                                </ul>
                            </div>
                            {/* Academics */}
                            <div className="dropdown dropdown-hover relative group ">
                                <div tabIndex={0} role="button" className="btn btn-ghost group-hover:bg-[#006E51]">Academics</div>
                                <ul tabIndex={0} style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-40 p-2 shadow-sm absolute top-4 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-white text-[16px] font-bold cursor-pointer space-y-2">
                                    <Link><li className='hover:text-red-300'>Our Curriculum</li></Link>
                                    <Link><li className='hover:text-red-300'>Co-Curriculum Activities</li></Link>
                                    <Link><li className='hover:text-red-300'>Class-wise Teacher List</li></Link>
                                    <Link><li className='hover:text-red-300'>Examination Routine</li></Link>
                                    <Link><li className='hover:text-red-300'>Academic Levels</li></Link>
                                    <Link><li className='hover:text-red-300'>Results</li></Link>
                                    <Link><li className='hover:text-red-300'>Holiday List</li></Link>
                                    <Link><li className='hover:text-red-300'>Academic Calender</li></Link>
                                    <Link><li className='hover:text-red-300'>Examination Notice</li></Link>
                                </ul>
                            </div>
                            {/* Admission */}
                            <div className="dropdown dropdown-hover relative group ">
                                <div tabIndex={0} role="button" className="btn btn-ghost group-hover:bg-[#006E51]">Admission</div>
                                <ul tabIndex={0} style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-40 p-2 shadow-sm absolute top-4 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-white text-[16px] font-bold cursor-pointer space-y-3">
                                    <Link><li className='hover:text-red-300'>Admission Notice</li></Link>
                                    <Link><li className='hover:text-red-300'>Examination Rules</li></Link>
                                    <Link><li className='hover:text-red-300'>Admission Procedure</li></Link>
                                    <Link><li className='hover:text-red-300'>Admission Timeline</li></Link>
                                    <Link><li className='hover:text-red-300'>Admission Test</li></Link>
                                    <Link><li className='hover:text-red-300'>Class-wise Fees</li></Link>
                                    <Link><li className='hover:text-red-300'>Admission Requirement</li></Link>
                                    <Link><li className='hover:text-red-300'>Required Documents for Admission</li></Link>
                                </ul>
                            </div>
                            {/* Accommodation  */}
                            <div className="dropdown dropdown-hover relative group ">
                                <div tabIndex={0} role="button" className="btn btn-ghost group-hover:bg-[#006E51]">Accommodation </div>
                                <ul tabIndex={0} style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-40 p-2 shadow-sm absolute top-4 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-white text-[16px] font-bold cursor-pointer space-y-3">
                                    <Link><li className='hover:text-red-300'>Hostel Overview</li></Link>
                                    <Link><li className='hover:text-red-300'>Residential Halls & Administration</li></Link>
                                    <Link><li className='hover:text-red-300'>Hostel Fees</li></Link>
                                    <Link><li className='hover:text-red-300'>Hostel Regulations</li></Link>
                                    <Link><li className='hover:text-red-300'>Hostel Admission Rules</li></Link>
                                    <Link><li className='hover:text-red-300'>Daily Routine</li></Link>
                                </ul>
                            </div>
                            {/* Publications */}
                            <div className="dropdown dropdown-hover relative group ">
                                <div tabIndex={0} role="button" className="btn btn-ghost group-hover:bg-[#006E51]">Publications</div>
                                <ul tabIndex={0} style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-40 p-2 shadow-sm absolute top-4 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-white text-[16px] font-bold cursor-pointer space-y-3">
                                    <Link><li className='hover:text-red-300'>Annual Activities</li></Link>
                                    <Link><li className='hover:text-red-300'>Monthly Publications</li></Link>
                                    <Link><li className='hover:text-red-300'>Quarterly FaithBridge</li></Link>
                                    <Link><li className='hover:text-red-300'>Biannual Publications</li></Link>
                                    <Link><li className='hover:text-red-300'>Diary</li></Link>
                                    <Link><li className='hover:text-red-300'>Wall Magazine</li></Link>
                                    <Link><li className='hover:text-red-300'>Others</li></Link>
                                    <Link><li className='hover:text-red-300'>Guidelines</li></Link>
                                </ul>
                            </div>
                            {/* Library */}
                            <div className="dropdown dropdown-hover relative group ">
                                <div tabIndex={0} role="button" className="btn btn-ghost group-hover:bg-[#006E51]">Library</div>
                                <ul tabIndex={0} style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-40 p-2 shadow-sm absolute top-4 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-white text-[16px] font-bold cursor-pointer space-y-3">
                                    <Link><li className='hover:text-red-300'>Library Overview</li></Link>
                                    <Link><li className='hover:text-red-300'>Library Catalog</li></Link>
                                    <Link><li className='hover:text-red-300'>Library Policies</li></Link>
                                </ul>
                            </div>
                            {/* Laboratory */}
                            <div className="dropdown dropdown-hover relative group ">
                                <div tabIndex={0} role="button" className="btn btn-ghost group-hover:bg-[#006E51]">Laboratory</div>
                                <ul tabIndex={0} style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-40 p-2 shadow-sm absolute top-4 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-white text-[16px] font-bold cursor-pointer space-y-3">
                                    <Link><li className='hover:text-red-300'>Laboratory Overview</li></Link>
                                    <Link><li className='hover:text-red-300'>Laboratory Activities</li></Link>
                                    <Link><li className='hover:text-red-300'>Laboratory Rules & Regulations</li></Link>
                                </ul>
                            </div>
                            {/* Facilities */}
                            <div className="dropdown dropdown-hover relative group ">
                                <div tabIndex={0} role="button" className="btn btn-ghost group-hover:bg-[#006E51]">Facilities</div>
                                <ul tabIndex={0} style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-40 p-2 shadow-sm absolute top-4 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-white text-[16px] font-bold cursor-pointer space-y-3">
                                    <Link><li className='hover:text-red-300'>Teacher Training</li></Link>
                                    <Link><li className='hover:text-red-300'>Foundation Course</li></Link>
                                    <Link><li className='hover:text-red-300'>Language Learning Course</li></Link>
                                    <Link><li className='hover:text-red-300'>Activities</li></Link>
                                </ul>
                            </div>
                            {/* Media */}
                            <div className="dropdown dropdown-hover relative group ">
                                <div tabIndex={0} role="button" className="btn btn-ghost group-hover:bg-[#006E51]">Media</div>
                                <ul tabIndex={0} style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-40 p-2 shadow-sm absolute top-4 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-white text-[16px] font-bold cursor-pointer space-y-3">
                                    <Link><li className='hover:text-red-300'>Photo Gallery</li></Link>
                               <Link><li className='hover:text-red-300'>Video Gallery</li></Link>
                                </ul>
                            </div>
                            {/* Contact */}
                            <div className="dropdown dropdown-hover relative group ">
                                <div tabIndex={0} role="button" className="btn btn-ghost group-hover:bg-[#006E51]">Contact</div>
                                <ul tabIndex={0} style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-40 p-2 shadow-sm absolute top-4 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-white text-[16px] font-bold cursor-pointer space-y-2">
                                 <Link><li className='hover:text-red-300'>Contact</li></Link>
                                </ul>
                            </div>
                            {/* Login */}
                            <div className="dropdown dropdown-hover relative group ">
                                <div tabIndex={0} role="button" className="btn btn-ghost group-hover:bg-[#006E51]">Login</div>
                                <ul tabIndex={0} style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-40 p-2 shadow-sm absolute top-4 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-white text-[16px] font-bold cursor-pointer space-y-3">
                                    <li><Link to={'/login'}><button className='text-white button-text font-medium cursor-pointer hover:text-amber-600'>Login</button></Link></li>
                                </ul>
                            </div>

                        </ul>
                    </div>

                </div>
                <div className="hidden lg:flex flex-wrap items-center gap-4">
                    {/* -----------------------Large -----------------------*/}

                    {/* Home */}
                    <Link to={'/'}><div className="text-xl hover:text-[#FAF3E0] cursor-pointer button-text">Home</div></Link>

                    {/* About */}
                    <div className="">
                        <div className="relative group">
                            <div className="flex items-end text-xl group-hover:text-[#FAF3E0] cursor-pointer button-text">About<TiArrowSortedDown /></div>
                            <ul style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-[200px] p-2 shadow-sm absolute top-12 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 text-white text-[16px] font-bold cursor-pointer space-y-3">
                                <Link><li className='hover:text-red-300'>School at a Glance</li></Link>
                                <Link><li className='hover:text-red-300'>Complex</li></Link>
                                <Link> <li className='hover:text-red-300'>Principal's Message</li></Link>
                                <Link><li className='hover:text-red-300'>Faculty Information</li></Link>
                                <Link> <li className='hover:text-red-300'>Officers and Staff</li></Link>
                                <Link> <li className='hover:text-red-300'>Key Features</li></Link>
                                <Link> <li className='hover:text-red-300'>Founding Vision</li></Link>



                            </ul>
                        </div>
                    </div>

                    {/* Academics */}
                    <ul className="">
                        <div className=" relative group dropdown-hover">
                            <div className="flex items-end text-xl group-hover:text-[#FAF3E0] cursor-pointer button-text">Academics<TiArrowSortedDown /></div>
                            <ul style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-[200px] p-2 shadow-sm absolute top-12 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 text-white text-[16px] font-bold cursor-pointer space-y-3">
                                <Link><li className='hover:text-red-300'>Our Curriculum</li></Link>
                                <Link><li className='hover:text-red-300'>Co-Curriculum Activities</li></Link>
                                <Link><li className='hover:text-red-300'>Class-wise Teacher List</li></Link>
                                <Link><li className='hover:text-red-300'>Examination Routine</li></Link>
                                <Link><li className='hover:text-red-300'>Academic Levels</li></Link>
                                <Link><li className='hover:text-red-300'>Results</li></Link>
                                <Link><li className='hover:text-red-300'>Holiday List</li></Link>
                                <Link><li className='hover:text-red-300'>Academic Calender</li></Link>
                                <Link><li className='hover:text-red-300'>Examination Notice</li></Link>

                            </ul>
                        </div>
                    </ul>
                    {/* Admission */}
                    <ul className="">
                        <div className=" relative group dropdown-hover">
                            <div className="flex items-end text-xl group-hover:text-[#FAF3E0] cursor-pointer button-text">Admission<TiArrowSortedDown /></div>
                            <ul style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-[200px] p-2 shadow-sm absolute top-12 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 text-white text-[16px] font-bold cursor-pointer space-y-3">
                                <Link><li className='hover:text-red-300'>Admission Notice</li></Link>
                                <Link><li className='hover:text-red-300'>Examination Rules</li></Link>
                                <Link><li className='hover:text-red-300'>Admission Procedure</li></Link>
                                <Link><li className='hover:text-red-300'>Admission Timeline</li></Link>
                                <Link><li className='hover:text-red-300'>Admission Test</li></Link>
                                <Link><li className='hover:text-red-300'>Class-wise Fees</li></Link>
                                <Link><li className='hover:text-red-300'>Admission Requirement</li></Link>
                                <Link><li className='hover:text-red-300'>Required Documents for Admission</li></Link>
                            </ul>
                        </div>
                    </ul>
                    {/* Accommodation  */}
                    <ul className="">
                        <div className=" relative group dropdown-hover">
                            <div className="flex items-end text-xl group-hover:text-[#FAF3E0] cursor-pointer button-text">Accommodation <TiArrowSortedDown /></div>
                            <ul style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-[200px] p-2 shadow-sm absolute top-12 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 text-white text-[16px] font-bold cursor-pointer space-y-3">
                                <Link><li className='hover:text-red-300'>Hostel Overview</li></Link>
                                <Link><li className='hover:text-red-300'>Residential Halls & Administration</li></Link>
                                <Link><li className='hover:text-red-300'>Hostel Fees</li></Link>
                                <Link><li className='hover:text-red-300'>Hostel Regulations</li></Link>
                                <Link><li className='hover:text-red-300'>Hostel Admission Rules</li></Link>
                                <Link><li className='hover:text-red-300'>Daily Routine</li></Link>
                            </ul>
                        </div>
                    </ul>
                    {/* Publications */}
                    <ul className="">
                        <div className=" relative group dropdown-hover">
                            <div className="flex items-end text-xl group-hover:text-[#FAF3E0] cursor-pointer button-text">Publications<TiArrowSortedDown /></div>
                            <ul style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-[200px] p-2 shadow-sm absolute top-12 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 text-white text-[16px] font-bold cursor-pointer space-y-3">
                                <Link><li className='hover:text-red-300'>Annual Activities</li></Link>
                                <Link><li className='hover:text-red-300'>Monthly Publications</li></Link>
                                <Link><li className='hover:text-red-300'>Quarterly FaithBridge</li></Link>
                                <Link><li className='hover:text-red-300'>Biannual Publications</li></Link>
                                <Link><li className='hover:text-red-300'>Diary</li></Link>
                                <Link><li className='hover:text-red-300'>Wall Magazine</li></Link>
                                <Link><li className='hover:text-red-300'>Others</li></Link>
                                <Link><li className='hover:text-red-300'>Guidelines</li></Link>


                            </ul>
                        </div>
                    </ul>
                    {/* Library */}
                    <ul className="">
                        <div className=" relative group dropdown-hover">
                            <div className="flex items-end text-xl group-hover:text-[#FAF3E0] cursor-pointer button-text">Library<TiArrowSortedDown /></div>
                            <ul style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-[200px] p-2 shadow-sm absolute top-12 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 text-white text-[16px] font-bold cursor-pointer space-y-3">
                                <Link><li className='hover:text-red-300'>Library Overview</li></Link>
                                <Link><li className='hover:text-red-300'>Library Catalog</li></Link>
                                <Link><li className='hover:text-red-300'>Library Policies</li></Link>

                            </ul>
                        </div>
                    </ul>
                    {/* Laboratory */}
                    <ul className="">
                        <div className=" relative group dropdown-hover">
                            <div className="flex items-end text-xl group-hover:text-[#FAF3E0] cursor-pointer button-text">Laboratory<TiArrowSortedDown /></div>
                            <ul style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-[200px] p-2 shadow-sm absolute top-12 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 text-white text-[16px] font-bold cursor-pointer space-y-3">
                                <Link><li className='hover:text-red-300'>Laboratory Overview</li></Link>
                                <Link><li className='hover:text-red-300'>Laboratory Activities</li></Link>
                                <Link><li className='hover:text-red-300'>Laboratory Rules & Regulations</li></Link>

                            </ul>
                        </div>
                    </ul>
                    {/* Facilities */}
                    <ul className="">
                        <div className=" relative group dropdown-hover">
                            <div className="flex items-end text-xl group-hover:text-[#FAF3E0] cursor-pointer button-text">Facilities<TiArrowSortedDown /></div>
                            <ul style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-[200px] p-2 shadow-sm absolute top-12 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 text-white text-[16px] font-bold cursor-pointer space-y-3">
                                <Link><li className='hover:text-red-300'>Teacher Training</li></Link>
                                <Link><li className='hover:text-red-300'>Foundation Course</li></Link>
                                <Link><li className='hover:text-red-300'>Language Learning Course</li></Link>
                                <Link><li className='hover:text-red-300'>Activities</li></Link>

                            </ul>
                        </div>
                    </ul>
                    {/* Media */}
                    <ul className="">
                        <div className=" relative group dropdown-hover">
                            <div className="flex items-end text-xl group-hover:text-[#FAF3E0] cursor-pointer button-text">Media<TiArrowSortedDown /></div>
                            <ul style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-[200px] p-2 shadow-sm absolute top-12 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 text-white text-[16px] font-bold cursor-pointer space-y-3">
                               <Link><li className='hover:text-red-300'>Photo Gallery</li></Link>
                               <Link><li className='hover:text-red-300'>Video Gallery</li></Link>
                            </ul>
                        </div>
                    </ul>
                    {/* Contact */}
                    <ul className="">
                        <div className=" relative group dropdown-hover">
                            <div className="flex items-end text-xl group-hover:text-[#FAF3E0] cursor-pointer button-text">Contact<TiArrowSortedDown /></div>
                            <ul style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-[200px] p-2 shadow-sm absolute top-12 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 text-white text-[16px] font-bold cursor-pointer space-y-3">
                              <Link><li className='hover:text-red-300'>Contact</li></Link>

                            </ul>
                        </div>
                    </ul>
                    {/* Login */}
                    <ul className="">
                        <div className=" relative group dropdown-hover">
                            <div className="flex items-end text-xl group-hover:text-[#FAF3E0] cursor-pointer button-text">Login<TiArrowSortedDown /></div>
                            <ul style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-[165px] p-2 shadow-sm absolute top-12 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 text-white text-[16px] font-bold cursor-pointer space-y-3">
                                <li><Link to={'/login'}><button className='text-white button-text font-medium cursor-pointer hover:text-amber-600'>Login</button></Link></li>
                               


                            </ul>
                        </div>
                    </ul>

                    {
                        user && <Link to={'/dashboard'}> <p className='bg-amber-300 px-4 py-2 text-emerald-400 font-bold rounded cursor-pointer flex gap-2'><img className='w-6' src="https://img.icons8.com/?size=160&id=6xRZJrVWQLNn&format=png" alt="" />Dashboard</p></Link>
                    }

                </div>
            </div>

        </div>
    )
}

export default Navbar
