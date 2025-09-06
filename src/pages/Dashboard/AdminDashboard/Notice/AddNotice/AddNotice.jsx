import React from 'react'
import useAxiosSecure from '../../../../../hooks/useAxiosSecure'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AddNotice = () => {
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const handleAddNotice = async e => {
        e.preventDefault()

        const form = e.target;
        const notice_title = form.notice_title.value;
        const notice_details = form.notice_details.value;

        const notice = {
            notice_title,
            notice_details,
            date: new Date()
        }

        await axiosSecure.post('/notice', notice)
        toast.success('Notice saved successfully')
        navigate('/admin_layout/view-notice')
        form.reset()
    }
    return (
        <div className='max-w-6xl mx-auto'>
            <h1 className='text-3xl font-bold text-center my-4'>Add Notice</h1>
            <div className='border border-[#007B5E] my-9 max-w-3xl mx-auto p-9'>
                <form className='space-y-5' onSubmit={handleAddNotice}>
                    <input className='input w-full' type="text" name="notice_title" placeholder="Notice Title" required />

                    <textarea name="notice_details" className="textarea h-24 w-full" placeholder="Notice Details"></textarea>


                    <button className='btn btn-block bg-[#0bf1bb] font-medium'>Add Notice</button>
                </form>

            </div>
        </div>
    )
}

export default AddNotice
