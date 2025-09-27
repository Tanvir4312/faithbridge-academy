import React, { useEffect, useState } from 'react'
import useAxiosSecure from '../../../../../../hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import InfoCard from './InfoCard/InfoCard'
import { useLoaderData } from 'react-router-dom'

const FormFillUpInfoAdmin = () => {
    const axiosSecure = useAxiosSecure()
    const [formFillUpInfo, setFormFillUpInfo] = useState([])
    const [itemPerPage, setItemPerPage] = useState(3)
    const [currentPage, setCurrentPage] = useState(0)
    const { count } = useLoaderData()


    const { refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/formFill-up-info')
            setFormFillUpInfo(data)
            return data
        }
    })


    const handleSearch = async value => {

        const { data } = await axiosSecure.get(`/formFill-up-info-data?search=${value}`)

        setFormFillUpInfo(data)
    }

    // Pagination
    const numberOfPages = Math.ceil(count / itemPerPage);
    const pages = [...Array(numberOfPages).keys()]

    const handleChange = e => {
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
        const fetchData = async () => {
            const { data } = await axiosSecure.get(`data-pagination?page=${currentPage}&size=${itemPerPage}&type=formDataPagination`)
            setFormFillUpInfo(data)
        }

        fetchData()
    }, [axiosSecure, currentPage, itemPerPage])

    return (
        <div className='max-w-6xl mx-auto'>
            <div className='text-center mt-4 md:flex items-center gap-3'>
                <input onChange={(e) => handleSearch(e.target.value)} className='input w-full' type="search" placeholder='Search Here REG No, Status, Payment Status, Name' />

            </div>
            <h1 className='text-3xl font-bold my-5'> Form Fill Up Info</h1>
            <div className='grid lg:grid-cols-2 gap-3'>
                {
                    formFillUpInfo.map((info, idx) => <InfoCard
                        key={idx}
                        info={info}
                        idx={idx}
                        refetch={refetch}
                    ></InfoCard>)
                }
            </div>


            <div className='mb-6'>
                <button onClick={handlePrev} className='btn'>PREV</button>
                {
                    pages.map((idx, page) => <button onClick={() => setCurrentPage(page)} key={idx} className={`btn ml-5 ${currentPage === page ? 'bg-green-500 text-white' : ''}`}>{page}</button>)
                }
                <button onClick={handleNext} className="btn ml-5">NEXT</button>
                <div className='inline ml-5 border px-2 py-1'>
                    <select defaultValue={itemPerPage} onChange={(e) => handleChange(e.target.value)}>
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="7">7</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default FormFillUpInfoAdmin
