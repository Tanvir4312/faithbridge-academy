import React from 'react'
import useNotice from '../../../../../hooks/useNotice'
import Swal from 'sweetalert2'
import useAxiosSecure from '../../../../../hooks/useAxiosSecure'
import { Link } from 'react-router-dom'

const ViewNotice = () => {
    const [notices, refetch] = useNotice()
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
                    await axiosSecure.delete(`/notice-delete/${id}`)

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

            <div className="overflow-x-auto mb-6">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Edit</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            notices.map((notice, idx) => <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td>{notice.notice_title}</td>
                                <td><Link to={`/admin_layout/notice-update/${notice._id}`}><button className='btn bg-[#007B5E] text-white'>Edit</button></Link></td>
                                <td><button onClick={() => handleDelete(notice._id)} className='btn bg-red-500 text-white'>Delete</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewNotice
