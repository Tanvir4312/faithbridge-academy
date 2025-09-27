import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { useState } from 'react'
import logo2 from '../../../assets/logo2.jpg'
import examinerSignature from '../../../assets/signature.png'


const AdmitCard = () => {
    const { id } = useParams()
    const axiosSecure = useAxiosSecure()
    const [admitCardData, setAdmitCardData] = useState(null)


    useEffect(() => {
        const fetchAdmitCardInfo = async () => {
            const { data } = await axiosSecure.get(`/admit-card-info/${id}`)
            setAdmitCardData(data)
        }
        fetchAdmitCardInfo()
    }, [axiosSecure, id])
    console.log(admitCardData)
    const { name_en, name_bn, class_roll, class: student_class, examination_name, father_name, mother_name, examination_year, registration_no, group, image, signature } = admitCardData || {}


    return (
        <div id="admit-card" className="p-6 max-w-6xl mx-auto">
            <div className='flex items-center justify-between'>
                <div className='flex gap-3 md:w-96'>
                    <img className='w-20' src={logo2} alt="" />
                    <div>
                        <h1 className='heading text-xl font-bold'>FaithBridge International Academy</h1>
                        <p className='font-medium'>Tongi, Gazipur-1712</p>
                    </div>
                </div>
                <div className='border'>
                    <p className='border-b px-6'><strong>Class:</strong> {student_class}</p>
                    <p className='px-6'><strong>Roll:</strong> {class_roll}</p>
                </div>
            </div>
            <h2 className="text-xl font-bold text-center my-4 py-1 bg-slate-300">Admit Card</h2>
            <div className='flex justify-between'>
                <div>
                    <p><strong>Name (ENG):</strong> {name_en}</p>
                    <p><strong>Name (BN):</strong> {name_bn}</p>
                    <p><strong>Father Name:</strong> {father_name}</p>
                    <p><strong>Mother Name:</strong> {mother_name}</p>
                </div>
                <div>

                    <p><strong>Reg NO:</strong> {registration_no}</p>
                    <p><strong>Group:</strong> {group}</p>
                    <p><strong>Exam:</strong> {examination_name}</p>
                    <p><strong>Year:</strong> {examination_year}</p>
                </div>
                <div>
                    <img className='w-32 h-28 border-2' src={image} alt="" />
                </div>

            </div>

            {/* Signature */}
            <div className='mt-8 mb-4 flex items-center justify-between'>

                {/* Candidate's Signature */}
                <div>
                    <img className='mb-3 w-32 h-10' src={signature} alt="" />
                    <p><strong>Candidate's Signature</strong></p>
                </div>

                {/* Examiner's Signature */}
                <div>
                    <img className='mb-3 w-32 h-10' src={examinerSignature} alt="" />
                    <p><strong>Examiner's Signature</strong></p>
                </div>
            </div>
            <div className="divider"></div>

            {/* Rules */}
            <div>
                <ul className='list-disc'>
                    <li>পরীক্ষার হলে মোবাইল ফোন, ইলেকট্রনিক ডিভাইস, ব্যাগ, বই খাতা ও মূল্যবান জিনিসপত্র আনা সম্পূর্ণ নিষেধ এবং সংশ্লিষ্ট বিভাগের অনুমোদিত ক্যালকুলেটর ছাড়া অন্য কোনো প্রকার ক্যালকুলেটর ব্যবহার করা যাবে না।
                    </li>
                    <li>প্রশ্নপত্র বিলি করার পর এক ঘণ্টা অতিবাহিত না হওয়া পর্যন্ত পরীক্ষার্থীদের পরীক্ষার কক্ষ ত্যাগ করতে দেওয়া হবে না।</li>
                    <li>In no case will an examinee be admitted into the examination Hall, or given a question paper, more than 15 minutes after the examination has commenced, but in very special circumstances, Officer in Charge may extend this time limit up to half an hour.</li>
                </ul>
            </div>
            <div>
                <button
                    onClick={() => window.print()}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Download / Print
                </button>
            </div>
        </div>
    )
}

export default AdmitCard
