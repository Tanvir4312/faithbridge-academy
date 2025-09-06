import React from 'react'
import useAxiosSecure from '../../../../../hooks/useAxiosSecure'
import { useNavigate } from 'react-router-dom'

const AddContactNumber = () => {
     const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const handleAddContactNumber = async e => {
        e.preventDefault()

        const form = e.target;
        const contact_number = form.contact_number.value;
    

        const number = {
            contact_number,
      
        }

        await axiosSecure.post('/contact-number', number)
      
        navigate('/admin_layout/view-contact-number')
        form.reset()
    }
  return (
    <div className='max-w-6xl mx-auto'>
            <h1 className='text-3xl font-bold text-center my-4'>Add Notice</h1>
            <div className='border border-[#007B5E] my-9 max-w-3xl mx-auto p-9'>
                <form className='space-y-5' onSubmit={handleAddContactNumber}>
                    <input className='input w-full' type="text" name="contact_number" placeholder="Contact Number" required />

        


                    <button className='btn btn-block bg-[#0bf1bb] font-medium'>Add Number</button>
                </form>

            </div>
        </div>
  )
}

export default AddContactNumber
