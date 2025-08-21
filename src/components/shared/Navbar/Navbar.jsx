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
                                <ul tabIndex={0} style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center' }} className="dropdown-content menu rounded-box z-20 w-40 p-2 shadow-sm absolute top-4 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                            {/* Academics */}
                            <div className="dropdown dropdown-hover relative group ">
                                <div tabIndex={0} role="button" className="btn btn-ghost group-hover:bg-[#006E51]">Academics</div>
                                <ul tabIndex={0} style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-40 p-2 shadow-sm absolute top-4 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                            {/* Admission */}
                            <div className="dropdown dropdown-hover relative group ">
                                <div tabIndex={0} role="button" className="btn btn-ghost group-hover:bg-[#006E51]">Admission</div>
                                <ul tabIndex={0} style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-40 p-2 shadow-sm absolute top-4 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                            {/* Accommodation  */}
                            <div className="dropdown dropdown-hover relative group ">
                                <div tabIndex={0} role="button" className="btn btn-ghost group-hover:bg-[#006E51]">Accommodation </div>
                                <ul tabIndex={0} style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-40 p-2 shadow-sm absolute top-4 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                            {/* Publications */}
                            <div className="dropdown dropdown-hover relative group ">
                                <div tabIndex={0} role="button" className="btn btn-ghost group-hover:bg-[#006E51]">Publications</div>
                                <ul tabIndex={0} style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-40 p-2 shadow-sm absolute top-4 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                            {/* Library */}
                            <div className="dropdown dropdown-hover relative group ">
                                <div tabIndex={0} role="button" className="btn btn-ghost group-hover:bg-[#006E51]">Library</div>
                                <ul tabIndex={0} style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-40 p-2 shadow-sm absolute top-4 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                            {/* Laboratory */}
                            <div className="dropdown dropdown-hover relative group ">
                                <div tabIndex={0} role="button" className="btn btn-ghost group-hover:bg-[#006E51]">Laboratory</div>
                                <ul tabIndex={0} style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-40 p-2 shadow-sm absolute top-4 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                            {/* Facilities */}
                            <div className="dropdown dropdown-hover relative group ">
                                <div tabIndex={0} role="button" className="btn btn-ghost group-hover:bg-[#006E51]">Facilities</div>
                                <ul tabIndex={0} style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-40 p-2 shadow-sm absolute top-4 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                            {/* Media */}
                            <div className="dropdown dropdown-hover relative group ">
                                <div tabIndex={0} role="button" className="btn btn-ghost group-hover:bg-[#006E51]">Media</div>
                                <ul tabIndex={0} style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-40 p-2 shadow-sm absolute top-4 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                            {/* Contact */}
                            <div className="dropdown dropdown-hover relative group ">
                                <div tabIndex={0} role="button" className="btn btn-ghost group-hover:bg-[#006E51]">Contact</div>
                                <ul tabIndex={0} style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-40 p-2 shadow-sm absolute top-4 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                            {/* Login */}
                            <div className="dropdown dropdown-hover relative group ">
                                <div tabIndex={0} role="button" className="btn btn-ghost group-hover:bg-[#006E51]">Login</div>
                                <ul tabIndex={0} style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-40 p-2 shadow-sm absolute top-4 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
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
                            <ul style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-[165px] p-2 shadow-sm absolute top-12 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>

                            </ul>
                        </div>
                    </div>

                    {/* Academics */}
                    <ul className="">
                        <div className=" relative group dropdown-hover">
                            <div className="flex items-end text-xl group-hover:text-[#FAF3E0] cursor-pointer button-text">Academics<TiArrowSortedDown /></div>
                            <ul style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-[165px] p-2 shadow-sm absolute top-12 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>

                            </ul>
                        </div>
                    </ul>
                    {/* Admission */}
                    <ul className="">
                        <div className=" relative group dropdown-hover">
                            <div className="flex items-end text-xl group-hover:text-[#FAF3E0] cursor-pointer button-text">Admission<TiArrowSortedDown /></div>
                            <ul style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-[165px] p-2 shadow-sm absolute top-12 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>

                            </ul>
                        </div>
                    </ul>
                    {/* Accommodation  */}
                    <ul className="">
                        <div className=" relative group dropdown-hover">
                            <div className="flex items-end text-xl group-hover:text-[#FAF3E0] cursor-pointer button-text">Accommodation <TiArrowSortedDown /></div>
                            <ul style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-[165px] p-2 shadow-sm absolute top-12 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>

                            </ul>
                        </div>
                    </ul>
                    {/* Publications */}
                    <ul className="">
                        <div className=" relative group dropdown-hover">
                            <div className="flex items-end text-xl group-hover:text-[#FAF3E0] cursor-pointer button-text">Publications<TiArrowSortedDown /></div>
                            <ul style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-[165px] p-2 shadow-sm absolute top-12 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>

                            </ul>
                        </div>
                    </ul>
                    {/* Library */}
                    <ul className="">
                        <div className=" relative group dropdown-hover">
                            <div className="flex items-end text-xl group-hover:text-[#FAF3E0] cursor-pointer button-text">Library<TiArrowSortedDown /></div>
                            <ul style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-[165px] p-2 shadow-sm absolute top-12 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>

                            </ul>
                        </div>
                    </ul>
                    {/* Laboratory */}
                    <ul className="">
                        <div className=" relative group dropdown-hover">
                            <div className="flex items-end text-xl group-hover:text-[#FAF3E0] cursor-pointer button-text">Laboratory<TiArrowSortedDown /></div>
                            <ul style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-[165px] p-2 shadow-sm absolute top-12 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>

                            </ul>
                        </div>
                    </ul>
                    {/* Facilities */}
                    <ul className="">
                        <div className=" relative group dropdown-hover">
                            <div className="flex items-end text-xl group-hover:text-[#FAF3E0] cursor-pointer button-text">Facilities<TiArrowSortedDown /></div>
                            <ul style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-[165px] p-2 shadow-sm absolute top-12 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>

                            </ul>
                        </div>
                    </ul>
                    {/* Media */}
                    <ul className="">
                        <div className=" relative group dropdown-hover">
                            <div className="flex items-end text-xl group-hover:text-[#FAF3E0] cursor-pointer button-text">Media<TiArrowSortedDown /></div>
                            <ul style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-[165px] p-2 shadow-sm absolute top-12 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>

                            </ul>
                        </div>
                    </ul>
                    {/* Contact */}
                    <ul className="">
                        <div className=" relative group dropdown-hover">
                            <div className="flex items-end text-xl group-hover:text-[#FAF3E0] cursor-pointer button-text">Contact<TiArrowSortedDown /></div>
                            <ul style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-[165px] p-2 shadow-sm absolute top-12 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 2</a></li>

                            </ul>
                        </div>
                    </ul>
                    {/* Login */}
                    <ul className="">
                        <div className=" relative group dropdown-hover">
                            <div className="flex items-end text-xl group-hover:text-[#FAF3E0] cursor-pointer button-text">Login<TiArrowSortedDown /></div>
                            <ul style={{ backgroundImage: `url(${NavbarLogo})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="dropdown-content menu rounded-box z-20 w-[165px] p-2 shadow-sm absolute top-12 left-0 transition-all duration-400 ease-in-out translate-y-5 opacity-0 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                                <li><Link to={'/login'}><button className='text-white button-text font-medium cursor-pointer hover:text-amber-600'>Login</button></Link></li>
                                {/* <li><Link to={'/teachers-login'}><button className='text-white button-text font-medium cursor-pointer hover:text-amber-600'>Teachers Login</button></Link></li>
                                <li><Link><button className='text-white button-text font-medium cursor-pointer hover:text-amber-600'>Admin Login</button></Link></li> */}


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
