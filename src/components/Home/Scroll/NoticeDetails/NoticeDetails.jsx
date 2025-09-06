import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useAxiosPublic from '../../../../hooks/useAxiosPublic'

const NoticeDetails = () => {
    const axiosPublic = useAxiosPublic()
    const { id } = useParams()


    const { data: notice_details = {} } = useQuery({
        queryKey: ['notice-Details'],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/get-notice/${id}`)
            return data
        }
    })

    return (
        <div>
            <div className='bg-[#007B5E] py-6 px-7 md:flex justify-between items-center'>
                <h1 className='heading text-3xl font-medium text-white text-center md:text-start'>FaithBridge International Academy</h1>
                <div className='md:flex-row items-center justify-center mt-4 md:mt-0 flex flex-col-reverse'>
                    <div className='flex items-center'>
                        <Link to={'/'}><button className='btn btn-outline mr-7 border-2 border-white text-white font-bold'>Home</button></Link>
                    </div>


                </div>

            </div>

            <div className='max-w-4xl mx-auto mt-6'>
                <p>{notice_details?.notice_details}</p>
            </div>

        </div>

    )
}

export default NoticeDetails
