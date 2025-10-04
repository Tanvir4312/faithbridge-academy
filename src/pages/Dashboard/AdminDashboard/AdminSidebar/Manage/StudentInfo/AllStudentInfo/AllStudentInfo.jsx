import React, { useEffect, useState } from 'react'
import useAxiosSecure from '../../../../../../../hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import StudentInfo from '../StudentInfo'
import StudentInfoCard from './StudentInfoCard/StudentInfoCard'
import { useLoaderData } from 'react-router-dom'

const AllStudentInfo = () => {
    const axiosSecure = useAxiosSecure()
    const [studentsInfo, setStudentsInfo] = useState([])
    const { count } = useLoaderData()
    const [itemPerPage, setItemPerPage] = useState(3)
    const [currentPage, setCurrentPage] = useState(0)

    const { refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/all-student-info')
            setStudentsInfo(data)
            return data
        }
    })

    const handleSearch = async value => {

        const { data } = await axiosSecure.get(`/student-info?search=${value}`)
        setStudentsInfo(data)
    }
    const handlePaymentSearch = async value => {

        const { data } = await axiosSecure.get(`/student-payment-info?search=${value}`)
        setStudentsInfo(data)
    }

    // Pagination
    const numberOfPages = Math.ceil(count / itemPerPage) ;
    const pages = [...Array(numberOfPages).keys()]

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

    const handleItemPerPage = e => {
        setItemPerPage(Number(e))
        setCurrentPage(0)
    }

    useEffect(() => {
        const fetchPaginationData = async () => {
            const { data } = await axiosSecure.get(`data-pagination?page=${currentPage}&size=${itemPerPage}&type=studentsPagination`)
            setStudentsInfo(data)
        }
        fetchPaginationData()
    }, [axiosSecure, currentPage, itemPerPage])

    return (
        <div className='max-w-6xl mx-auto'>
            <div className='text-center mt-4 md:flex items-center gap-3'>
                <input onChange={(e) => handleSearch(e.target.value)} className='input w-full' type="search" placeholder='Search Here REG No, Status, Email, Admission Exam' />
                <input onChange={(e) => handlePaymentSearch(e.target.value, 'payment')} className='input w-full mt-4 md:mt-0' type="search" placeholder='Search here for payment status' />
            </div>
            <h1 className='text-3xl font-bold my-5'> All Student Info</h1>
            <div className='grid lg:grid-cols-2 gap-3'>
                {
                    studentsInfo.map((info, idx) => <StudentInfoCard
                        key={idx}
                        info={info}
                        idx={idx}
                        refetch={refetch}
                    ></StudentInfoCard>)
                }
            </div>

            <div className='mb-6'>
                <button onClick={handlePrev} className='btn hover:bg-slate-400 hover:text-white'>PREV</button>
                {
                    pages.map((page, idx) => <button onClick={() => setCurrentPage(page)} key={idx} className={`btn ml-4 ${currentPage === page ? 'bg-green-600 text-white' : ''}`}>{page}</button>)
                }
                <button onClick={handleNext} className='btn ml-5 hover:bg-slate-400 hover:text-white'>NEXT</button>

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

export default AllStudentInfo
