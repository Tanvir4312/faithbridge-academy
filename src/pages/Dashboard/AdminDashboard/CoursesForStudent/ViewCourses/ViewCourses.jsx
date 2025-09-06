import React, { useState } from 'react'
import useCourses from '../../../../../hooks/useCourses'
import Swal from 'sweetalert2'
import useAxiosSecure from '../../../../../hooks/useAxiosSecure'
import UpdateCourseModal from '../UpdateCourseModal/UpdateCourseModal'

const ViewCourses = () => {
    const [courses, refetch] = useCourses()
    const axiosSecure = useAxiosSecure()
    const [dataId, setDataId] = useState(null)
    const [openModal, setOpenModal] = useState(false)
    const handleUpdateModal = (id) => {
        setDataId(id)
        setOpenModal(true)
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
                    await axiosSecure.delete(`/course-delete/${id}`)

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
            <h2 className='text-2xl font-medium my-5'>All Course</h2>

            {courses.length ? <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Action</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map((course, idx) => <tr
                                key={idx}
                            >
                                <th>{idx + 1}</th>
                                <td><img className='w-14 h-14 rounded object-cover' src={course?.icon} alt="" /></td>
                                <td>{course?.course_title}</td>
                                <td><button onClick={() => handleUpdateModal(course._id)} className="btn bg-[#007B5E] text-white">Update</button></td>
                                <td><button onClick={() => handleDelete(course?._id)} className="btn bg-red-500">Delete</button></td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div> : <p className='text-3xl text-red-500 my-10'>No Course Content Available</p>}

            <div>
                <UpdateCourseModal
                    id={dataId}
                    setOpenModal={setOpenModal}
                    openModal={openModal}
                    refetch={refetch}
                ></UpdateCourseModal>
            </div>
        </div>
    )
}

export default ViewCourses
