import React, { useState } from 'react'
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import { useEffect } from 'react';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const ApplyForm = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const [signaturePreview, setSignaturePreview] = useState(null)
    const [formShow, setFormShow] = useState(null)
    const [start_time, setStar_time] = useState(null)
    const [end_time, setEnd_time] = useState(null)
    const [loading, setLoading] = useState(true)

    const date = new Date()
    const navigate = useNavigate()

    useEffect(() => {
        const applyTime = async () => {

            try {

                const res = await axiosPublic.get('/application-timer')
                const showMessage = res?.data?.message
                if (showMessage) {
                    setFormShow(true)
                }

            } catch (err) {

                if (err.status === 403) {
                    setFormShow(false)
                    setStar_time(err.response?.data?.start_time)
                    setEnd_time(err.response?.data?.end_time)
                }

            }
            finally { setLoading(false) }
        }

        applyTime()
    }, [axiosPublic])


    const initialFormData = {
        email: user?.email,
        name_bn: "",
        name_en: "",
        dob: "",
        gender: "",
        nationality: '',
        religion: "",
        blood_group: "",
        birth_certificate_no: "",
        payment_status: 'Pending',
        status: 'pending',
        class_roll: '',
        contact: {
            student_mobile: "",
            guardian_mobile: "",

        },
        guardian: {
            father_name: "",
            father_occupation: "",
            mother_name: "",
            mother_occupation: ""
        },
        address: {
            permanent: "",
            present: ""
        },
        academic: {
            previous_school: "",
            jdc_or_jsc_exam: "",
            jdc_or_jsc_exam_roll: "",
            jdc_or_jsc_exam_reg_no: "",
            jsc_or_jdc_session: "",
            jsc_or_jdc_exam_board: "",
            jsc_or_jdc_exam_year: "",
            jdc_or_jsc_exam_result: "",
            jsc_or_jdc_Institute: '',
            ssc_or_dakhil_exam: "",
            ssc_or_dakhil_exam_roll: "",
            ssc_or_dakhil_exam_reg_no: "",
            ssc_or_dakhil_session: "",
            ssc_or_dakhil_board: "",
            ssc_or_dakhil_exam_year: "",
            ssc_or_dakhil_exam_result: "",
            ssc_or_dakhil_Institute: '',
            previous_class: "",
            previous_class_final_exam_result: "",
        },
        admission_info: {
            desired_class: "",
            group: "",
            Year: "",
            quota: ""
        }
    }

    const [formData, setFormData] = useState(initialFormData);


    const handleChange = (e) => {
        const { name, value, type, checked, dataset } = e.target;

        // Check if it's a nested field
        if (dataset.parent) {
            setFormData({
                ...formData,
                [dataset.parent]: {
                    ...formData[dataset.parent],
                    [name]: type === "checkbox" ? checked : value
                }
            });
        } else {
            setFormData({
                ...formData,
                [name]: type === "checkbox" ? checked : value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // If applier first apply then
        try {

            Swal.fire({
                title: "Please recheck your information",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Apply Now!"
            }).then(async (result) => {
                if (result.isConfirmed) {

                    try {
                        const imageFile = e.target.profile_image.files[0]
                        const imageFileSignature = e.target.signature_image.files[0]

                        // Profile Image
                        const formDataProfileImg = new FormData()
                        formDataProfileImg.append('image', imageFile)

                        const resProfile = await axiosSecure.post(image_hosting_api, formDataProfileImg, {
                            headers: { 'content-type': 'multipart/form-data' }

                        })
                        const studentImgUrl = resProfile.data.data.display_url

                        // Signature Image
                        const formDataSignatureImg = new FormData()
                        formDataSignatureImg.append('image', imageFileSignature)

                        const resSignature = await axiosSecure.post(image_hosting_api, formDataSignatureImg, {
                            headers: { 'content-type': 'multipart/form-data' }
                        })
                        const signatureImgUrl = resSignature.data.data.display_url

                        await axiosSecure.post(`/student-information/${user?.email}`, {
                            ...formData,
                            profile_image: studentImgUrl,
                            signature_image: signatureImgUrl
                        })
                        toast.success('Your Information Successfully saved')
                        Swal.fire({
                            title: "Thank You",
                            text: "Your information has been Saved.",
                            icon: "success"
                        });
                        navigate('/dashboard/application-status')
                    } catch (err) {
                        // Duplicate email error
                        toast.error(err.response?.data?.message)
                    }
                }
            });
        } catch (err) {
            console.error(err);
            alert("Failed to submit form");
        }
    };

    // Signature Image show-----------------------
    const handleSignatureImgChange = async (e) => {
        const imageFileSignature = e.target.files[0]
        const formDataSignatureImg = new FormData()
        formDataSignatureImg.append('image', imageFileSignature)
        const res = await axiosSecure.post(image_hosting_api, formDataSignatureImg, {
            headers: { 'content-type': 'multipart/form-data' }
        })
        const signatureImg = res?.data?.data?.display_url
        if (signatureImg) {
            setSignaturePreview(signatureImg)
        }
    }

    return (
        <div>
            {loading && <p></p>}
            {!loading && formShow &&
                <div className='max-w-6xl mx-auto mb-10'>
                    <h1 className='text-3xl font-bold my-10 text-center'>Apply Form</h1>

                    <form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 px-5'>

                            <input value={user?.email} type="email" name="email" className="input" onChange={handleChange} />
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Profile Image</legend>
                                <input type="file" name='profile_image' className="file-input" placeholder='hf'/>
                            </fieldset>
                            <input type="text" name="name_bn" placeholder="নাম (বাংলা)**" className="input" required onChange={handleChange} />

                            <input type="text" name="name_en" placeholder="Name (English)**" className="input" required onChange={handleChange} />
                            <input type="date" name="dob" className="input" required onChange={handleChange} />

                            <select defaultValue={'Gender'} name="gender" className="select" required onChange={handleChange}>
                                <option disabled={true}>Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            <input type="text" name="nationality" placeholder="Nationality" className="input" onChange={handleChange} />
                            <input type="text" name="religion" placeholder="Religion" className="input" onChange={handleChange} />
                            <input type="text" name="blood_group" placeholder="Blood Group" className="input" onChange={handleChange} />
                            <input type="text" name="birth_certificate_no" placeholder="Birth Certificate No**" className="input" required onChange={handleChange} />

                            {/* Contact */}
                            <input type="text" name="student_mobile" data-parent="contact" placeholder="Student Mobile**" required className="input" onChange={handleChange} />
                            <input type="text" name="guardian_mobile" data-parent="contact" placeholder="Guardian Mobile**" required className="input" onChange={handleChange} />

                            {/* Guardian */}
                            <input type="text" name="father_name" data-parent="guardian" placeholder="Father Name**" required className="input" onChange={handleChange} />
                            <input type="text" name="father_occupation" data-parent="guardian" placeholder="Father Occupation" className="input" onChange={handleChange} />
                            <input type="text" name="mother_name" data-parent="guardian" placeholder="Mother Name**" required className="input" onChange={handleChange} />
                            <input type="text" name="mother_occupation" data-parent="guardian" placeholder="Mother Occupation" className="input" onChange={handleChange} />

                            {/* Address */}
                            <input type="text" name="permanent" data-parent="address" placeholder="Permanent Address**" required className="input" onChange={handleChange} />
                            <input type="text" name="present" data-parent="address" placeholder="Present Address**" required className="input" onChange={handleChange} />

                            {/* Academic */}
                            <input type="text" name="previous_school" data-parent="academic" placeholder="Previous School or Madrasah**" required className="input" onChange={handleChange} />

                            {/* --------------------------------Jsc Or Jdc Start------------------------------------------- */}
                            <input type="text" name="jdc_or_jsc_exam" data-parent="academic" placeholder="JDC_or_JSC_Exam" className="input" onChange={handleChange} />

                            <input disabled={!['jsc', 'jdc'].includes(formData?.academic?.jdc_or_jsc_exam?.toLocaleLowerCase())} type="text" name="jdc_or_jsc_exam_roll" data-parent="academic" placeholder="JDC or JSC Exam Roll**" className="input" required onChange={handleChange} />

                            <input disabled={!['jsc', 'jdc'].includes(formData?.academic?.jdc_or_jsc_exam?.toLocaleLowerCase())} type="text" name="jdc_or_jsc_exam_reg_no" data-parent="academic" placeholder="JDC or JSC Exam REG No**" className="input" required onChange={handleChange} />

                            <select defaultValue={'JDC,JSC Exam Session'} disabled={!['jsc', 'jdc'].includes(formData?.academic?.jdc_or_jsc_exam?.toLocaleLowerCase())} name="jsc_or_jdc_session" data-parent="academic" className="select" required onChange={handleChange}>
                                <option disabled={true}>JDC,JSC Exam Session</option>
                                <option value="2022-2023">2022-2023</option>
                                <option value="2021-2022">2021-2022</option>
                                <option value="2020-2021">2020-2021</option>

                            </select>
                            <select defaultValue={'JDC,JSC Exam Board'} disabled={!['jsc', 'jdc'].includes(formData?.academic?.jdc_or_jsc_exam?.toLocaleLowerCase())} name="jsc_or_jdc_exam_board" data-parent="academic" className="select" required onChange={handleChange}>
                                <option disabled={true}>JDC,JSC Exam Board</option>
                                <option value="Madrasah Board">Madrasah Board</option>
                                <option value="Dhaka Board">Dhaka Board</option>
                                <option value="Barisal Board">Barisal Board</option>
                                <option value="Chittagong Board">Chittagong Board</option>
                                <option value=" Comilla Board"> Comilla Board</option>
                                <option value="Dinajpur Board">Dinajpur Board</option>
                                <option value="Jessore Board">Jessore Board</option>
                                <option value="Mymensingh Board">Mymensingh Board</option>
                                <option value="Rajshahi Board">Rajshahi Board</option>
                                <option value="Sylhet Board">Sylhet Board</option>
                            </select>

                            <select required defaultValue={'JDC,JSC Exam Year'} disabled={!['jsc', 'jdc'].includes(formData?.academic?.jdc_or_jsc_exam?.toLocaleLowerCase())} name="jsc_or_jdc_exam_year" data-parent="academic" className="select" onChange={handleChange}>
                                <option disabled={true}>JDC,JSC Exam Year</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                            </select>

                            <input disabled={!['jsc', 'jdc'].includes(formData?.academic?.jdc_or_jsc_exam?.toLocaleLowerCase())} type="text" name="jdc_or_jsc_exam_result" data-parent="academic" placeholder="JDC or JSC Exam Result**" className="input" required onChange={handleChange} />

                            <input disabled={!['jsc', 'jdc'].includes(formData?.academic?.jdc_or_jsc_exam?.toLocaleLowerCase())} type="text" name="jsc_or_jdc_Institute" data-parent="academic" placeholder="jsc_or_jdc_Institute**" className="input" required onChange={handleChange} />
                            {/* --------------------------------Jsc Or Jdc Start------------------------------------------- */}



                            {/* --------------------------------Ssc Or Dakhil Start------------------------------------------- */}

                            <input disabled={!['jsc', 'jdc'].includes(formData?.academic?.jdc_or_jsc_exam?.toLocaleLowerCase())} type="text" name="ssc_or_dakhil_exam" data-parent="academic" placeholder="SSC_or_DAKHIL_Exam" className="input" onChange={handleChange} />


                            <input disabled={!['ssc', 'dakhil'].includes(formData?.academic?.ssc_or_dakhil_exam?.toLocaleLowerCase())} type="text" name="ssc_or_dakhil_exam_roll" data-parent="academic" placeholder="SSC or DAKHIL Exam Roll**" className="input" required onChange={handleChange} />

                            <input disabled={!['ssc', 'dakhil'].includes(formData?.academic?.ssc_or_dakhil_exam?.toLocaleLowerCase())} type="text" name="ssc_or_dakhil_exam_reg_no" data-parent="academic" placeholder="SSC or DAKHIL Exam REG No**" className="input" required onChange={handleChange} />

                            <select defaultValue={'SSC, DAKHIL Exam Session'} disabled={!['ssc', 'dakhil'].includes(formData?.academic?.ssc_or_dakhil_exam?.toLocaleLowerCase())} name="ssc_or_dakhil_session" data-parent="academic" className="select" required onChange={handleChange}>
                                <option disabled={true}>SSC, DAKHIL Exam Session</option>
                                <option value="2023-2025">2024-2025</option>
                            </select>

                            <select defaultValue={'SSC, DAKHIL Exam Board'} disabled={!['ssc', 'dakhil'].includes(formData?.academic?.ssc_or_dakhil_exam?.toLocaleLowerCase())} name="ssc_or_dakhil_board" data-parent="academic" className="select" required onChange={handleChange}>
                                <option disabled={true}>SSC, DAKHIL Exam Board</option>
                                <option value="Madrasah Board">Madrasah Board</option>
                                <option value="Dhaka Board">Dhaka Board</option>
                                <option value="Barisal Board">Barisal Board</option>
                                <option value="Chittagong Board">Chittagong Board</option>
                                <option value=" Comilla Board"> Comilla Board</option>
                                <option value="Dinajpur Board">Dinajpur Board</option>
                                <option value="Jessore Board">Jessore Board</option>
                                <option value="Mymensingh Board">Mymensingh Board</option>
                                <option value="Rajshahi Board">Rajshahi Board</option>
                                <option value="Sylhet Board">Sylhet Board</option>
                            </select>

                            <select required disabled={!['ssc', 'dakhil'].includes(formData?.academic?.ssc_or_dakhil_exam?.toLocaleLowerCase())} defaultValue={'SSC, DAKHIL Exam Year'} name="ssc_or_dakhil_exam_year" data-parent="academic" className="select" onChange={handleChange}>
                                <option disabled={true}>SSC, DAKHIL Exam Year</option>
                                <option value="2025">2025</option>
                            </select>

                            <input disabled={!['ssc', 'dakhil'].includes(formData?.academic?.ssc_or_dakhil_exam?.toLocaleLowerCase())} type="text" name="ssc_or_dakhil_exam_result" data-parent="academic" placeholder="SSC or DAKHIL Exam Result**" className="input" required onChange={handleChange} />

                            <input disabled={!['ssc', 'dakhil'].includes(formData?.academic?.ssc_or_dakhil_exam?.toLocaleLowerCase())} type="text" name="ssc_or_dakhil_Institute" data-parent="academic" placeholder="ssc_or_dakhil_Institute**" className="input" required onChange={handleChange} />


                            {/* --------------------------------Ssc Or Dakhil End------------------------------------------- */}

                            <input disabled={['ssc', 'dakhil'].includes(formData?.academic?.ssc_or_dakhil_exam?.toLocaleLowerCase()) || ['jsc', 'jdc'].includes(formData?.academic?.jdc_or_jsc_exam?.toLocaleLowerCase())} type="text" name="previous_class" data-parent="academic" placeholder="Previous Class**" className="input" required onChange={handleChange} />

                            <input disabled={['ssc', 'dakhil'].includes(formData?.academic?.ssc_or_dakhil_exam?.toLocaleLowerCase()) || ['jsc', 'jdc'].includes(formData?.academic?.jdc_or_jsc_exam?.toLocaleLowerCase())} type="text" name="previous_class_final_exam_result" data-parent="academic" placeholder="Previous Class Final/Test Exam Result**" className="input" required onChange={handleChange} />
                            <label>
                                TC Status:
                                <input type="checkbox" name="tc_status" data-parent="academic" onChange={handleChange} />
                            </label>

                            {/* Admission Info */}
                            <input type="text" name="desired_class" data-parent="admission_info" placeholder="Desired Class**" required className="input" onChange={handleChange} />

                            <select required disabled={!['jsc', 'jdc'].includes(formData?.academic?.jdc_or_jsc_exam?.toLocaleLowerCase())} defaultValue={'Group'} name="group" data-parent="admission_info" className="select" onChange={handleChange}>
                                <option disabled={true}>Group</option>
                                <option value="Arts">Arts</option>
                                <option value="Science">Science</option>
                                <option value="Commerce">Commerce</option>
                            </select>

                            <input type="text" name="year" data-parent="admission_info" placeholder="Year**" required className="input" onChange={handleChange} />

                            <select defaultValue={'Quota'} name="quota" data-parent="admission_info" className="select" onChange={handleChange}>
                                <option disabled={true}>Quota</option>
                                <option value="General">General</option>
                                <option value="Freedom Fighter">Freedom Fighter</option>
                                <option value="Other">Other</option>
                            </select>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Signature</legend>
                                <input type="file" name='signature_image' className="file-input" onChange={handleSignatureImgChange} />
                            </fieldset>

                        </div>
                        <div className='ml-96'>
                            {signaturePreview && <img className='w-48 border border-gray-200 rounded ml-5 mt-3' src={signaturePreview} alt="" />}
                        </div>
                        <div className='text-center mt-6 lg:max-w-4xl md:max-w-2xl max-w-52 mx-auto'>
                            <button className='btn btn-outline btn-block border-2 border-[#007B5E] text-[#007B5E] font-bold'>Submit</button>
                        </div>
                    </form>
                </div>

            }

            {
                !loading && !formShow && <><p className='text-3xl font-medium p-10'>Application is <span className='font-bold text-red-500'>closed</span></p>
                    {date > new Date(end_time) ? <p className='text-2xl font-medium pl-10'>Application is closed <span className='text-3xl'>({end_time})</span></p> : <p className='text-2xl font-medium pl-10'>Application is open <span className='text-3xl'>({start_time})</span></p>}
                </>
            }

        </div>
    )
}

export default ApplyForm
