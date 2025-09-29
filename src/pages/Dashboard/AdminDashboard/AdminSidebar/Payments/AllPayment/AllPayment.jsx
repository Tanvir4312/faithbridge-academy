import React, { useEffect, useState } from 'react'
import useAxiosSecure from './../../../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Payment from '../Payment/Payment';
import { useLoaderData } from 'react-router-dom';


const AllPayment = () => {
    const axiosSecure = useAxiosSecure()
    const [payments, setPayments] = useState([])
    const { count } = useLoaderData()
    const [itemPerPage, setItemPerPage] = useState(4)
    const [currentPage, setCurrentPage] = useState(0)

    const { data: all_payment = [], refetch } = useQuery({
        queryKey: ['all-payment'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/all-payment-admin')
            setPayments(data)
            return all_payment
        }
    })

    // Search
    const handleSearch = async value => {
        const { data } = await axiosSecure.get(`/payments-search?search=${value}`)
        setPayments(data)

    }

    // Pagination
    const numberOfPages = Math.ceil(count / itemPerPage);
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

    const handleChange = value => {
        setItemPerPage(Number(value))
        setCurrentPage(0)
    }

    useEffect(() => {
        const fetchDataPagination = async () => {
            const { data } = await axiosSecure.get(`/data-pagination?page=${currentPage}&size=${itemPerPage}&type=paymentsData`)
            setPayments(data)
        }
        fetchDataPagination()
    }, [axiosSecure, currentPage, itemPerPage])

    // --- New Three Button Logic ---
    const visibleCount = 3;
    const start = Math.max(0, Math.min(currentPage - 1, numberOfPages - visibleCount));

    const length = Math.min(visibleCount, numberOfPages);
    const visiblePages = [...Array(length)].map((_, i) => start + i);
    return (
        <div className='max-w-6xl mx-auto'>
            <p className='text-green-500 text-3xl font-bold py-5'>All payment</p>
            <div className='mb-6'>
                <input onChange={(e) => handleSearch(e.target.value)} className='input w-full' type="search" placeholder='Search by Transaction ID, payment Type, Amount, Name' />


            </div>

            <div className='grid lg:grid-cols-2 gap-4'>
                {
                    payments.map(payment => <Payment
                        payment={payment}
                        refetch={refetch}
                        key={payment?._id}
                    ></Payment>)
                }
            </div>
            <button onClick={handlePrev} className='btn'>PREV</button>
            {start > 0 && <span className="mx-2 text-3xl">…</span>}
            {
                visiblePages.map((page, idx) => <button
                    onClick={() => setCurrentPage(page)}
                    key={idx}
                    className={`btn ml-4 my-7 ${currentPage === page ? 'bg-green-500 text-white' : ''}`}
                >{page}</button>)
            }
            {start + visibleCount < numberOfPages && <span className="mx-2 text-3xl">…</span>}
            <button onClick={handleNext} className="btn ml-4">NEXT</button>

            <div className='inline border ml-4 p-2'>
                <select onChange={(e) => handleChange(e.target.value)} defaultValue={itemPerPage}>
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="12">12</option>
                    <option value="15">15</option>
                </select>
            </div>
        </div>
    )
}

export default AllPayment
