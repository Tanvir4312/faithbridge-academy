import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserEdit } from "react-icons/fa";
import useStudentInfo from '../../../../../hooks/useStudentInfo';
import Footer from '../../../../../components/shared/Footer/Footer';

const ViewProfile = () => {
    const studentInfo = useStudentInfo()

  

    return (
        <div>
            <div className='bg-[#007B5E] py-6 px-7 md:flex justify-between'>
                <h1 className='heading text-3xl font-medium text-white text-center md:text-start'>FaithBridge International Academy</h1>
                <div className='flex items-center justify-center mt-4 md:mt-0'>
                    <Link to={'/'}><button className='btn btn-outline mr-7 border-2 border-white text-white font-bold'>Home</button></Link>

                </div>
            </div>

            {/* Details Info*/}
            <div className='lg:max-w-4xl mx-auto my-6 md:max-w-2xl max-w-56'>
                {/* Name */}
                <div className="relative bg-[#3685a1] text-white text-center text-lg font-bold px-10 py-2">
                    <span>{studentInfo?.name_en}</span>

                    {/* Left side */}
                    <div className="absolute -left-3 top-0 h-0 w-0 border-t-[24px] border-t-transparent border-b-[20px] border-b-transparent border-r-[12px] border-r-[#3685a1]"></div>

                    {/* Right side */}
                    <div className="absolute -right-3 top-0 h-0 w-0 border-t-[24px] border-t-transparent border-b-[20px] border-b-transparent border-l-[12px] border-l-[#3685a1]"></div>
                </div>

                {/* Picture */}
                <div className='flex justify-center my-10'>
                    <img className='w-40 h-40 object-cover rounded-full border-8 border-gray-300' src={studentInfo?.profile_image} alt="" />
                </div>






                <table className="min-w-full border border-gray-300">
                    <tbody>
                        <tr className="border-b border-gray-300 flex flex-col md:table-row">
                            <th className="md:text-right text-start md:pr-3 pl-5 md:pl-0 font-bold p-2 md:border-r md: border-r-gray-300 border-b border-b-gray-300 md:border-b-0 bg-[#e4f2f7] text-[#005473]md:w-1/4">REG No.</th>
                            <td className="p-2 pl-10 md:pl-3 md:w-3/4">{studentInfo?.registration_no}</td>
                        </tr>
                        <tr className="border-b border-gray-300 flex flex-col md:table-row">
                            <th className="md:text-right text-start md:pr-3 pl-5 md:pl-0 font-medium p-2 md:border-r md: border-r-gray-300 border-b border-b-gray-300 md:border-b-0 bg-[#e4f2f7] text-[#005473]">Name (English)</th>
                            <td className="p-2 pl-10 md:pl-3">{studentInfo?.name_en}</td>
                        </tr>
                        <tr className="border-b border-gray-300 flex flex-col md:table-row">
                            <th className="md:text-right text-start md:pr-3 pl-5 md:pl-0 font-medium p-2 md:border-r md: border-r-gray-300 border-b border-b-gray-300 md:border-b-0 bg-[#e4f2f7] text-[#005473]">Name (বাংলা)</th>
                            <td className="p-2 pl-10 md:pl-3">{studentInfo?.name_bn}</td>
                        </tr>
                        <tr className="border-b border-gray-300 flex flex-col md:table-row">
                            <th className="md:text-right text-start md:pr-3 pl-5 md:pl-0 font-medium p-2 md:border-r md: border-r-gray-300 border-b border-b-gray-300 md:border-b-0 bg-[#e4f2f7] text-[#005473]">Father Name</th>
                            <td className="p-2 pl-10 md:pl-3">{studentInfo?.guardian.father_name}</td>
                        </tr>
                        <tr className="border-b border-gray-300 flex flex-col md:table-row">
                            <th className="md:text-right text-start md:pr-3 pl-5 md:pl-0 font-medium p-2 md:border-r md: border-r-gray-300 border-b border-b-gray-300 md:border-b-0 bg-[#e4f2f7] text-[#005473]">Mother Name</th>
                            <td className="p-2 pl-10 md:pl-3">{studentInfo?.guardian.mother_name}</td>
                        </tr>
                        <tr className="border-b border-gray-300 flex flex-col md:table-row">
                            <th className="md:text-right text-start md:pr-3 pl-5 md:pl-0 font-medium p-2 md:border-r md: border-r-gray-300 border-b border-b-gray-300 md:border-b-0 bg-[#e4f2f7] text-[#005473]">DOB</th>
                            <td className="p-2 pl-10 md:pl-3">{studentInfo?.dob}</td>
                        </tr>
                        <tr className="border-b border-gray-300 flex flex-col md:table-row">
                            <th className="md:text-right text-start md:pr-3 pl-5 md:pl-0 font-medium p-2 md:border-r md: border-r-gray-300 border-b border-b-gray-300 md:border-b-0 bg-[#e4f2f7] text-[#005473]">Gander</th>
                            <td className="p-2 pl-10 md:pl-3">{studentInfo?.gender}</td>
                        </tr>
                        <tr className="border-b border-gray-300 flex flex-col md:table-row">
                            <th className="md:text-right text-start md:pr-3 pl-5 md:pl-0 font-medium p-2 md:border-r md: border-r-gray-300 border-b border-b-gray-300 md:border-b-0 bg-[#e4f2f7] text-[#005473]">Religion</th>
                            <td className="p-2 pl-10 md:pl-3">{studentInfo?.religion}</td>
                        </tr>
                        <tr className="border-b border-gray-300 flex flex-col md:table-row">
                            <th className="md:text-right text-start md:pr-3 pl-5 md:pl-0 font-medium p-2 md:border-r md: border-r-gray-300 border-b border-b-gray-300 md:border-b-0 bg-[#e4f2f7] text-[#005473]">Nationality</th>
                            <td className="p-2 pl-10 md:pl-3">{studentInfo?.nationality}</td>
                        </tr>
                        <tr className="border-b border-gray-300 flex flex-col md:table-row">
                            <th className="md:text-right text-start md:pr-3 pl-5 md:pl-0 font-medium p-2 md:border-r md: border-r-gray-300 border-b border-b-gray-300 md:border-b-0 bg-[#e4f2f7] text-[#005473]">Class Roll</th>
                            <td className="p-2 pl-10 md:pl-3">{studentInfo?.class_roll}</td>
                        </tr>
                        <tr className="border-b border-gray-300 flex flex-col md:table-row">
                            <th className="md:text-right text-start md:pr-3 pl-5 md:pl-0 font-medium p-2 md:border-r md: border-r-gray-300 border-b border-b-gray-300 md:border-b-0 bg-[#e4f2f7] text-[#005473]">Blood Group</th>
                            <td className="p-2 pl-10 md:pl-3">{studentInfo?.blood_group}</td>
                        </tr>
                        <tr className="border-b border-gray-300 flex flex-col md:table-row">
                            <th className="md:text-right text-start md:pr-3 pl-5 md:pl-0 font-medium p-2 md:border-r md: border-r-gray-300 border-b border-b-gray-300 md:border-b-0 bg-[#e4f2f7] text-[#005473]">Class</th>
                            <td className="p-2 pl-10 md:pl-3">{studentInfo?.admission_info.desired_class}</td>
                        </tr>
                        <tr className="border-b border-gray-300 flex flex-col md:table-row">
                            <th className="md:text-right text-start md:pr-3 pl-5 md:pl-0 font-medium p-2 md:border-r md: border-r-gray-300 border-b border-b-gray-300 md:border-b-0 bg-[#e4f2f7] text-[#005473]">Group</th>
                            <td className="p-2 pl-10 md:pl-3">{studentInfo?.admission_info.group}</td>
                        </tr>
                        <tr className="border-b border-gray-300 flex flex-col md:table-row">
                            <th className="md:text-right text-start md:pr-3 pl-5 md:pl-0 font-medium p-2 md:border-r md: border-r-gray-300 border-b border-b-gray-300 md:border-b-0 bg-[#e4f2f7] text-[#005473]">Quota</th>
                            <td className="p-2 pl-10 md:pl-3">{studentInfo?.admission_info.quota}</td>
                        </tr>
                        <tr className="border-b border-gray-300 flex flex-col md:table-row">
                            <th className="md:text-right text-start md:pr-3 pl-5 md:pl-0 font-medium p-2 md:border-r md: border-r-gray-300 border-b border-b-gray-300 md:border-b-0 bg-[#e4f2f7] text-[#005473]">Year</th>
                            <td className="p-2 pl-10 md:pl-3">{studentInfo?.admission_info.year}</td>
                        </tr>
                        <tr className="border-b border-gray-300 flex flex-col md:table-row">
                            <th className="md:text-right text-start md:pr-3 pl-5 md:pl-0 font-medium p-2 md:border-r md: border-r-gray-300 border-b border-b-gray-300 md:border-b-0 bg-[#e4f2f7] text-[#005473]">Contact</th>
                            <td className="p-2 pl-10 md:pl-3">{studentInfo?.contact.student_mobile}</td>
                        </tr>
                        <tr className="border-b border-gray-300 flex flex-col md:table-row">
                            <th className="md:text-right text-start md:pr-3 pl-5 md:pl-0 font-medium p-2 md:border-r md: border-r-gray-300 border-b border-b-gray-300 md:border-b-0 bg-[#e4f2f7] text-[#005473]">Email</th>
                            <td className="p-2 pl-10 md:pl-3">{studentInfo?.email}</td>
                        </tr>
                        <tr className="border-b border-gray-300 flex flex-col md:table-row">
                            <th className="md:text-right text-start md:pr-3 pl-5 md:pl-0 font-medium p-2 underline">Permanent Address</th>

                        </tr>
                        <tr className="border-b border-gray-300 flex flex-col md:table-row">
                            <th className="md:text-right text-start md:pr-3 pl-5 md:pl-0 font-medium p-2 md:border-r md: border-r-gray-300 border-b border-b-gray-300 md:border-b-0 bg-[#e4f2f7] text-[#005473]">Address</th>
                            <td className="p-2 pl-10 md:pl-3">{studentInfo?.address.permanent}</td>
                        </tr>
                        <tr className="border-b border-gray-300 flex flex-col md:table-row">
                            <th className="md:text-right text-start md:pr-3 pl-5 md:pl-0 font-medium p-2 underline">Present  Address</th>

                        </tr>
                        <tr className="border-b border-gray-300 flex flex-col md:table-row">
                            <th className="md:text-right text-start md:pr-3 pl-5 md:pl-0 font-medium p-2 md:border-r md: border-r-gray-300 border-b border-b-gray-300 md:border-b-0 bg-[#e4f2f7] text-[#005473]">Address</th>
                            <td className="p-2 pl-10 md:pl-3">{studentInfo?.address.present}</td>
                        </tr>
                        <tr className="border-b border-gray-300 flex flex-col md:table-row">
                            <th className="md:text-right text-start md:pr-3 pl-5 md:pl-0 font-medium p-2 underline">signature</th>

                        </tr>
                        <tr className="flex flex-col md:table-row">
                            <th className="md:text-right text-start md:pr-3 pl-5 md:pl-0 font-medium text-sm p-2 md:border-r md: border-r-gray-300 border-b border-b-gray-300 md:border-b-0 bg-[#e4f2f7] text-[#005473] ">signature.</th>
                            <td className="p-2 pl-3"><img className='md:w-44 w-28' src={studentInfo?.signature_image} alt="" /></td>
                        </tr>
                       <tr className="border-b border-gray-300 flex flex-col md:table-row">
                            <th className="text-center  font-medium p-2 md:border-r md: border-r-gray-300 border-b border-b-gray-300 md:border-b-0 bg-[#5ab9db] text-white cursor-pointer flex justify-center items-center"> <FaUserEdit></FaUserEdit> <Link to={`/profile-update/${studentInfo?._id}`}> <span className='pl-1'>Edit Profile</span>  </Link></th>

                        </tr>
                      


                    </tbody>
                </table>

                <div className='mt-10'>

                    {studentInfo?.academic?.jdc_or_jsc_exam
                        ? <div>
                            <h1 className='text-2xl pb-3'>Year and Division/Class of passing the J.S.C/S.S.C</h1>

                            <div className="overflow-x-auto">
                                <table className="table table-zebra border border-gray-200">
                                    {/* head */}
                                    <thead>
                                        <tr className='bg-gray-200 border-b-4'>
                                            <th className='border-r border-gray-300 w-2/5'>Name of Examination</th>
                                            <th className='border-r border-gray-300 w-1/5'>Board</th>
                                            <th className='border-r border-gray-300 w-1/5'>Year</th>
                                            <th className='border-r border-gray-300 w-1/5'>Division/Class</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* JSC/JDC */}
                                        <tr>
                                            <td className="pl-4 border-r border-r-gray-300">{studentInfo?.academic.jdc_or_jsc_exam}</td>
                                            <td className="pl-4 border-r border-r-gray-300">{studentInfo?.academic.jsc_or_jdc_exam_board}</td>
                                            <td className="pl-4 border-r border-r-gray-300">{studentInfo?.academic.jsc_or_jdc_exam_year}</td>
                                            <td className="pl-4 border-r border-r-gray-300">{studentInfo?.academic.jdc_or_jsc_exam_result}</td>

                                        </tr>
                                        {/* SSC/DAKHIL */}
                                        <tr>
                                            <td className="pl-4 border-r border-r-gray-300">{studentInfo?.academic.ssc_or_dakhil_exam}</td>
                                            <td className="pl-4 border-r border-r-gray-300">{studentInfo?.academic.ssc_or_dakhil_board}</td>
                                            <td className="pl-4 border-r border-r-gray-300">{studentInfo?.academic.ssc_or_dakhil_exam_year}</td>
                                            <td className="pl-4 border-r border-r-gray-300">{studentInfo?.academic.ssc_or_dakhil_exam_result}</td>

                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div> : <div>
                            <h1 className='text-2xl pb-3'>Previous School and Class of passing the Last Class</h1>
                            <table className="table table-zebra border border-gray-200">

                                <thead>
                                    <tr className='bg-gray-200 border-b-4'>
                                        <th className='border-r border-gray-300 w-2/6'>Previous School</th>
                                        <th className='border-r border-gray-300 w-1/6'>Previous Class</th>
                                        <th className='border-r border-gray-300 w-1/6'>Result</th>
                                        <th className='border-r border-gray-300 w-1/6'>Class</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="pl-4 border-r border-r-gray-300">{studentInfo?.academic.previous_school}</td>
                                        <td className="pl-4 border-r border-r-gray-300">{studentInfo?.academic.previous_class}</td>
                                        <td className="pl-4 border-r border-r-gray-300">{studentInfo?.academic.previous_class_final_exam_result}</td>
                                        <td className="pl-4 border-r border-r-gray-300">{studentInfo?.admission_info.desired_class}</td>


                                    </tr>

                                </tbody>
                            </table>
                        </div>}
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default ViewProfile
