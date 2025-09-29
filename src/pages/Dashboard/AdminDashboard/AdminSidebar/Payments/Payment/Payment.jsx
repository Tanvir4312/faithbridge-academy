import React from 'react'
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../../../hooks/useAxiosSecure';

const Payment = ({ payment, refetch }) => {
    const axiosSecure = useAxiosSecure()
    const { paymentType, amount, transactionId, date, name, email, _id } = payment || {}

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
                       await axiosSecure.delete(`/payments-data-delete/${id}`)
   
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
                <h2 className='text-xl font-bold'>Payment Type: <span className='text-green-600 text-2xl'>{paymentType}</span></h2>
                <h2 className='text-xl font-bold'>Amount: <span className='text-green-600 text-2xl'>{amount}</span></h2>
                <h2 className='text-xl font-bold'>Transaction ID: <span className='text-green-600'>{transactionId}</span></h2>
                <p><span className='text-lg font-medium'>Date:</span> {new Date(date).toLocaleString()}</p>
                <p><span className='text-lg font-medium'>Name:</span>  {name}</p>
                <p><span className='text-lg font-medium'>Email:</span>  {email}</p>

                <div className='text-end'>
                    <button onClick={()=>handleDelete(_id)} className="btn bg-red-500 mt-4 text-white">Delete</button>
                </div>
            </div>
        </div>

    )
}

export default Payment
