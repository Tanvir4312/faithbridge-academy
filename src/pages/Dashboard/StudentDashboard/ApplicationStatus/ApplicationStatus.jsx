import { useQuery } from '@tanstack/react-query'

import useAxiosSecure from '../../../../hooks/useAxiosSecure'
    ;
import useAuth from '../../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const ApplicationStatus = () => {
    const { user, loading } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: studentApplyInfo = [] } = useQuery({
        queryKey: ['applier'],
        enabled: !loading,
        queryFn: async () => {
            const { data } = await axiosSecure.get('/student-information')
            return data
        }
    })


    const applier = studentApplyInfo.find(applier => user?.email === applier.email)

    return (
        <div>
            <h1 className='text-3xl font-bold text-center py-4'>Your apply information</h1>
            <hr />

            {
                applier && <div className='my-5 whitespace-normal break-words'>
                    <div className='text-center my-8'>
                        <Link to={'/dashboard/apply-payment'}><button disabled={applier.payment_status === 'Done'} className={`px-6 py-2 rounded-lg text-white font-semibold ${applier.payment_status === 'Done' ? 'cursor-not-allowed bg-[#a8a8a8] text-blue-100' : 'cursor-pointer bg-amber-500'}`}>Payment</button></Link>
                    </div>
                    {

                        <div >
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                                <div>
                                    {/* Student Photo with placeholder */}
                                    {applier.image ? (
                                        <img
                                            src={applier.image}
                                            alt="Student"
                                            className="w-32 h-32 object-cover mb-2 rounded-lg"
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
                                </div>
                                <div>
                                    <h2 className='text-2xl font-medium'>Academic</h2>
                                    <p><span className="text-lg font-medium">Previous_school:</span>{applier.academic.previous_school}</p>
                                    <p><span className="text-lg font-medium">Last_exam:</span>{applier.academic.last_exam}</p>
                                    <p><span className="text-lg font-medium">Last_exam_result:</span>{applier.academic.last_exam_result}</p>
                                    <p><span className="text-lg font-medium">Public_exam_reg_no:</span>{applier.academic.public_exam_reg_no}</p>
                                    <p><span className="text-lg font-medium">Public_exam_roll:</span>{applier.academic.public_exam_roll}</p>
                                    <p><span className="text-lg font-medium">Tc_status:</span>{applier.academic.tc_status === true ? 'Yes' : 'No'}</p>
                                </div>
                                <div>
                                    <h2 className='text-2xl font-medium'>Address</h2>
                                    <p><span className="text-lg font-medium">Present Address:</span>{applier.address.present}</p>
                                    <p><span className="text-lg font-medium">Permanent Address:</span>{applier.address.permanent}</p>
                                </div>
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                                <div>
                                    <h2 className='text-2xl font-medium'>Admission_info</h2>
                                    <p><span className="text-lg font-medium">desired_class:</span>{applier.admission_info.desired_class}</p>
                                    <p><span className="text-lg font-medium">session:</span>{applier.admission_info.session}</p>
                                    <p><span className="text-lg font-medium">quota:</span> {applier.admission_info.quota}</p>
                                </div>
                                <div>
                                    <h2 className='text-2xl font-medium'>Guardian_info</h2>
                                    <p><span className="text-lg font-medium">Father_name:</span>{applier.guardian.father_name}</p>
                                    <p><span className="text-lg font-medium">Father_occupation:</span>{applier.guardian.father_occupation}</p>
                                    <p><span className="text-lg font-medium">Mother_name:</span>{applier.guardian.mother_name}</p>
                                    <p><span className="text-lg font-medium">Mother_occupation:</span>{applier.guardian.mother_occupation}</p>
                                </div>
                                <div>
                                    <h2 className='text-2xl font-medium'>Contact</h2>
                                    <p><span className="text-lg font-medium">Guardian_mobile:</span>{applier.contact.guardian_mobile}</p>
                                    <p><span className="text-lg font-medium">Student_mobile:</span>{applier.contact.student_mobile}</p>
                                </div>
                            </div>
                            <div className='text-center my-8'>
                                <h3><span className='md:text-4xl font-bold'>Payment_status:</span> <span className={`${applier.payment_status === 'Pending' ? 'text-red-700' : 'text-green-600'} md:text-3xl font-bold`}>{applier.payment_status}</span></h3>
                            </div>
                        </div>

                    }
                </div>
            }

        </div>
    )
}

export default ApplicationStatus
