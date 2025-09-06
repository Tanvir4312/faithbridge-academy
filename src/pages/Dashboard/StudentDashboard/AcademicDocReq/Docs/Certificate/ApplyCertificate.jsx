import React from 'react'
import useStudentInfo from '../../../../../../hooks/useStudentInfo'
import useAxiosSecure from '../../../../../../hooks/useAxiosSecure'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../../../../../hooks/useAuth'



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const ApplyCertificate = () => {
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
            type: 'certificate'

        }

        await axiosSecure.post('/apply-docs', applyDocsInfo)
        navigate('/dashboard/all-certificate-application')

    }
    return (
        <div>
            <h2 className='text-2xl text-center my-4'>Application for Certificate</h2>

            <div className='bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded'>
                <div className=" relative flex items-center" role="alert">
                    <svg className="fill-current w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9 12h2v2H9v-2zm0-8h2v6H9V4zm1-4C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0z" />
                    </svg>
                    <span className="font-bold">সনদ আবেদনে বিশেষ সতর্কতা!</span>

                </div>
                <div className='text-yellow-300 mt-3'>
                    <hr />
                </div>
                <ul className='list-disc pl-6 pt-3'>
                    <li>
                       সনদ হারিয়ে গেলে সংশ্লিষ্ট থানায় জিডি করতে হবে এবং জিডি নম্বর উল্লেখ করে জাতীয় পত্রিকায় বিজ্ঞাপন দিতে হবে। সনদ সংগ্রহের সময় জিডি এবং পত্রিকার কপি অবশ্যই জমা দিতে হবে।
                    </li>
                    <li>
                       সনদ নষ্ট হয়ে গেলে বা কোন তথ্যের পরিবর্তন হলে সনদ সংগ্রহের সময় আগের সনদ অবশ্যই জমা দিতে হবে।
                    </li>
                    <li>
                        ধাপ ১: অনলাইন পেমেন্ট। ধাপ ২): ট্রানজেকশন আইডি দিয়ে আবেদন। ধাপ ৩): প্রযোজ্য ক্ষেত্রে পোস্টিং ও ভর্তি শাখার ছাড়পত্র গ্রহণ। ধাপ ৪): আবেদনপত্রের প্রিন্টকপি প্রশাসনিক অফিসে জমা প্রদান। ধাপ ৫): নির্দিষ্ট দিনে পরীক্ষা নিয়ন্ত্রকের অফিস থেকে সনদ/নম্বরপত্র সংগ্রহ।
                    </li>
                </ul>
            </div>

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
                                <th className='text-start pl-4 border-r py-2'>Admit Card <span className='text-red-500'>**</span></th>
                                <td className='pl-4'><input required name='image' type="file" className="file-input my-2" /></td>
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

export default ApplyCertificate
