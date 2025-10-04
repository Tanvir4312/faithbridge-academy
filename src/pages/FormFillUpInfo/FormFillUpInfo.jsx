import React from 'react'
import { Link } from 'react-router-dom'
import useStudentInfo from '../../hooks/useStudentInfo'
import Footer from '../../components/shared/Footer/Footer'
import useFormFillUpInfo from '../../hooks/useFormFillUpInfo'
import { useState } from 'react'
import { useEffect } from 'react'


const FormFillUpInfo = () => {
    const studentInfo = useStudentInfo()
    const [loading, setLoading] = useState(true)
    const formFillUpInfo = useFormFillUpInfo()

    const { class: student_class, class_roll, examination_name, examination_year, status, payment, _id } = formFillUpInfo || {}

  

    useEffect(() => {
        if (formFillUpInfo) {
            return setLoading(false)
        }
    }, [formFillUpInfo])

    return (

        <div>
            {loading ? '' : <>
                <div className='bg-[#007B5E] py-6 px-7 md:flex justify-between items-center'>
                    <h1 className='heading text-3xl font-medium text-white text-center md:text-start'>FaithBridge International Academy</h1>
                    <div className='flex items-center justify-center mt-4 md:mt-0'>
                        <Link to={'/'}><button className='btn btn-outline mr-7 border-2 border-white text-white font-bold'>Home</button></Link>
                        <Link to={'/dashboard/profile'}> <img className='w-15 h-15 rounded-full object-cover' src={studentInfo?.profile_image} alt="" /></Link>
                    </div>

                </div>
                <div className='max-w-6xl mx-auto my-8'>

                    <h3 className='text-2xl pb-3'>Form fill-up info</h3>

                    <div className="overflow-x-auto border border-gray-300">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr className='text-center bg-[#f5f5f5] border-b border-gray-300'>

                                    <th className='border-r border-gray-300'><div className='border border-gray-400 py-3 rounded font-bold bg-[#e8e8e8]'>Exam</div></th>
                                    <th className='border-r border-gray-300'><div className='border border-gray-400 py-3 rounded font-bold bg-[#e8e8e8]'>Roll</div></th>
                                    <th className='border-r border-gray-300'><div className='border border-gray-400 py-3 rounded font-bold bg-[#e8e8e8]'>Class</div></th>
                                    <th className='border-r border-gray-300'><div className='border border-gray-400 py-3 rounded font-bold bg-[#e8e8e8]'>Year</div></th>
                                    <th className='border-r border-gray-300'><div className='border border-gray-400 py-3 rounded font-bold bg-[#e8e8e8]'>Pay</div></th>
                                    <th className='border-r border-gray-300'><div className='border border-gray-400 py-3 rounded font-bold bg-[#e8e8e8]'>Authority Status</div></th>
                                    <th className='border-r border-gray-300'><div className='border border-gray-400 py-3 rounded font-bold bg-[#e8e8e8]'>Admit Card</div></th>


                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                {/* row 1 */}
                                <tr>

                                    <td className='border-r border-gray-300 w-3/12'>{examination_name}</td>
                                    <td className='border-r border-gray-300 w-1/12'>{class_roll}</td>
                                    <td className='border-r border-gray-300 w-1/12'>{student_class}</td>
                                    <td className='border-r border-gray-300 w-1/12'>{examination_year}</td>
                                    {payment === 'pending' ? <td className='border-r border-gray-300 w-1/12'><Link to={'/dashboard/apply-payment?text=form-fill-up'}><button className='btn bg-[#b71f1f] text-white'>Payment</button></Link> </td> : <td className='border-r border-gray-300 w-1/12'><p className='text-green-500 font-bold'>Verified</p></td>}
                                    <td className='border-r border-gray-300 w-3/12'>{status === 'pending' ? <span className='text-red-500'>Waiting for authority clearance</span> : <span className='text-green-500'>Verified</span>}</td>
                                    <td className='border-r border-gray-300 w-2/12'>{status === 'verified' &&<Link to={`/admit-card/${_id}`}> <button className='btn'>Admit Card</button></Link>}</td>

                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>

                <Footer></Footer>
            </>}

        </div>
    )
}

export default FormFillUpInfo
