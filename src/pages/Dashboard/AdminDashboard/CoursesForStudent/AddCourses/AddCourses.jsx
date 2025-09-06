import React from 'react'
import useAxiosSecure from '../../../../../hooks/useAxiosSecure'
import { useNavigate } from 'react-router-dom'

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddCourses = () => {
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()

    const handleCourse = async e => {
        e.preventDefault()
        const form = e.target

        const imageFille = e.target.icon.files[0]

        const formIconData = new FormData()
        formIconData.append('image', imageFille)

        const resIcon = await axiosSecure.post(image_hosting_api, formIconData, {
            headers: { 'content-type': 'multipart/form-data' }
        })
        const icon = resIcon?.data?.data?.display_url

        const course_title = form.course_title.value;
        const course_details = form.course_details.value;

        const courseDataObj = {
            icon,
            course_title,
            course_details
        }


        await axiosSecure.post('/upload-courses-admin', courseDataObj)
        navigate('/admin_layout/view-courses')
        

    }


    return (
        <div className='max-w-4xl mx-auto mb-8'>
            <h1 className='text-3xl my-4 md:ml-7 lg:ml-0 text-center md:text-start'>Add Courses for Students</h1>

            <div className='border-2 border-[#007B5E] p-5 mx-5 md:mx-7 lg:mx-0'>
                <form onSubmit={handleCourse}>
                    <div className='md:flex gap-5'>
                        {/* Add Icon */}
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Add Icon</legend>
                            <input required type="file" name='icon' className="file-input w-full" />
                        </fieldset>

                        {/* Course Title */}
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Course Title</legend>
                            <input required type="text" name='course_title' className="input w-full" placeholder="Course Title" />

                        </fieldset>
                    </div>
                    {/* Course Details */}
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Course Details</legend>
                        <textarea required name='course_details' className="textarea h-36 w-full" placeholder="Course Details"></textarea>

                    </fieldset>

                    {/* Button */}
                    <div className='mt-4'>
                        <button className="btn btn-block bg-[#007B5E] text-white">Add Course</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddCourses
