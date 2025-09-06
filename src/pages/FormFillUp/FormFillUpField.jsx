import React from 'react'
import useAuth from '../../hooks/useAuth'
import Swal from 'sweetalert2'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import { useNavigate } from 'react-router-dom'
import useStudentInfo from '../../hooks/useStudentInfo'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'



const FormFillUpField = () => {
    const { user } = useAuth()
    const studentInfo = useStudentInfo()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const captchaRef = useRef()
    const [disabled, setDisabled] = useState(true)


    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])


    const handleValidateCaptcha = () => {
      
        const user_captcha_value = captchaRef.current.value;

        if (validateCaptcha(user_captcha_value) === false) {
            return alert('Captcha Invalid')
        }
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
        captchaRef.current.value = ''
    }

    const handleFormFillUp = e => {
        e.preventDefault()

        const form = e.target
        const reg_no = form.reg_no.value;
        const class_roll = form.class_roll.value;
        const examination_name = form.examination_name.value;
        const examination_year = form.examination_year.value;
        const class_level = form.class_level.value;


        if (reg_no !== studentInfo?.registration_no) {
            return alert('Your Registration number invalid')
        }
        if (class_level !== studentInfo?.admission_info?.desired_class || class_roll !== studentInfo?.class_roll) {
            return alert('Your Information invalid')
        }




        const fomFillUpIfo = {

            registration_no: reg_no,
            email: user?.email,
            class_roll,
            examination_name,
            examination_year,
            class: class_level,
            payment: 'pending',
            status: 'pending'
        }


        Swal.fire({
            title: "Please recheck your information",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Confirm Now!!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                await axiosSecure.post('/form-fillUp-info', fomFillUpIfo)

                navigate('/form-fillUp-info')



                Swal.fire({
                    title: "Thank You!",
                    text: "Your Form fill up has been Done.",
                    icon: "success"
                });
            }
        });

    }



    return (
        <div className='mb-8 px-5 lg:px-0'>

            <form onSubmit={handleFormFillUp} >
                <div className='grid md:grid-cols-2'>
                    {/* REG NO */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">REG No**</legend>
                        <input required name='reg_no' type="text" className="input" placeholder="REG No" />
                    </fieldset>

                    {/* Class Roll */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Class Roll**</legend>
                        <input required name='class_roll' type="text" className="input" placeholder="Class Roll" />
                    </fieldset>

                    {/* Examination Name */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Examination Name**</legend>
                        <select required name='examination_name' defaultValue="Examination Name" className="select">
                            <option disabled={true}>Examination Name</option>
                            <option>First Term Exam</option>
                            <option>Second Term Exam</option>
                            <option>Annual Exam</option>
                            <option>Test Exam</option>
                        </select>
                    </fieldset>

                    {/* Exam Year */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Examination Year**</legend>
                        <select required name='examination_year' defaultValue="Examination Year" className="select">
                            <option disabled={true}>Examination Year</option>
                            <option>2025</option>

                        </select>
                    </fieldset>
                    {/* Class */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Class**</legend>
                        <select required name='class_level' defaultValue="Class" className="select">
                            <option disabled={true}>Class</option>
                            <option value={1}>Class - 1</option>
                            <option value={2}>Class - 2</option>
                            <option value={3}>Class - 3</option>
                            <option value={4}>Class - 4</option>
                            <option value={5}>Class - 5</option>
                            <option value={6}>Class - 6</option>
                            <option value={7}>Class - 7</option>
                            <option value={8}>Class - 8</option>
                            <option value={9}>Class - 9</option>
                            <option value={10}>Class - 10</option>

                        </select>
                    </fieldset>

                </div>
                <div className='mt-3 border-4 border-[#00bd91] lg:max-w-[467px] md:max-w-[460px] p-5 '>

                    <LoadCanvasTemplate />
                    <div className='md:flex justify-center items-center'>
                        <input type="text" ref={captchaRef} placeholder="Type here" className="input mt-1" />

                        <input onClick={handleValidateCaptcha} type="button" value="Validate" className='bg-[#bdfced] md:ml-3 mt-2 md:mt-1 px-3 py-[6px] rounded cursor-pointer' />
                    </div>

                </div>
                <button disabled={disabled} className='btn mt-4 bg-[#00bd91] text-white'>Submit</button>
            </form>



        </div>
    )
}

export default FormFillUpField
