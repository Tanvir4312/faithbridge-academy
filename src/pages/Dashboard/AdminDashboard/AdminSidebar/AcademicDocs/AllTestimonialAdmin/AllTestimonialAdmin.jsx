import React from 'react'
import { useEffect } from 'react'
import useAxiosSecure from '../../../../../../hooks/useAxiosSecure'
import { useLoaderData } from 'react-router-dom'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import TestimonialAdmin from './TestimonialAdmin/TestimonialAdmin'

const AllTestimonialAdmin = () => {
    const axiosSecure = useAxiosSecure()
    const [testimonials, setTestimonials] = useState([])
    const { count } = useLoaderData()
    const [itemPerPage, setItemPerPage] = useState(3)
    const [currentPage, setCurrentPage] = useState(0)


    const { data: allTestimonial = [], refetch } = useQuery({
        queryKey: ['all-testimonial'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('academic-docs-get-admin?text=testimonial')
            setTestimonials(data)
            return allTestimonial
        }
    })


    // Pagination
    const numberOfPages = Math.ceil(count / itemPerPage)
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

    const handleChange = val => {
        setItemPerPage(Number(val))
        setCurrentPage(0)
    }

    // Three visible button logic
    const visibleButton = 3
    const start = Math.max(0, Math.min(currentPage - 1, numberOfPages - visibleButton))

    const length = Math.min(visibleButton, numberOfPages)
    const visiblePages = [...Array(length)].map((__, i) => start + i)


    useEffect(() => {
        const fetchDataPagination = async () => {
            const { data } = await axiosSecure.get(`/data-pagination?page=${currentPage}&size=${itemPerPage}&type=testimonialsData`)
            setTestimonials(data)
        }
        fetchDataPagination()
    }, [axiosSecure, currentPage, itemPerPage])


    // Search
    const handleSearch = async val => {
        const { data } = await axiosSecure.get(`/testimonial-data-search?search=${val}`)
        setTestimonials(data)
    }

    return (
        <div className='max-w-6xl mx-auto'>
            <p className='text-green-500 text-3xl font-bold py-5'>All Testimonial Information</p>
            <div className='text-center'>
                <input onChange={(e) => handleSearch(e.target.value)} type="search" className='input mb-4 w-full' placeholder='Search by REG NO, Type, Status, Email And Transaction ID' />
            </div>

            <div className='grid lg:grid-cols-2 gap-4'>
                {
                    testimonials.map(testimonial => <TestimonialAdmin
                        testimonial={testimonial}
                        refetch={refetch}
                        key={testimonial?._id}
                    ></TestimonialAdmin>)
                }
            </div>

            <div className='my-7'>
                <button onClick={handlePrev} className="btn">PREV</button>
                {start > 0 && <span className='ml-3 font-bold'>...</span>}
                {
                    visiblePages.map((page, idx) => <button
                        onClick={() => setCurrentPage(page)}
                        key={idx}
                        className={`btn ml-4 ${currentPage === page ? 'bg-green-500 text-white' : ''}`}
                    >{page}</button>)
                }
                {start + visibleButton < numberOfPages && <span className='ml-3 font-bold'>...</span>}
                <button onClick={handleNext} className="btn ml-4">NEXT</button>
                <div className='inline border p-2 ml-4'>
                    <select onChange={(e) => handleChange(e.target.value)} defaultValue={itemPerPage}>
                        <option value="3">3</option>
                        <option value="6">6</option>
                        <option value="10">10</option>
                        <option value="14">14</option>
                    </select>
                </div>
            </div>

        </div>
    )
}

export default AllTestimonialAdmin
