import React, { useEffect, useState } from 'react'
import useAxiosSecure from '../../../../../hooks/useAxiosSecure'

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const UpdateCourseModal = ({ id, openModal, setOpenModal, refetch }) => {
    const [courseData, setCourseData] = useState(null)
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        if (id && openModal) {
            const fetchCourseData = async () => {
                const res = await axiosSecure.get(`/course-data-get/${id}`)
                setCourseData(res.data)
            }
            fetchCourseData()
        }
    }, [axiosSecure, id, openModal])

    useEffect(() => {
        if (openModal) {
            document.getElementById('my_modal_1').showModal()
        } else {
            document.getElementById('my_modal_1').close()
           
        }
    }, [openModal])

    const { icon, course_title, course_details } = courseData || {}

    const handleCourseUpdate = async e => {
        e.preventDefault()
        const form = e.target

        let iconAdd
        if (form.icon && e.target.icon.files[0]) {
            const imageFille = e.target.icon.files[0]

            const formIconData = new FormData()
            formIconData.append('image', imageFille)

            const resIcon = e.target.icon && await axiosSecure.post(image_hosting_api, formIconData, {
                headers: { 'content-type': 'multipart/form-data' }
            })
            iconAdd = resIcon?.data?.data?.display_url
        }

        const icon_field = form.icon_field.value;
        const course_title = form.course_title.value;
        const course_details = form.course_details.value;

        const courseUpdateDataObj = {
            icon: iconAdd ? iconAdd : icon_field,
            course_title,
            course_details
        }

        await axiosSecure.patch(`/course-data-update/${id}`, courseUpdateDataObj)
        document.getElementById('my_modal_1').close()
        refetch()
        setOpenModal(false)
        form.reset()
    }

    return (
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Update Course</h3>
                <form onSubmit={handleCourseUpdate} method="dialog">

                    {/* Previous Icon */}
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Previous Icon</legend>
                        <input defaultValue={icon} readOnly type="tex" name='icon_field' className="input w-full" />
                    </fieldset>

                    {/* Add Update Icon */}
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Add Update Icon</legend>
                        <input type="file" name='icon' className="file-input input w-full" />
                    </fieldset>

                    {/* Course Title */}
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Course Title</legend>
                        <input defaultValue={course_title} type="text" name='course_title' className="input w-full" placeholder="Course Title" />
                    </fieldset>

                    {/* Course Details */}
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Course Details</legend>
                        <textarea defaultValue={course_details} name='course_details' className="textarea h-24 w-full" placeholder="Course Details"></textarea>
                    </fieldset>

                    <div className='flex justify-between mt-4 w-full'>
                        <button className="btn w-2/4 bg-[#007B5E] text-white">Update</button>
                        <button onClick={() => setOpenModal(false)} type='button' className="btn w-2/4 bg-red-500">Close</button>
                    </div>
                </form>
            </div>
        </dialog>

    )
}

export default UpdateCourseModal
