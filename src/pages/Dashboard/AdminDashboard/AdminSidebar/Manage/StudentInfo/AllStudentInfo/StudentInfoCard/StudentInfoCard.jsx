import React from 'react'
import useAxiosSecure from '../../../../../../../../hooks/useAxiosSecure'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'

const StudentInfoCard = ({ info, idx, refetch }) => {
    const axiosSecure = useAxiosSecure()
    const { birth_certificate_no
        , class_roll
        , dob
        , email
        , gender
        , name_bn
        , name_en
        , payment_status
        , profile_image
        , registration_no
        , status
        , academic
        , address
        , admission_info, contact
        , guardian
        , _id
        , status_exam } = info || {}

    const handleButton = async (id, text) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, ${text === 'exam' ? 'Accept' : text} it!`
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axiosSecure.patch(`/update-student-data/${id}`, { text })
                    refetch()
                    toast.success(`${text === 'accept' ? 'Accepted' : text === 'exam' ? 'Accept for Exam' : 'Rejected'}`)

                } catch (err) {
                    console.log(err)
                }
            }
        });

    }

    // Delete
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axiosSecure.delete(`/student-delete/${id}`)

                    refetch()
                } catch (err) {
                    console.log(err)
                }

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Data Delete Successfully",
                    showConfirmButton: false,
                    timer: 1000
                });
            }
        });
    }
    return (
        <div className='border-2 border-[#007b5e] mx-4 mb-8 py-2'>
            <p className='font-bold pl-5'>{idx + 1}</p>
            <h3 className='text-xl text-center font-bold'>Status: <span className={`${status === 'pending' ? 'text-yellow-600' : status === 'verified' ? 'text-green-600' : 'text-red-600'}`}>{status === 'pending' ? 'Pending' : status === 'verified' ? 'Verified Student' : 'Rejected'}</span></h3>
            <div className='md:flex gap-2'>
                <div className='flex gap-2 p-2'>
                    <img className='w-16 h-16' src={profile_image} alt="" />
                    <div className='text-sm'>
                        <p className={`font-bold ${status_exam === 'verified' ? 'text-green-600' : 'text-red-600'}`}>Admission Exam: {status_exam === 'verified' ? 'Verified' : 'Pending'}</p>
                        <p>Name(English): {name_en}</p>
                        <p>Name(Bangla): {name_bn}</p>
                        <p>Father Name: {guardian?.father_name}</p>
                        <p>Mother Name: {guardian?.mother_name}</p>
                        <p>Email: {email}</p>
                        <p>REG NO: <span className='font-bold'>{registration_no}</span></p>
                        <p>Payment: <span className={`font-bold ${payment_status === 'Pending' ? 'text-red-600' : 'text-green-600'}`}>{payment_status}</span></p>
                        <p>Gender: {gender}</p>
                        <p>DOB: {dob}</p>
                        <p>Birth certificate no: {birth_certificate_no}</p>
                        {status === 'verified' && <p>Running Class: {admission_info?.desired_class}</p>}
                        {status === 'verified' && <p>Class Roll: {class_roll}</p>}
                        <p>quota: {admission_info?.quota ? admission_info?.quota : 'N/A'}</p>
                        {academic?.jdc_or_jsc_exam && <p>Previous School: {academic?.previous_school}</p>}
                    </div>
                </div>
                <div className='px-5 md:px-0'>
                    <h5 className='font-medium'>Academic Info</h5>
                    <div className='text-sm'>
                        {
                            academic?.jdc_or_jsc_exam ? <>
                                <p className='text-center'>JSC/JDC</p>
                                <hr />
                                <p>JSC/JDC: {academic?.jdc_or_jsc_exam}</p>
                                <p>JSC/JDC REG No: {academic?.jdc_or_jsc_exam_reg_no}</p>
                                <p>JSC/JDC Result: {academic?.jdc_or_jsc_exam_result}</p>
                                <p>JSC/JDC Roll: {academic?.jdc_or_jsc_exam_roll}</p>
                                <p>JSC/JDC Board: {academic?.jsc_or_jdc_exam_board}</p>
                                <p>JSC/JDC Year: {academic?.jsc_or_jdc_exam_year}</p>
                                <p>JSC/JDC Session: {academic?.jsc_or_jdc_session}</p>
                                <p>Institute: {academic?.jsc_or_jdc_Institute}</p>
                            </>

                                :
                                <>
                                    <p>Previous Class: {academic?.previous_class}</p>
                                    <p>Previous Class Final Result: {academic?.previous_class_final_exam_result}</p>
                                    <p>Previous School: {academic?.previous_school}</p>

                                    <p>TC: {academic?.tc_status === true ? 'Yes' : 'No'}</p>
                                </>
                        }
                    </div>
                </div>

            </div>

            <div className='md:flex gap-3 px-4 text-sm'>
                <div>
                    {
                        academic?.ssc_or_dakhil_exam && <>
                            <h5 className='font-medium'>Academic Info</h5>
                            <p className='text-center'>SSC/DAKHIL</p>
                            <hr />
                            <p>SSC/DAKHIL: {academic?.ssc_or_dakhil_exam}</p>
                            <p>SSC/DAKHIL REG No: {academic?.ssc_or_dakhil_exam_reg_no}</p>
                            <p>SSC/DAKHIL Result: {academic?.ssc_or_dakhil_exam_result}</p>
                            <p>SSC/DAKHIL Roll: {academic?.ssc_or_dakhil_exam_roll}</p>
                            <p>SSC/DAKHIL Board: {academic?.ssc_or_dakhil_board}</p>
                            <p>SSC/DAKHIL Year: {academic?.ssc_or_dakhil_exam_year}</p>
                            <p>SSC/DAKHIL Session: {academic?.ssc_or_dakhil_session}</p>
                            <p>Institute: {academic?.ssc_or_dakhil_Institute}</p>
                        </>
                    }

                </div>
                <div className='mt-4 md:flex gap-4'>
                    <div>
                        <h5 className='font-medium'>Admission Info</h5>
                        <p>Desired Class: {admission_info?.desired_class}</p>
                        <p>Group: {admission_info?.group}</p>
                        <p>Year: {admission_info?.year}</p>
                    </div>

                    <div className='mt-4 md:mt-0'>
                        <h5 className='font-medium'>Address</h5>
                        <p>Permanent: {address?.permanent}</p>
                        <p>Present: {address?.present}</p>
                    </div>
                    {academic?.ssc_or_dakhil_exam ? '' : <div className='mt-4 md:mt-0'>
                        <h5 className='font-medium'>Contact</h5>
                        <p>Student Number: {contact?.student_mobile}</p>
                        <p>Guardian Number: {contact?.guardian_mobile}</p>
                    </div>}

                </div>
            </div>
            {academic?.ssc_or_dakhil_exam &&
                <div className='mt-4 px-4 md:mt-0'>
                    <h5 className='font-medium'>Contact</h5>
                    <p>Student Number: {contact?.student_mobile}</p>
                    <p>Guardian Number: {contact?.guardian_mobile}</p>
                </div>
            }

            <div className='flex flex-wrap justify-evenly mt-5 text-white'>
                <button disabled={status_exam === 'verified' || status === 'rejected'} onClick={() => handleButton(_id, 'exam')} className="btn bg-blue-600 text-white">Accept for Exam</button>
                <button disabled={status === 'verified' || status === 'rejected' || !status_exam} onClick={() => handleButton(_id, 'accept')} className="btn bg-green-600 text-white">Accept</button>
                <button disabled={status === 'verified' || status === 'rejected'} onClick={() => handleButton(_id, 'reject')} className="btn mt-4 md:mt-0 bg-red-600 text-white">Reject</button>
                <button onClick={() => handleDelete(_id)} className="btn mt-4 md:mt-0 bg-orange-500 text-white">Delete</button>
            </div>
        </div>
    )
}

export default StudentInfoCard
