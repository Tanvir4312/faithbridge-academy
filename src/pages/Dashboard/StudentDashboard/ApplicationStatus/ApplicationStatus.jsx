

import { Link } from 'react-router-dom';
import useStudentInfo from '../../../../hooks/useStudentInfo';
import Marquee from "react-fast-marquee";



const ApplicationStatus = () => {

    const studentInfo = useStudentInfo()

    const applier = studentInfo



    return (
        <div>
            <h1 className='md:text-3xl font-bold text-center py-4'>Your apply information</h1>
            <hr />
            <div className='mt-4'>
                {studentInfo?.status_exam && (
                    <Marquee>
                        <span className='font-bold text-orange-500'>
                            &nbsp;Congratulations! You have been selected for the admission exam.
                        </span>&nbsp;
                        Please keep an eye on the&nbsp;
                        <span className='text-orange-500'>Notice Board</span>&nbsp;
                        of our website for further updates regarding the examination.
                    </Marquee>
                )}
            </div>
            {
                applier ?
                    <div className='my-5 whitespace-normal break-words'>

                        <div className='md:flex flex-row-reverse items-center justify-between '>
                            <div className='text-center my-8'>
                                <Link to={'/dashboard/apply-payment?text=admission'}><button disabled={applier.payment_status === 'Done'} className={`px-6 py-2 rounded-lg text-white font-semibold ${applier.payment_status === 'Done' ? 'cursor-not-allowed bg-[#a8a8a8] text-blue-100' : 'cursor-pointer bg-amber-500'}`}>Payment</button></Link>
                            </div>
                            <div className='mb-4'>
                               {studentInfo?.status_exam ? <h2 className='text-3xl'>Admission Status: <span className='text-green-600'>Accept For Admission Exam</span></h2> : <h2 className='text-3xl'>Admission Status:{studentInfo?.status === 'pending' && <span className='text-yellow-400 pl-2'>Pending</span>}{studentInfo?.status === 'rejected' && <span className='text-red-500 pl-2'>Rejected</span>}</h2>}
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>

                            {/* First Column */}
                            <div>

                                {/* Profile Image */}
                                {applier.profile_image ? (
                                    <img
                                        src={applier?.profile_image}
                                        alt="Student"
                                        className="w-36 object-contain mb-2 overflow-hidden rounded-lg"
                                    />
                                ) : (
                                    <div className="w-32 h-32 bg-gray-200 flex items-center justify-center text-gray-500 mb-2">
                                        No Photo
                                    </div>
                                )}

                                <p><span className="text-lg font-medium">Email:</span>{applier.email}</p>
                                <p><span className="text-lg font-medium">Name (Bangla):</span>{applier.name_bn
                                }</p>
                                <p><span className="text-lg font-medium">Name(English):</span>{applier.name_en}</p>
                                <p><span className="text-lg font-medium">Registration_no:</span>{applier.registration_no}</p>
                                <p><span className="text-lg font-medium">Birth_certificate_no:</span>{applier.birth_certificate_no}</p>
                                <p><span className="text-lg font-medium">Blood_group:</span>{applier.blood_group}</p>
                                <p><span className="text-lg font-medium">Date_of_birth:</span>{applier.dob}</p>
                                <p><span className="text-lg font-medium">Gender:</span>{applier.gender}</p>
                                <p><span className="text-lg font-medium">Religion:</span>{applier.religion}</p>
                                <p><span className="text-lg font-medium">Nationality:</span>{applier.nationality}</p>



                                {/* Admission Info */}
                                <div className='mt-4'>
                                    <h2 className='text-2xl font-medium'>Admission_info</h2>
                                    <p><span className="text-lg font-medium">desired_class:</span>{applier.admission_info.desired_class}</p>
                                    <p><span className="text-lg font-medium">Group:</span>{applier.admission_info.group}</p>
                                    <p><span className="text-lg font-medium">Year:</span>{applier.admission_info.year}</p>
                                    <p><span className="text-lg font-medium">quota:</span> {applier.admission_info.quota}</p>
                                </div>

                                {/* Guardian Info */}
                                <div>
                                    <h2 className='text-2xl font-medium'>Guardian_info</h2>
                                    <p><span className="text-lg font-medium">Father_name:</span>{applier.guardian.father_name}</p>
                                    <p><span className="text-lg font-medium">Father_occupation:</span>{applier.guardian.father_occupation}</p>
                                    <p><span className="text-lg font-medium">Mother_name:</span>{applier.guardian.mother_name}</p>
                                    <p><span className="text-lg font-medium">Mother_occupation:</span>{applier.guardian.mother_occupation}</p>
                                </div>
                            </div>

                            {/* Second Column */}
                            <div>
                                {/* Academic */}
                                <div>
                                    <h2 className='text-2xl font-medium'>Academic</h2>
                                    <hr />


                                    <h2 className='pt-2 text-center'><strong>JSC/JDC</strong></h2>
                                    <div className='max-w-28 mx-auto'>
                                        <hr />
                                    </div>
                                    {/* JDC or JSC */}
                                    <div>

                                        <h2 className='text-2xl font-medium text-center pb-2'>{applier.academic.jdc_or_jsc_exam}</h2>
                                    </div>
                                    <p><span className="text-lg font-medium">REG No:</span>{applier.academic.jdc_or_jsc_exam_reg_no}</p>
                                    <p><span className="text-lg font-medium">ROLL No:</span>{applier.academic.jdc_or_jsc_exam_roll}</p>
                                    <p><span className="text-lg font-medium">Board:</span>{applier.academic.jsc_or_jdc_exam_board}</p>
                                    <p><span className="text-lg font-medium">Session:</span>{applier.academic.jsc_or_jdc_session}</p>
                                    <p><span className="text-lg font-medium">Division/Class:</span>{applier.academic.jdc_or_jsc_exam_result}</p>
                                    <p><span className="text-lg font-medium">Year:</span>{applier.academic.jsc_or_jdc_exam_year}</p>
                                    <p><span className="text-lg font-medium">Institute:</span>{applier.academic.jsc_or_jdc_Institute}</p>

                                    {/* ---------------------------- */}

                                    <h2 className='pt-2 text-center'><strong>SSC/DAKHIL</strong></h2>
                                    <div className='max-w-28 mx-auto'>
                                        <hr />
                                    </div>

                                    {/* SSC or Dakhil */}
                                    <div>
                                        <h2 className='text-2xl font-medium text-center py-2'>{applier.academic.ssc_or_dakhil_exam}</h2>
                                    </div>
                                    <p><span className="text-lg font-medium">REG No:</span>{applier.academic.ssc_or_dakhil_exam_reg_no}</p>
                                    <p><span className="text-lg font-medium">ROLL No:</span>{applier.academic.ssc_or_dakhil_exam_roll}</p>
                                    <p><span className="text-lg font-medium">Board:</span>{applier.academic.ssc_or_dakhil_board}</p>
                                    <p><span className="text-lg font-medium">Session:</span>{applier.academic.ssc_or_dakhil_session}</p>
                                    <p><span className="text-lg font-medium">Division/Class:</span>{applier.academic.ssc_or_dakhil_exam_result}</p>
                                    <p><span className="text-lg font-medium">Year:</span>{applier.academic.ssc_or_dakhil_exam_year}</p>
                                    <p><span className="text-lg font-medium">Institute:</span>{applier.academic.ssc_or_dakhil_Institute}</p>
                                    {/* ---------------------------------- */}

                                </div>
                                {/* Other Info */}
                                <div>
                                    <div>
                                        <h2 className='text-2xl font-medium text-center py-2'>Other Info</h2>
                                    </div>
                                    <p><span className="text-lg font-medium">Previous_School/Madrasah:</span>{applier.academic.previous_school}</p>
                                    <p><span className="text-lg font-medium">Previous_Class:</span>{applier.academic.previous_class}</p>
                                    <p><span className="text-lg font-medium">Previous_Class_Final_Exam_Result:</span>{applier.academic.
                                        previous_class_final_exam_result}</p>

                                    <p><span className="text-lg font-medium">Tc_status:</span>{applier.academic.tc_status === true ? 'Yes' : 'No'}</p>
                                </div>

                            </div>

                            {/* Third Column */}
                            <div>

                                <div>
                                    <h2 className='text-2xl font-medium'>Address</h2>
                                    <p><span className="text-lg font-medium">Present Address:</span>{applier.address.present}</p>
                                    <p><span className="text-lg font-medium">Permanent Address:</span>{applier.address.permanent}</p>
                                </div>

                                <div>
                                    <h2 className='text-2xl font-medium'>Contact</h2>
                                    <p><span className="text-lg font-medium">Guardian_mobile:</span>{applier.contact.guardian_mobile}</p>
                                    <p><span className="text-lg font-medium">Student_mobile:</span>{applier.contact.student_mobile}</p>
                                </div>

                                {/* Profile Image */}
                                <p className='pt-4 pb-1 font-bold'>Signature:</p>
                                {applier.signature_image && (
                                    <img
                                        src={applier?.signature_image}
                                        alt="Student"
                                        className="w-48 border border-gray-200 object-cover mb-2 rounded-lg"
                                    />
                                )}

                            </div>

                        </div>
                        <div className='text-center my-8'>
                            <h3><span className='md:text-4xl font-bold'>Payment_status:</span> <span className={`${applier.payment_status === 'Pending' ? 'text-red-700' : 'text-green-600'} md:text-3xl font-bold`}>{applier.payment_status}</span></h3>
                        </div>

                    </div>
                    : <p className='md:text-4xl text-red-600 font-bold text-center'>No Information Available</p>}

        </div>
    )
}

export default ApplicationStatus
