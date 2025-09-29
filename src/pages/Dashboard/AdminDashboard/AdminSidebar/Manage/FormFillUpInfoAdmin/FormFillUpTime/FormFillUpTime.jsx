import React from 'react'
import useAxiosSecure from '../../../../../../../hooks/useAxiosSecure'
import { toast } from 'react-toastify'

const FormFillUpTime = () => {
    const axiosSecure = useAxiosSecure()

    const handleFormTime = async e => {
        e.preventDefault()

        const form = e.target
        const start_date_time = form.start_date_time.value;
        const end_date_time = form.end_date_time.value;


        const form_time = {
            form_start: start_date_time + '+06:00',
            form_end: end_date_time + '+06:00'
        }

        await axiosSecure.patch('/form-time', form_time);
        toast.success('Form fillUp time update successfully')
        form.reset()
    }
    return (
        <div className='max-w-5xl mx-auto mb-8 px-3'>
            <h1 className='text-3xl font-bold my-5'> Form FillUp Time</h1>

            <form onSubmit={handleFormTime}>
                {/* Time */}
                <div className='md:flex gap-4'>
                    {/* Start Time */}
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend text-xl font-bold my-2">Start Time</legend>
                        <input type="datetime-local" name='start_date_time' className="input w-full" />

                    </fieldset>
                    {/* End Time */}
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend text-xl font-bold my-2">End Time</legend>
                        <input type="datetime-local" name='end_date_time' className="input w-full" />

                    </fieldset>
                </div>
                <div className='text-center mt-5'>
                    <button className="btn">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FormFillUpTime
