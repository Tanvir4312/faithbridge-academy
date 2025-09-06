import React from 'react'
import Footer from '../../components/shared/Footer/Footer'
import { Link } from 'react-router-dom'
import useStudentInfo from '../../hooks/useStudentInfo'
import FormFillUpField from './FormFillUpField'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import { useState } from 'react'
import { useEffect } from 'react'
import Marquee from "react-fast-marquee";

const FormFillUp = () => {
    const [showField, setShowField] = useState(null)
    const [showMessage, setShowMessage] = useState(null)
    const [endtime, setEndTime] = useState(null)
    const studentInfo = useStudentInfo()
    const axiosSecure = useAxiosSecure()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchTime = async () => {
        try {
            const res = await axiosSecure.get('/form-fill-up-time');
            if (res.status === 200) {
                setShowField(true)
                setEndTime(res.data.end_time)
             
            }

        } catch (err) {
            if (err.status === 403) {
                setShowMessage(err.response.data.message)
            }
        }
    }

    useEffect(() => {
        fetchTime()

        const interval = setInterval(() => {
            if (endtime) {
                const nowData = new Date()
                if (nowData > new Date(endtime)) {
                    setShowField(false)
                    clearInterval(interval)
                }
            }
        }, 1000)
        return () => clearInterval(interval)
    }, [endtime, fetchTime])
    return (
        <div>
            <div className='bg-[#007B5E] py-6 px-7 md:flex justify-between items-center'>
                <h1 className='heading text-3xl font-medium text-white text-center md:text-start'>FaithBridge International Academy</h1>
                <div className='flex items-center justify-center mt-4 md:mt-0'>
                    <Link to={'/'}><button className='btn btn-outline mr-7 border-2 border-white text-white font-bold'>Home</button></Link>
                    <Link to={'/dashboard/profile'}> <img className='w-15 h-15 rounded-full object-cover' src={studentInfo?.profile_image} alt="" /></Link>
                </div>

            </div>
            <div className='max-w-3xl mx-auto mt-5 bg-gray-200 px-5 rounded'>
                {showField && <Marquee><p className='text-lg font-medium py-3'>The form fill-up time will end on <span className='text-2xl font-medium text-orange-400'>{endtime}</span></p></Marquee>}
            </div>

            {showField ? <div className='max-w-4xl mx-auto'>
                <h1 className='text-3xl font-bold text-center py-5'>Form fill-up</h1>
                <FormFillUpField></FormFillUpField>
            </div> : <p className='text-3xl text-red-500 font-bold my-10 mx-10'>{showMessage}</p>}

            <Footer></Footer>
        </div>
    )
}

export default FormFillUp
