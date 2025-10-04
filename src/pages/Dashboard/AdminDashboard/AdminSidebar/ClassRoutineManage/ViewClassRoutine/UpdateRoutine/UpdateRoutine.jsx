import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useAxiosSecure from '../../../../../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const UpdateRoutine = () => {
    const { id } = useParams()
    const [prevData, setPrevData] = useState({})
    const axiosSecure = useAxiosSecure()
    const navigation = useNavigate()


    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axiosSecure.get(`/routine-get/${id}`)
            return setPrevData(data)
        }
        fetchData()
    }, [axiosSecure, id])
 
    const { day, subject, time_slot, teachers_name, group, _id } = prevData || {}

    // Update
    const handleUpdate = async e => {

        e.preventDefault()

        const form = e.target

        const day = form.day.value
        const group = form.group.value
        const subject = form.subject.value
        const time_slot = form.time_slot.value
        const teachers_name = form.teachers_name.value

        const updateData = {
            day,
            group,
            subject,
            time_slot,
            teachers_name
        }

        await axiosSecure.patch(`/update-routine/${_id}`, updateData)
        toast.success('Update Successfully')
        navigation('/admin_layout/view-class-routine')
    }
    return (
        <div className='max-w-6xl mx-auto my-7'>
            <form onSubmit={handleUpdate}>
                <div>
                    <h1 className='text-2xl text-center my-6'>Update Routine</h1>
                </div>
                <div className='grid lg:grid-cols-3  md:grid-cols-2 gap-3'>
                    {/*Day */}
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Day</legend>
                        <input defaultValue={day} name='day' className='input' type="text" />
                    </fieldset>
                    {/*Group */}
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Group</legend>
                        <input defaultValue={group} name='group' className='input' type="text" />
                    </fieldset>
                    {/*Primary & Junior Secondary Subject */}
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Primary & Junior Secondary Subject</legend>
                        <input defaultValue={subject} name='subject' className='input' type="text" />
                    </fieldset>
                    {/*Time Slot */}
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Time Slot</legend>
                        <input defaultValue={time_slot} name='time_slot' className='input' type="text" />
                    </fieldset>
                    {/*Teacher's Name */}
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Teacher's Name </legend>
                        <input defaultValue={teachers_name} name='teachers_name' className='input' type="text" />
                    </fieldset>
                </div>
                <div className='text-center my-3'>
                    <button className="btn bg-[#007b5e] text-white">Update</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateRoutine
