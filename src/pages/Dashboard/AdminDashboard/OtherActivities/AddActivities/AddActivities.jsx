import React from 'react'
import useAxiosSecure from '../../../../../hooks/useAxiosSecure'
import { useNavigate } from 'react-router-dom'
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddActivities = () => {
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()

    const handleActivities = async e => {
        e.preventDefault()
        const form = e.target

        const imageFille = e.target.image.files[0]

        const formImageData = new FormData()
        formImageData.append('image', imageFille)

        const resImage = await axiosSecure.post(image_hosting_api, formImageData, {
            headers: { 'content-type': 'multipart/form-data' }
        })
        const image = resImage?.data?.data?.display_url

        const activities_title = form.activities_title.value;


        const activitiesDataObj = {
            image,
            activities_title,

        }


        await axiosSecure.post('/upload-activities-admin', activitiesDataObj)
        navigate('/admin_layout/view-activities')


    }
    return (
        <div className='max-w-4xl mx-auto mb-8'>
            <h1 className='text-3xl my-4 md:ml-7 lg:ml-0 text-center md:text-start'>Add Activities</h1>

            <div className='border-2 border-[#007B5E] p-5 mx-5 md:mx-7 lg:mx-0'>
                <form onSubmit={handleActivities}>
                    <div className='md:flex gap-5'>
                        {/* Add Image */}
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Add Image</legend>
                            <input required type="file" name='image' className="file-input w-full" />
                        </fieldset>

                        {/* Activities Title */}
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Activities Title</legend>
                            <input required type="text" name='activities_title' className="input w-full" placeholder="Activities Title" />

                        </fieldset>
                    </div>


                    {/* Button */}
                    <div className='mt-4'>
                        <button className="btn btn-block bg-[#007B5E] text-white">Add Activities</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddActivities
