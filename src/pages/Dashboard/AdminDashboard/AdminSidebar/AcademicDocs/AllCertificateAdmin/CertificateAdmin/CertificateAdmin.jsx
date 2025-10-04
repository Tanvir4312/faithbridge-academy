import React from 'react'
import useAxiosSecure from '../../../../../../../hooks/useAxiosSecure'
import Swal from 'sweetalert2'

const CertificateAdmin = ({certificate, refetch}) => {
   
      const axiosSecure = useAxiosSecure()
    const { registration_no, student_name, type, transactionId, identity_doc_img, status, email, _id } = certificate || {}

       // Accept
            const handleAccept = id => {
                Swal.fire({
                    title: "Are you sure to Accept?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, Accept it!"
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        try {
                            await axiosSecure.patch(`/academic-docs-update/${id}?text=certificates`)
        
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
                            await axiosSecure.delete(`/academic-docs-delete/${id}?text=certificates`)
        
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
    <div className='border p-5'>
            <div className=''>
                <h2 className='text-xl font-bold'>REG NO: <span className='text-green-600 text-2xl'> {registration_no}</span></h2>
                <h2 className='text-xl font-bold'>Name: <span className='text-green-600 text-2xl'> {student_name}</span></h2>
                <h2 className='text-xl font-bold'>Transaction ID: <span className='text-green-600'> {transactionId}</span></h2>

                <p><span className='text-lg font-medium'>status:</span><span className={`font-bold ${status === 'pending' ? 'text-red-500' : 'text-green-500'}`}> {status}</span></p>
                <p><span className='text-lg font-medium'>Type:</span><span className='text-xl font-bold'> {type}</span></p>
                <p><span className='text-lg font-medium'>email:</span> {email}</p>
                <div className='flex gap-5'>
                    <p>Admit Card:</p>
                <img className='w-40 h-40 mt-4' src={identity_doc_img} alt="" />

                </div>
                <div className='flex items-center justify-between'>
                    <button onClick={() => handleAccept(_id)} className="btn bg-blue-500 mt-4 text-white">Accept</button>
                    <button onClick={() => handleDelete(_id)} className="btn bg-red-500 mt-4 text-white">Delete</button>
                </div>
            </div>
        </div>
  )
}

export default CertificateAdmin
