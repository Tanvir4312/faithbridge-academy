import React from 'react'

import useAxiosSecure from '../../../../../hooks/useAxiosSecure'
import useMoreImage from '../../../../../hooks/useMoreImage'
import Swal from 'sweetalert2'

const ViewMoreImage = () => {
    const [fetchMoreImage, refetch] = useMoreImage()
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
                    await axiosSecure.delete(`/image-more-delete/${id}`)

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
        <div className='max-w-5xl mx-auto mb-10'>
            <h2 className='text-2xl font-medium my-5'>All Image</h2>


           {fetchMoreImage.length ? <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            fetchMoreImage.map((image, idx) => <tr
                                key={idx}
                            >
                                <th>{idx + 1}</th>
                                <td><img className='w-20 h-20 rounded object-cover' src={image?.image} alt="" /></td>
                                <td><button onClick={() => handleDelete(image?._id)} className="btn bg-red-500">Delete</button></td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div> 
            :
            <p className='text-3xl text-red-500'>Images Not Available</p>
            }
        </div>
    )
}

export default ViewMoreImage
