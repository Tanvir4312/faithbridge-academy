import React, { useState } from 'react'
import useAxiosSecure from '../../../../../../../hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import Swal from 'sweetalert2'
import { useLoaderData } from 'react-router-dom'
import { useEffect } from 'react'

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const [users, setUsers] = useState([])
    const { count } = useLoaderData()
    const { refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/all-user')
            setUsers(data)
            return data
        }
    })

    // Pagination---------

    const [itemPerPage, setItemPerPage] = useState(3)
    const [currentPage, setCurrentPage] = useState(0)

    const numberOfPages = Math.ceil(count / itemPerPage)
    const pages = [...Array(numberOfPages).keys()]

    const handleItemPerPage = e => {
        setItemPerPage(Number(e))
        setCurrentPage(0)
    }

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }

    }
    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }

    }

    useEffect(() => {
        const fetchPagination = async () => {
            const { data } = await axiosSecure.get(`/data-pagination?page=${currentPage}&size=${itemPerPage}`)
            setUsers(data)

        }
        fetchPagination()
    }, [axiosSecure, currentPage, itemPerPage])

    // Update-----
    const handleMakeTeacher = async id => {
        Swal.fire({
            title: "Are you sure to make role Teacher?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axiosSecure.patch(`/make-teacher/${id}`)
                    refetch()
                } catch (err) {
                    console.log(err)
                }

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Make Role Teacher Successfully",
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
                    await axiosSecure.delete(`/user-delete/${id}`)

                    refetch()
                } catch (err) {
                    console.log(err)
                }

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Delete Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    }


    const handleSearch = async (value) => {
        console.log(value)
        const { data } = await axiosSecure.get(`/users-search?search=${value}`)
        setUsers(data)
    }
    console.log(count)
    return (
        <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl font-bold text-center my-5'>All User</h2>
            <div className='text-center my-5'>
                <input onChange={(e) => handleSearch(e.target.value)} className='input' type="search" name="" placeholder='Search' />
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, idx) => <tr
                                key={idx}
                            >
                                <th>{idx + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td className={`${user?.role === 'user' ? 'text-red-500'
                                    : user?.role === 'student' ? 'text-green-500'
                                        : user?.role === 'admin' ? 'text-yellow-500 font-bold'
                                            : 'text-blue-500'}`}>{user?.role === 'user' && 'User'}{user?.role === 'teacher' && 'Teacher'}{user?.role === 'student' && 'Student'}{user?.role === 'admin' && 'Admin'}</td>
                                <td><button disabled={user?.role === 'admin' || user?.role === 'student' || user?.role === 'teacher'} onClick={() => handleMakeTeacher(user?._id)} className="btn">Make Teacher</button></td>
                                <td><button disabled={user?.role === 'admin'} onClick={() => handleDelete(user?._id)} className="btn bg-red-500">Delete</button></td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            <div className='my-6'>
                <button onClick={handlePrev} className="btn">Prev</button>
                {
                    pages.map((page, idx) => <button onClick={() => setCurrentPage(page)} key={idx} className={`btn ml-4 ${currentPage === page ? 'bg-[#007b5e] text-white' : ''}`}>{page}</button>)
                }
                <button onClick={handleNext} className="btn ml-4">Next</button>
                <div className='inline ml-4 border py-1 px-2'>
                   
                        <select defaultValue={3} onChange={(e) => handleItemPerPage(e.target.value)} name="">
                            <option value="3">3</option>
                            <option value="6">6</option>
                            <option value="8">8</option>
                            <option value="10">10</option>
                        </select>
                    
                </div>
            </div>
        </div>
    )
}

export default AllUsers
