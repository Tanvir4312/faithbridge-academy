import React from 'react'
import useAxiosSecure from '../../../../../../../hooks/useAxiosSecure'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'

const InfoCard = ({ info, idx, refetch }) => {
    const axiosSecure = useAxiosSecure()
    const {
        class_roll, name_bn, name_en, payment, image, registration_no, status, signature, father_name, mother_name, examination_name, examination_year, class: studentClass, group, _id
    } = info || {}

    const handleAccept = async (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, Accept it!`
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axiosSecure.patch(`/formFill-up-data/${id}`)
                    refetch()
                    toast.success('Accepted Successfully')

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
                    await axiosSecure.delete(`/formFill-up-data-delete/${id}`)

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
            <h3 className='text-xl text-center font-bold'>Status: <span className={`${status === 'pending' ? 'text-red-600' : 'text-green-600'}`}>{status === 'pending' ? 'Pending' : 'verified'}</span></h3>
            <div className='flex justify-center mt-4'>
                <img className='w-24 h-24' src={image} alt="" />
            </div>
            <div className='p-5 '>
                <div className='flex gap-4'>
                    <div className='w-full'>

                        <p>REG NO: <span className='font-bold'>{registration_no}</span></p>

                        <p className={`font-bold ${payment === 'Done' ? 'text-green-600' : 'text-red-600'}`}>Payment: {payment === 'Done' ? 'Done' : 'Pending'}</p>
                        <p>Name(English): {name_en}</p>
                        <p>Name(Bangla): {name_bn}</p>
                        <p>Father Name: {father_name}</p>
                        <p>Mother Name: {mother_name}</p>
                    </div>
                    <div className='w-full'>
                        <p>Class: {studentClass}</p>
                        <p>Exam: {examination_name}</p>
                        <p>Year: {examination_year}</p>
                        <p>Class Roll: {class_roll}</p>
                        <p>Group: {group}</p>


                    </div>
                </div>

                <div className='flex justify-center'>
                    <img className='w-40 h-16' src={signature} alt="" />
                </div>

            </div>




            <div className='flex flex-wrap justify-evenly mt-5 text-white'>
                <button disabled={payment === 'pending' || status === 'verified'} onClick={() => handleAccept(_id)} className="btn bg-blue-600 text-white">Accept</button>

                <button onClick={() => handleDelete(_id)} className="btn mt-4 md:mt-0 bg-orange-500 text-white">Delete</button>
            </div>
        </div>
    )
}

export default InfoCard
