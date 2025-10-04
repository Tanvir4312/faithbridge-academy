import React from 'react'
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const ShowRoutine = ({ routine, refetch, idx }) => {
    const axiosSecure = useAxiosSecure()
    const { class_name, day, subject, time_slot, teachers_name, group, _id } = routine || {}

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
                    await axiosSecure.delete(`/routine-data-delete/${id}`)

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
        <tr>
            <th>{idx + 1}</th>
            <td>{class_name}</td>
            <td>{day}</td>
            <td>{group? group : ''}</td>
            <td>{subject ? subject : <span className='font-bold'>Break</span>}</td>
            <td>{time_slot}</td>
            <td>{teachers_name}</td>
            <td><Link to={`/admin_layout/update-routine/${_id}`}><button className="btn bg-blue-500 text-white">Update</button></Link></td>
            <td><button onClick={() => handleDelete(_id)} className="btn bg-red-500">Delete</button></td>
        </tr>

    )
}

export default ShowRoutine
