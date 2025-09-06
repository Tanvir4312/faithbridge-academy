import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Footer from '../../components/shared/Footer/Footer'

import { useEffect } from 'react'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import { useState } from 'react'
import { useRef } from 'react'

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const ProfileUpdate = () => {
    const navigate = useNavigate()

    const { id } = useParams()
    const axiosSecure = useAxiosSecure()
    const [studentInfoData, setStudentInfoData] = useState(null)
    const [updateProfileImg, setUpdateProfileImg] = useState(null)
    const [oldProfileImg, setOldProfileImg] = useState(null)
    const [updateSignatureImg, setUpdateSignatureImg] = useState(null)
    const [oldSignatureImg, setOldSignatureImg] = useState(null)
    const fileInputRef = useRef()



    // Get Student Info
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axiosSecure.get(`/profile-update/${id}`)
            return setStudentInfoData(data)
        }
        fetchData()
    }, [axiosSecure, id])

    // take previous Profile image and Signature Image
    useEffect(() => {
        if (studentInfoData) {
            setOldProfileImg(studentInfoData?.profile_image)
            setOldSignatureImg(studentInfoData?.signature_image
            )
        }
    }, [studentInfoData])

    // Hide input-file open
    const handleImageUpdate = () => {
        fileInputRef.current.click()
    }

    // Give new profile image and signature image then set the state
    const handleChangeFile = async (e, setState) => {
        const file = e.target.files[0]

        if (file) {
            const imgFormdata = new FormData()
            imgFormdata.append('image', file)
            const res = await axiosSecure.post(image_hosting_api, imgFormdata, {
                headers: { 'content-type': 'multipart/form-data' }
            })
            setState(res?.data?.data?.display_url)
        }

    }

    // Update Function
    const handleUpdateField = async (e) => {
        e.preventDefault()

        const form = e.target
        const father_name = form.father_name.value;
        const mother_name = form.mother_name.value;
        const nationality = form.nationality.value;
        const religion = form.religion.value;
        const number = form.number.value;
        const class_roll = form.class_roll.value;
        const blood_group = form.blood_group.value;
        const gender = form.gender.value;
        const desired_class = form.desired_class.value;
        const year = form.year.value;
        const group = form.group.value;
        const permanent = form.permanent.value;
        const present = form.present.value;

        const updateData = {
            "guardian.father_name": father_name,
            "guardian.mother_name": mother_name,
            nationality,
            religion,
            'contact.student_mobile': number,
            class_roll,
            blood_group,
            gender,
            'admission_info.desired_class': desired_class,
            'admission_info.year': year,
            'admission_info.group': group,
            profile_image: updateProfileImg || oldProfileImg,
            signature_image: updateSignatureImg || oldSignatureImg,
            'address.permanent': permanent,
            'address.present': present,
        }

        await axiosSecure.patch(`/update-profile/${id}`, updateData)
        navigate('/view-profile')
    }

    return (
        <div>
            <div className='bg-[#007B5E] py-6 px-7 md:flex justify-between items-center'>
                <h1 className='heading text-3xl font-medium text-white text-center md:text-start'>FaithBridge International Academy</h1>
                <div className='flex items-center justify-center mt-4 md:mt-0'>
                    <Link to={'/'}><button className='btn btn-outline mr-7 border-2 border-white text-white font-bold'>Home</button></Link>
                    <Link to={'/dashboard/profile'}> <img className='w-15 h-15 rounded-full object-cover' src={studentInfoData?.profile_image} alt="" /></Link>
                </div>

            </div>

            {/* Update field */}
            <div className='max-w-6xl mx-auto border-4 border-[#3685a1] my-7 px-7 bg-[#e0eaf4]'>

                {/* Name and picture */}
                <div className='py-6 px-16'>
                    {/* Name */}
                    <div className="relative bg-[#3685a1] text-white text-center text-lg font-bold px-10 py-2">
                        <span>{studentInfoData?.name_en}</span>

                        {/* Left side */}
                        <div className="absolute -left-3 top-0 h-0 w-0 border-t-[24px] border-t-transparent border-b-[20px] border-b-transparent border-r-[12px] border-r-[#3685a1]"></div>

                        {/* Right side */}
                        <div className="absolute -right-3 top-0 h-0 w-0 border-t-[24px] border-t-transparent border-b-[20px] border-b-transparent border-l-[12px] border-l-[#3685a1]"></div>
                    </div>

                    {/* Picture */}
                    {oldProfileImg && <div className='flex justify-center my-10'>
                        <img onClick={handleImageUpdate} className='md:w-40 md:h-40 w-32 h-32 object-cover rounded-full border-8 border-gray-300 cursor-pointer' src={updateProfileImg || oldProfileImg} alt="" />

                    </div>}
                    <input onChange={(e) => handleChangeFile(e, setUpdateProfileImg)} ref={fileInputRef} type="file" className='file-input hidden' />
                </div>

                {/* Field */}
                <form onSubmit={handleUpdateField}>
                    <div className='grid md:grid-cols-2 gap-x-10'>
                        {/* Father Name */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Father Name</legend>
                            <input
                                type="text"
                                name="father_name"
                                defaultValue={studentInfoData?.guardian.father_name}
                                className="input w-full"
                                placeholder="Type here" />
                        </fieldset>

                        {/* Mother Name */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Mother Name</legend>
                            <input
                                type="text"
                                name="mother_name"
                                defaultValue={studentInfoData?.guardian.mother_name}
                                className="input w-full"
                                placeholder="Type here" />
                        </fieldset>
                        {/* Nationality*/}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Nationality</legend>
                            <input
                                type="text"
                                name="nationality"
                                defaultValue={studentInfoData?.nationality}
                                className="input w-full"
                                placeholder="Type here" />
                        </fieldset>
                        {/* Religion*/}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Religion</legend>
                            <input
                                type="text"
                                name="religion"
                                defaultValue={studentInfoData?.religion}
                                className="input w-full"
                                placeholder="Type here" />
                        </fieldset>
                        {/* Number*/}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Number</legend>
                            <input
                                type="text"
                                name="number"
                                defaultValue={studentInfoData?.contact.student_mobile}
                                className="input w-full"
                                placeholder="Type here" />
                        </fieldset>
                        {/* Class Roll*/}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Class Roll</legend>
                            <input
                                type="text"
                                name="class_roll"
                                defaultValue={studentInfoData?.class_roll}
                                className="input w-full"
                                placeholder="Type here" />
                        </fieldset>
                        {/* Blood Group*/}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Blood Group</legend>
                            <input
                                type="text"
                                name="blood_group"
                                defaultValue={studentInfoData?.blood_group}
                                className="input w-full"
                                placeholder="Type here" />
                        </fieldset>
                        {/* Gender*/}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Gender</legend>
                            <input
                                type="text"
                                name="gender"
                                defaultValue={studentInfoData?.gender}
                                className="input w-full"
                                placeholder="Type here" />
                        </fieldset>
                        {/* Class*/}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Class</legend>
                            <input
                                type="text"
                                name="desired_class"
                                defaultValue={studentInfoData?.admission_info.desired_class}
                                className="input w-full"
                                placeholder="Type here" />
                        </fieldset>
                        {/* Year*/}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Year</legend>
                            <input
                                type="text"
                                name="year"
                                defaultValue={studentInfoData?.admission_info.year}
                                className="input w-full"
                                placeholder="Type here" />
                        </fieldset>

                        {/* Group */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Group</legend>
                            <select defaultValue={studentInfoData?.admission_info.group ? studentInfoData?.admission_info.group : ''} name="group" className="select w-full">
                                <option disabled={true}>{studentInfoData?.admission_info.group ? studentInfoData?.admission_info.group : ''}</option>
                                <option value="Arts">Arts</option>
                                <option value="Science">Science</option>
                                <option value="Commerce">Commerce</option>
                               
                            </select>
                        </fieldset>
                    </div>

                    {/* Permanent Address*/}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Permanent Address</legend>
                        <input
                            type="text"
                            name="permanent"
                            defaultValue={studentInfoData?.address.permanent}
                            className="input w-full"
                            placeholder="Type here" />
                    </fieldset>
                    {/* Present Address*/}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Present Address</legend>
                        <input
                            type="text"
                            name="present"
                            defaultValue={studentInfoData?.address.present}
                            className="input w-full"
                            placeholder="Type here" />
                    </fieldset>
                    {/* Signature*/}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Signature</legend>
                        <input onChange={(e) => handleChangeFile(e, setUpdateSignatureImg)} type="file" className="file-input" />

                    </fieldset>

                    {
                        <img className='w-64 mt-2' src={updateSignatureImg || oldSignatureImg} alt="" />
                    }

                    {/* Update button */}
                    <div>
                        <button className='btn btn-block bg-[#d15b47] text-white mt-4 mb-7'>Update</button>
                    </div>
                </form>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default ProfileUpdate
