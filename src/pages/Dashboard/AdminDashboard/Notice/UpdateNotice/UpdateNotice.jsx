
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useAxiosSecure from '../../../../../hooks/useAxiosSecure'


const UpdateNotice = () => {
    const { id } = useParams()
    const axiosSecure = useAxiosSecure()
    const [notice, setNotice] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchNotice = async () => {
            const res = await axiosSecure.get(`/get-notice/${id}`)
            setNotice(res.data)
        }
        fetchNotice()
    }, [axiosSecure, id])

    const handleUpdateNotice = async e => {
        e.preventDefault()

        const form = e.target;
        const title = form.title.value;
        const details = form.details.value;

        const update_notice = {
            notice_title: title,
            notice_details: details
        }
        console.log(update_notice)

        await axiosSecure.patch(`/notice-update/${id}`, update_notice)
        navigate('/admin_layout/view-notice')

    }

    return (
        <div className='max-w-3xl mx-auto mb-10'>
            <h1 className='text-2xl text-center my-7'>Update Notice</h1>
            <div className='border-2 border-[#007B5E] p-5'>
                <form onSubmit={handleUpdateNotice} className='space-y-5'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Title</legend>
                        <input defaultValue={notice?.notice_title} className='input w-full' type="text" name="title" id="" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Details</legend>
                        <textarea defaultValue={notice?.notice_details} className='textarea w-full' name="details" rows="20"></textarea>
                    </fieldset>
                    <button className="btn btn-block bg-[#007B5E] text-white">Update</button>
                </form>
            </div>


        </div>
    )
}

export default UpdateNotice
