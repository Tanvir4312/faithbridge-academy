import React from 'react'
import useAxiosSecure from '../../../../../hooks/useAxiosSecure'
import { useNavigate } from 'react-router-dom'


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddImage = () => {
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()

    const handleImage = async e => {

        e.preventDefault()

        const imageFile = e.target.image.files[0]


        const formDataImg = new FormData()
        formDataImg.append('image', imageFile)

        const resImg = await axiosSecure.post(image_hosting_api, formDataImg, {
            headers: { 'content-type': 'multipart/form-data' }
        })
        const image = { image: resImg?.data?.data?.display_url }

        await axiosSecure.post('/upload-image-admin', image)
        navigate('/admin_layout/view-image')

    }
    return (
        <div className='max-w-3xl mx-auto'>
            <h2 className='text-2xl font-bold my-5'>AddImage</h2>
            <form onSubmit={handleImage}>

                <div className=''>
                    <input type="file" name='image' className="file-input" />
                </div>
                <button className="btn bg-[#007B5E] my-4 text-white">Add Image</button>
            </form>
        </div>
    )
}

export default AddImage
