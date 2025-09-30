import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useAxiosSecure from '../../../../../../../hooks/useAxiosSecure'
import { useState } from 'react'
import logo2 from '../../../../../../../assets/logo2.jpg'

const CertificateCopy = () => {
    const { id } = useParams()
    const axiosSecure = useAxiosSecure()
    const [certificateApplyCopy, setCertificateApplyCopy] = useState(null)
    const { profile, registration_no, student_name, transactionId, type } = certificateApplyCopy || {}

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axiosSecure.get(`/certificate-apply-copy/${id}`)
            setCertificateApplyCopy(data)
        }
        fetchData()
    }, [axiosSecure, id])
    console.log(certificateApplyCopy)
    return (
        <div className='max-w-5xl mx-auto my-5'>
            <div className='border p-6'>
                <div className='flex gap-3 justify-center'>
                    <img className='w-20' src={logo2} alt="" />
                    <div>
                        <h1 className='heading text-xl font-bold'>FaithBridge International Academy</h1>
                        <p className='font-medium'>Tongi, Gazipur-1712</p>
                    </div>
                </div>
               <div className='mt-4'>
                 <img className='w-20' src={profile} alt="" />
                 <p className='font-medium mt-4'><span className='text-xl font-bold'>Student Name:</span> {student_name}</p>
                 <p className='font-medium mt-4'><span className='text-xl font-bold'>REG NO:</span> {registration_no}</p>
                 <p className='font-medium mt-4'><span className='text-xl font-bold'>Transaction ID:</span> {transactionId}</p>
                 <p className='font-medium mt-4'><span className='text-xl font-bold'>Application For:</span> {type}</p>
               </div>
            </div>
             <div>
                <button
                    onClick={() => window.print()}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
                >
                    Save / Print
                </button>
            </div>
        </div>
    )
}

export default CertificateCopy
