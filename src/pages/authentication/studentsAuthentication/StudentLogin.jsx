import React from 'react'
import studentLoginBg from '../../../assets/student-login-bg.avif'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AuthenticationWithGoogle from '../Shared/AuthenticationWithGoogle/AuthenticationWithGoogle'
import useAuth from '../../../hooks/useAuth'
import { toast } from 'react-toastify'
import useAxiosPublic from '../../../hooks/useAxiosPublic'

const StudentLogin = () => {
    const { studentLogin, loginWithGoogle } = useAuth()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const handleStudentLogin = async e => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const password = form.password.value

        try {
            await studentLogin(email, password)
            toast.success('Login Successfully')
            navigate(from, {replace: true})
        } catch (err) {
            toast.error(err.message)
            console.log(err)
        }
    }

    const handleLoginWithGoogleBtn = () => {
        loginWithGoogle()
            .then(result => {
                const userInfo = {
                    email: result?.user?.email,
                    name: result?.user?.displayName,
                    role: 'student',
                    paymentVerified: false,
                    status: 'pending',

                };
                axiosPublic.post(`/user/${result?.user?.email}`, userInfo)
                toast.success('Signup successfully')
                console.log(result.user)
                navigate(from, {replace: true})
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className='max-w-6xl mx-auto'>
            <div style={{ backgroundImage: `url(${studentLoginBg})`, opacity: 0.3, }} className='absolute inset-0 z-0'>

            </div>
            <div className='relative z-10'>
                <div>
                    <h1 className='text-4xl font-bold heading text-center py-10'>Login</h1>
                </div>
                {/* input field */}
                <div className='md:max-w-2xl mx-auto max-w-64'>
                    <form onSubmit={handleStudentLogin}>
                        {/* student id */}
                        {/* <input type="text" placeholder="Student ID" className="input w-full" /> */}

                        {/* email */}
                        <label className="input validator w-full mt-4">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </g>
                            </svg>
                            <input
                                type="email"
                                name='email'
                                placeholder="mail@site.com"
                                required />
                        </label>
                        <div className="validator-hint hidden">Enter valid email address</div>

                        {/* password */}
                        <label className="input validator w-full mt-4">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                                    ></path>
                                    <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                </g>
                            </svg>
                            <input
                                type="password"
                                name='password'
                                required
                                placeholder="Password"
                                minLength="8"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                            />
                        </label>
                        <p className="validator-hint hidden">
                            Must be more than 8 characters, including
                            <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                        </p>

                        {/* button */}
                        <button className='btn btn-block btn-outline mt-5 hover:bg-blue-500 hover:text-white button-text'>Login</button>
                        {/* Login with google Button*/}
                        <div onClick={handleLoginWithGoogleBtn}>
                            <AuthenticationWithGoogle></AuthenticationWithGoogle>
                        </div>
                        <div>
                            <p>New here? Please <span className='underline text-blue-500'><Link to={'/register'}>Register</Link></span></p>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default StudentLogin
