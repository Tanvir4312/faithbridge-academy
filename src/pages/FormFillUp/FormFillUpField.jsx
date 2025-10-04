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
    const [classValue, setClassValue] = useState(null)


    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])


    const handleValidateCaptcha = () => {

        const user_captcha_value = captchaRef.current.value;

        if (validateCaptcha(user_captcha_value) === false) {
            captchaRef.current.value = ''
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
        const group = form.group.value;
        const name_bn = form.name_bn.value;
        const name_en = form.name_en.value;
        const father_name = form.father_name.value;
        const mother_name = form.mother_name.value;


        const desiredClass = (studentInfo?.admission_info?.desired_class);
        const studentRoll = (studentInfo?.class_roll);
        const studentGroup = studentInfo?.admission_info?.group;
        const nameBangla = studentInfo?.name_bn;
        const nameEnglish = studentInfo?.name_en;
        const fatherName = studentInfo?.guardian?.father_name;
        const MotherName = studentInfo?.guardian?.mother_name;


        if (reg_no !== studentInfo?.registration_no) {
            setDisabled(true)
            return alert('Your Registration number invalid')
        }


        if (
            class_level !== desiredClass ||
            class_roll !== studentRoll ||
            name_bn !== nameBangla ||
            name_en !== nameEnglish ||
            father_name !== fatherName ||
            mother_name !== MotherName ||
            (studentGroup && group !== studentGroup)
        ) {
            setDisabled(true);
            return alert('Your Information invalid');
        }




        const fomFillUpIfo = {
            image: studentInfo?.profile_image,
            signature: studentInfo?.signature_image,

            registration_no: reg_no,
            name_bn,
            name_en,
            father_name,
            mother_name,
            email: user?.email,
            class_roll,
            examination_name,
            examination_year,
            class: class_level,
            group: group === 'Group' ? '' : group,
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
                    {/* Name(Bangla) */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name(Bangla)**</legend>
                        <input required name='name_bn' type="text" className="input" placeholder="Name(Bangla)" />
                    </fieldset>
                    {/* Name(English) */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name(English)**</legend>
                        <input required name='name_en' type="text" className="input" placeholder="Name(English)" />
                    </fieldset>
                    {/* Father Name */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Father Name**</legend>
                        <input required name='father_name' type="text" className="input" placeholder="Father Name" />
                    </fieldset>
                    {/* Mother Name*/}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Mother Name**</legend>
                        <input required name='mother_name' type="text" className="input" placeholder="Mother Name" />
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
                        <select required name='class_level' defaultValue="Class" className="select" onChange={(e) => setClassValue(e.target.value)}>
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
                            <option value={11}>Class - 11</option>
                            <option value={12}>Class - 12</option>

                        </select>
                    </fieldset>
                    {/* Group */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Group**</legend>
                        <select disabled={!['9', '10', '11', '12'].includes(classValue)} required name='group' defaultValue="Group" className="select">
                            <option disabled={true}>Group</option>
                            <option value={"Arts"}>Arts</option>
                            <option value={'Science'}>Science</option>
                            <option value={'Commerce'}>Commerce</option>


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
