import React from 'react'
import useStudentInfo from '../../../../../../hooks/useStudentInfo'
import useAxiosSecure from '../../../../../../hooks/useAxiosSecure'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../../../../../hooks/useAuth'


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const ApplyTestimonial = () => {
    const studentInfo = useStudentInfo()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const { user } = useAuth()

    const { name_en, guardian, dob, nationality, address, admission_info, registration_no, academic, class_roll } = studentInfo || {}

    const handleDocs = async (e) => {
        e.preventDefault()

        const imageFile = e.target.image.files[0]

        const formData = new FormData()
        formData.append('image', imageFile)

        const resProfile = await axiosSecure.post(image_hosting_api, formData, {
            headers: { 'content-type': 'multipart/form-data' }

        })


        const image = resProfile.data.data.display_url


        const form = e.target

        const name = form.name.value;
        const father_name = form.father_name.value;
        const mother_name = form.mother_name.value;
        const transactionId = form.transactionId.value;
        const year = form.year.value;

        const registration_no = form.registration_no.value;
        const jdc_or_jsc_exam_reg_no = form.jdc_or_jsc_exam_reg_no.value;
        const ssc_or_dakhil_exam_reg_no = form.ssc_or_dakhil_exam_reg_no.value;



        const applyDocsInfo = {
            email: user?.email,
            student_name: name,
            father_name,
            transactionId,
            year,
            mother_name, registration_no,
            jdc_or_jsc_exam_reg_no,
            ssc_or_dakhil_exam_reg_no,
            identity_doc_img: image,
            status: 'pending',
            type: 'testimonial'

        }

        await axiosSecure.post('/apply-docs', applyDocsInfo)
        navigate('/dashboard/all-testimonial-application')
    }
    return (
        <div>
            <h2 className='text-2xl text-center my-4'>Application for Testimonial</h2>


            <form onSubmit={handleDocs}>
                <div className='mt-5'>
                    <table className='min-w-full border border-gray-300'>
                        <tbody>
                            <tr className='border-b border-gray-300'>
                                <th className='text-start pl-4 border-r py-2 w-1/3'>Name:</th>

                                <td className='pl-1'><input name='name' readOnly value={name_en || ''} type="text" className="input input-ghost focus:outline-none" /></td>
                            </tr>
                            <tr className='border-b border-gray-300'>
                                <th className='text-start pl-4 border-r py-2'>Father's Name:</th>

                                <td className='pl-1'><input name='father_name' readOnly value={guardian?.father_name || ''} type="text" className="input input-ghost focus:outline-none" /></td>
                            </tr>
                            <tr className='border-b border-gray-300'>
                                <th className='text-start pl-4 border-r py-2'>Mother's Name:</th>

                                <td className='pl-1'><input name='mother_name' readOnly value={guardian?.mother_name || ''} type="text" className="input input-ghost focus:outline-none" /></td>
                            </tr>
                            <tr className='border-b border-gray-300'>
                                <th className='text-start pl-4 border-r py-2'>Date of Birth:</th>

                                <td className='pl-1'><input name='dob' readOnly value={dob || ''} type="text" className="input input-ghost focus:outline-none" /></td>
                            </tr>
                            <tr className='border-b border-gray-300'>
                                <th className='text-start pl-4 border-r py-2'>Nationality:</th>

                                <td className='pl-1'><input name='nationality' readOnly value={nationality || ''} type="text" className="input input-ghost focus:outline-none" /></td>
                            </tr>
                            <tr className='border-b border-gray-300'>
                                <th className='text-start pl-4 border-r py-2'>Permanent Address:</th>

                                <td className='pl-1'><input name='permanent_address' readOnly value={address?.permanent || ''} type="text" className="input input-ghost focus:outline-none" /></td>
                            </tr>
                            <tr className='border-b border-gray-300'>
                                <th className='text-start pl-4 border-r py-2'>Present Address:</th>

                                <td className='pl-1'><input name='present_address' readOnly value={address?.present || ''} type="text" className="input input-ghost focus:outline-none" /></td>
                            </tr>
                            <tr className='border-b border-gray-300'>
                                <th className='text-start pl-4 border-r py-2'>Group:</th>

                                <td className='pl-1'><input name='group' readOnly value={admission_info?.group || ''} type="text" className="input input-ghost focus:outline-none" /></td>
                            </tr>
                            <tr className='border-b border-gray-300'>
                                <th className='text-start pl-4 border-r py-2'>Class:</th>

                                <td className='pl-1'><input name='student_class' readOnly value={admission_info?.desired_class || ''} type="text" className="input input-ghost focus:outline-none" /></td>
                            </tr>
                            <tr className='border-b border-gray-300'>
                                <th className='text-start pl-4 border-r py-2'>Roll:</th>

                                <td className='pl-1'><input name='class_roll' readOnly value={class_roll || ''} type="text" className="input input-ghost focus:outline-none" /></td>
                            </tr>
                            <tr className='border-b border-gray-300'>
                                <th className='text-start pl-4 border-r py-2'>Year:</th>

                                <td className='pl-1'><input name='year' readOnly value={admission_info?.year || ''} type="text" className="input input-ghost focus:outline-none" /></td>
                            </tr>
                            <tr className='border-b border-gray-300'>
                                <th className='text-start pl-4 border-r py-2'>Registration No:</th>

                                <td className='pl-1'><strong><input name='registration_no' readOnly value={registration_no || ''} type="text" className="input input-ghost focus:outline-none" /></strong></td>
                            </tr>
                            <tr className='border-b border-gray-300'>
                                <th className='text-start pl-4 border-r py-2'>JSC/JDC Session:</th>

                                <td className='pl-1'><input name='jsc_or_jdc_session' readOnly value={academic?.jsc_or_jdc_session || ''} type="text" className="input input-ghost focus:outline-none" /></td>
                            </tr>
                            <tr className='border-b border-gray-300'>
                                <th className='text-start pl-4 border-r py-2'>SSC/DAKHIL Session:</th>

                                <td className='pl-1'><input name='ssc_or_dakhil_session' readOnly value={academic?.ssc_or_dakhil_session || ''} type="text" className="input input-ghost focus:outline-none" /></td>
                            </tr>
                            <tr className='border-b border-gray-300'>
                                <th className='text-start pl-4 border-r py-2'>JSC/JDC REG No:</th>

                                <td className='pl-1'><strong><input name='jdc_or_jsc_exam_reg_no' readOnly value={academic?.jdc_or_jsc_exam_reg_no || ''} type="text" className="input input-ghost focus:outline-none" /></strong></td>
                            </tr>
                            <tr className='border-b border-gray-300'>
                                <th className='text-start pl-4 border-r py-2'>SSC/DAKHIL  REG No:</th>

                                <td className='pl-1'><strong><input name='ssc_or_dakhil_exam_reg_no' readOnly value={academic?.ssc_or_dakhil_exam_reg_no || ''} type="text" className="input input-ghost focus:outline-none" /></strong></td>
                            </tr>
                            <tr className='border-b border-gray-300'>
                                <th className='text-start pl-4 border-r py-2'>Transaction Id <span className='text-red-500'>**</span></th>
                                <td className='pl-4'><input required name='transactionId' type="text" className="input" /></td>
                            </tr>
                            <tr className='border-b border-gray-300'>
                                <th className='text-start pl-4 border-r py-2'>NID/Passport Copy/Birth Certificate <span className='text-red-500'>**</span></th>
                                <td className='pl-4'><input required name='image' type="file" className="file-input" /></td>
                            </tr>

                        </tbody>
                    </table>



                    <div className='text-center mt-4 mb-9'>
                        <button className='btn w-xl bg-[#6af8d7]'>Apply</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ApplyTestimonial
