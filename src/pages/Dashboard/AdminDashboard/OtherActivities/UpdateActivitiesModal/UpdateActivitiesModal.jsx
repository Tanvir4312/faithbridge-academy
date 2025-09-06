import React, { useEffect, useState } from 'react'
import useAxiosSecure from '../../../../../hooks/useAxiosSecure'

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const UpdateActivitiesModal = ({ id, openModal, setOpenModal, refetch }) => {
    const [activitiesData, setActivitiesData] = useState(null)
    const axiosSecure = useAxiosSecure()

     useEffect(() => {
            if (id && openModal) {
                const fetchCourseData = async () => {
                    const res = await axiosSecure.get(`/activities-data-get/${id}`)
                    setActivitiesData(res.data)
                }
                fetchCourseData()
            }
        }, [axiosSecure, id, openModal])
    
        // useEffect(() => {
        //     if (openModal) {
        //         document.getElementById('my_modal_1').showModal()
        //     } else {
        //         document.getElementById('my_modal_1').close()
               
        //     }
        // }, [openModal])
    
        const { image, activities_title } = activitiesData || {}
    
        const handleActivitiesUpdate = async e => {
            e.preventDefault()
            const form = e.target
    
            let imageAdd
            if (form.image && e.target.image.files[0]) {
                const imageFille = e.target.image.files[0]
    
                const formImageData = new FormData()
                formImageData.append('image', imageFille)
    
                const resImage = await axiosSecure.post(image_hosting_api, formImageData, {
                    headers: { 'content-type': 'multipart/form-data' }
                })
                imageAdd = resImage?.data?.data?.display_url
            }
    
            const image_field = form.image_field.value;
            const activities_title = form.activities_title.value;
           
    
            const activitiesUpdateDataObj = {
                image: imageAdd ? imageAdd : image_field,
                activities_title,
              
            }
    
            await axiosSecure.patch(`/activities-data-update/${id}`, activitiesUpdateDataObj)
            
            refetch()
            setOpenModal(false)
            form.reset()
        }
  return (
     <dialog id="my_modal_1" className={`modal ${openModal ? "modal-open" : ""}`}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Update Activities</h3>
                <form onSubmit={handleActivitiesUpdate} method="dialog">

                    {/* Previous Image */}
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Previous Image</legend>
                        <input defaultValue={image} readOnly type="tex" name='image_field' className="input w-full" />
                    </fieldset>

                    {/* Add Update Image */}
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Add Update Image</legend>
                        <input type="file" name='image' className="file-input input w-full" />
                    </fieldset>

                    {/* Activities Title */}
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Course Title</legend>
                        <input defaultValue={activities_title} type="text" name='activities_title' className="input w-full" placeholder="Activities Title" />
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

export default UpdateActivitiesModal
