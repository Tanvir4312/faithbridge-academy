import useFormFillUpInfo from '../../../../hooks/useFormFillUpInfo'
import useRole from '../../../../hooks/useRole'
import useStudentInfo from '../../../../hooks/useStudentInfo'

import { Link } from 'react-router-dom'


const StudentProfile = () => {

  const studentInfo = useStudentInfo()
  const formFillUpData = useFormFillUpInfo()
  const [role] = useRole()

  return (
    <div>
      <div className='m-5'>
        <Link to={'/view-profile'}><button className='btn mr-6 mb-4 md:mb-0 font-bold'>View Profile</button></Link>
        {
          studentInfo?.registration_no === formFillUpData?.registration_no ? <Link to={'/form-fillUp-info'}><button className='btn font-bold'>Form fill up</button></Link> : <Link to={'/form-fill-up'}><button className='btn font-bold'>Form fill up</button></Link>

        }
      </div>
      <div className='text-center pt-20 lg:max-w-2xl md:max-w-96 max-w-40 mx-auto mt-10 pb-10 rounded-2xl bg-[#bdf9eb]'>
        <h1 className='px-2'><span className='md:text-2xl font-bold'></span> <span className='md:text-3xl text-lg font-bold bg-[#006F5C] text-white md:px-4 py-2 px-2  rounded'>{role}</span></h1>
        <div className='flex justify-center items-center mt-10'>
          {
            studentInfo?.profile_image && <img referrerPolicy='no-referrer' className='md:w-44 rounded-bl-4xl rounded-tr-4xl' src={studentInfo?.profile_image} alt="" />
          }
        </div>

      </div>

    </div>
  )
}

export default StudentProfile
