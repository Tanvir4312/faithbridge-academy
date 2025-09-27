import React from 'react'
import studentLoginBg from '../../../assets/student-login-bg.avif'
import { Link, useNavigate } from 'react-router-dom'
import AuthenticationWithGoogle from '../Shared/AuthenticationWithGoogle/AuthenticationWithGoogle'
import { useForm } from 'react-hook-form';

import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAuth from '../../../hooks/useAuth';
import { toast } from 'react-toastify';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const Register = () => {
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit } = useForm()
    const { userCreate, profileUpdate } = useAuth()
    const navigate = useNavigate()
    const onSubmit = async (data) => {


        const email = data?.email
        const password = data?.password
        const name = data?.name

        const imageFile = data.image[0]

        const formData = new FormData()
        formData.append("image", imageFile)

        const res = await axiosPublic.post(image_hosting_api, formData, {
            headers: { 'content-type': 'multipart/form-data' }
        })
        const image = res.data.data.display_url

        try {
            // User create
            await userCreate(email, password)

            // Profile Update
            await profileUpdate(name, image)


            // post user info
            const userInfo = {

                name,
                email,
                role: 'user',


            }

            await axiosPublic.post("/user", userInfo)
            toast.success('Signup successfully')
            navigate('/')
        } catch (err) {
            toast.error(err)
        }

    }



    return (
        <div className='relative min-h-screen'>
            <div style={{ backgroundImage: `url(${studentLoginBg})`, opacity: 0.3, }} className='absolute inset-0 z-0'>

            </div>
            <div className='relative z-10 pb-14 lg:pb-0'>
                <div>
                    <h1 className='text-4xl font-bold heading text-center py-10'>Please Register</h1>
                </div>
                {/* input field */}
                <div className='md:max-w-2xl mx-auto max-w-64'>
                    <form onSubmit={handleSubmit(onSubmit)}>


                        {/* Name */}
                        <label className="input validator w-full mt-4">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </g>
                            </svg>
                            <input
                                type="text"
                                {...register("name")}

                                required
                                placeholder="Username"

                            />
                        </label>
                        <p className="validator-hint">
                            Must be 3 to 30 characters
                            <br />containing only letters, numbers or dash
                        </p>

                        {/* email */}
                        <label className="input validator w-full -mt-8">
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
                                {...register("email")}
                                name='email'
                                placeholder="mail@site.com"
                                required />
                        </label>
                        <div className="validator-hint hidden">Enter valid email address</div>
                        <p className="text-red-500 text-sm mt-1"> ⚠️ Please enter your valid email address carefully. Once registered, this email cannot be changed. </p>

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
                                {...register("password")}

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

                        {/* Image */}
                        <div className='mt-6'>
                            <input
                                type="file"
                                {...register("image")}

                                className="file-input file-input-ghost" />
                        </div>

                        {/* button */}
                        <button className='btn btn-block btn-outline mt-5 hover:bg-blue-500 hover:text-white button-text'>Register</button>

                        <div className=''>
                            <p>Already account? Please <span className='underline text-blue-500'><Link to={'/login'}>Login</Link></span></p>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default Register
