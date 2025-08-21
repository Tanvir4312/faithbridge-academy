import React, { useEffect, useState } from 'react'
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const ApplyForm = () => {
    const { user } = useAuth()

    const initialFormData = {
        email: user?.email,
        registration_no: `202526` + Math.floor(1000 + Math.random() * 999999),
        name_bn: "",
        name_en: "",
        dob: "",
        gender: "",
        religion: "",
        blood_group: "",
        birth_certificate_no: "",
        payment_status: 'Pending',
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
            last_exam: "",
            public_exam_roll: "",
            public_exam_reg_no: "",
            last_exam_result: "",
            tc_status: false
        },
        admission_info: {
            desired_class: "",
            session: "",
            quota: "General"
        }
    }
    const axiosSecure = useAxiosSecure()
    const [studentsInformation, setStudentInformation] = useState([])

    const [formData, setFormData] = useState(initialFormData);
    const navigate = useNavigate()


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



    // Get student information data
    useEffect(() => {
        const fetchStudentInfo = async () => {
            const res = await axiosSecure.get('/student-information')

            setStudentInformation(res.data)

        }
        fetchStudentInfo()
    }, [axiosSecure])

    // array student information find by email
    const studentInfo = studentsInformation.find(studentEmail => user?.email === studentEmail.email)

    const handleSubmit = async (e) => {
        e.preventDefault();
   
        // If applier once a apply then
        if (user?.email === studentInfo?.email) {

            return Swal.fire({
                title: "Oops!!",
                text: "You have already applied once.",
                icon: "warning"

            });

        }


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

                    const imageFile = e.target.image.files[0]

                    const formDataImg = new FormData()
                    formDataImg.append('image', imageFile)
                    const res = await axiosSecure.post(image_hosting_api, formDataImg, {
                        headers: { 'content-type': 'multipart/form-data' }

                    })
                    const studentImg = res.data.data.display_url

                    await axiosSecure.post(`/student-information/${user?.email}`, { ...formData, image: studentImg })
                    toast.success('Your Information Successfully saved')
                    Swal.fire({
                        title: "Thank You",
                        text: "Your information has been Saved.",
                        icon: "success"
                    });
                    navigate('/dashboard/application-status')
                }


            });
        } catch (err) {
            console.error(err);
            alert("Failed to submit form");
        }
    };


    return (
        <div className='max-w-6xl mx-auto mb-10'>
            <h1 className='text-3xl font-bold my-10 text-center'>Apply Form</h1>
            
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-3 px-5'>

                    <input value={user?.email} type="email" name="email" className="input" onChange={handleChange} />

                    <input type="file" name='image' className="file-input" />
                    <input type="text" name="name_bn" placeholder="নাম (বাংলা)**" className="input" required onChange={handleChange} />

                    <input type="text" name="name_en" placeholder="Name (English)**" className="input" required onChange={handleChange} />
                    <input type="date" name="dob" className="input" required onChange={handleChange} />
                    <input type="text" name="gender" placeholder="Gender**" className="input" required onChange={handleChange} />
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
                    <input type="text" name="previous_school" data-parent="academic" placeholder="Previous School**" required className="input" onChange={handleChange} />
                    <input type="text" name="last_exam" data-parent="academic" placeholder="Last Exam**" required className="input" onChange={handleChange} />
                    <input type="text" name="public_exam_roll" data-parent="academic" placeholder="Public Exam Roll" className="input" onChange={handleChange} />
                    <input type="text" name="public_exam_reg_no" data-parent="academic" placeholder="Public Exam Reg No" className="input" onChange={handleChange} />
                    <input type="text" name="last_exam_result" data-parent="academic" placeholder="Last Exam Result" className="input" onChange={handleChange} />
                    <label>
                        TC Status:
                        <input type="checkbox" name="tc_status" data-parent="academic" onChange={handleChange} />
                    </label>

                    {/* Admission Info */}
                    <input type="text" name="desired_class" data-parent="admission_info" placeholder="Desired Class**" required className="input" onChange={handleChange} />
                    <input type="text" name="session" data-parent="admission_info" placeholder="Session**" required className="input" onChange={handleChange} />

                    <label>
                        Quota:
                        <select name="quota" data-parent="admission_info" className="select" onChange={handleChange}>

                            <option value="General">General</option>
                            <option value="Freedom Fighter">Freedom Fighter</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>


                </div>
                <div className='text-center mt-6 lg:max-w-4xl md:max-w-2xl max-w-52 mx-auto'>
                    <button className='btn btn-outline btn-block border-2 border-[#007B5E] text-[#007B5E] font-bold'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ApplyForm
