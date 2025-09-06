import React from 'react'
import Swal from 'sweetalert2'
import useAxiosSecure from '../../../../../hooks/useAxiosSecure'
import useContactNumber from '../../../../../hooks/useContactNumber'

const ViewContactNumber = () => {
    const [numbers, refetch] = useContactNumber()
    const axiosSecure = useAxiosSecure()

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
                    await axiosSecure.delete(`/number-delete/${id}`)

                    refetch()
                } catch (err) {
                    console.log(err)
                }

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Coupon Delete Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    }
    return (
        <div className='max-w-6xl mx-auto'>
            <h1 className='text-2xl text-center my-7'>All Notice</h1>

            {numbers.length ? <div className="overflow-x-auto mb-6">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            numbers.map((number, idx) => <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td>{number.contact_number}</td>
                                <td><button onClick={() => handleDelete(number._id)} className='btn bg-red-500 text-white'>Delete</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
                :
                <p className='text-3xl text-red-500 mb-5'>No Number Available</p>}
        </div>
    )
}

export default ViewContactNumber
