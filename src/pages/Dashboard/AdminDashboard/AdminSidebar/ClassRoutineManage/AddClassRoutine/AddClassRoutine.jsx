import React from 'react'
import { useState } from 'react'
import useAxiosSecure from '../../../../../../hooks/useAxiosSecure'
import { toast } from 'react-toastify'


const AddClassRoutine = () => {
    const [classValue, setClassValue] = useState(null)
    const [classGroup, setClassGroup] = useState(null)
    const axiosSecure = useAxiosSecure()
  


    const handleAddRoutine = async e => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const routineData = {};
        formData.forEach((value, key) => {

            routineData[key] = value;
        });

        await axiosSecure.post('/add-routine', routineData)
      
        toast.success('Add Successfully')
    }
    return (
        <div className='max-w-6xl mx-auto'>
            <h1 className='text-2xl font-bold text-center my-4'>Add Class Routine</h1>
            <div className='border p-5 my-5'>
                <form onSubmit={handleAddRoutine}>
                    <div className='grid grid-cols-2 gap-4'>
                        {/* Class */}
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Class</legend>
                            <select name='class_name' defaultValue="Class" className="select w-full" onChange={(e) => setClassValue(e.target.value)}>
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
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Group</legend>
                            <select disabled={!['9', '10', '11', '12'].includes(classValue)} name='group' defaultValue="Group" className="select w-full" onChange={(e) => setClassGroup(e.target.value)}>
                                <option disabled={true}>Group</option>
                                <option value={'Science'}>Science</option>
                                <option value={'Commerce'}>Commerce</option>
                                <option value={'Humanities'}>Humanities</option>

                            </select>
                        </fieldset>
                        {/* Day */}
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Day</legend>
                            <select name='day' defaultValue="Day" className="select w-full">
                                <option disabled={true}>Day</option>
                                <option value='Sun'>Sun</option>
                                <option value='Mon'>Mon</option>
                                <option value='Tue'>Tue</option>
                                <option value='Wed'>Wed</option>
                                <option value='Thu'>Thu</option>
                            </select>
                        </fieldset>


                        {/* Time Slot */}
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Time Slot</legend>
                            <select name='time_slot' defaultValue="Time Slot" className="select w-full">
                                <option disabled={true}>Time Slot</option>
                                <option value='8:00-8:55 Am'>8:00-8:55 Am</option>
                                <option value='9:00-9:40 Am'>9:00-9:40 Am</option>
                                <option value='9:40-10:20 Am'>9:40-10:20 Am</option>
                                <option value='10:20-11:00 Am'>10:20-11:00 Am</option>
                               {  ['4','5','6'].includes(classValue) ? <option value='11:00-11:40 Am'>11:00-11:40 Am</option> : <option value='11:00-11:20 Am'>Break</option>}
                                <option value='11:20-12:00 Pm'>11:20-12:00 Pm</option>
                                <option value='12:00-12:40 Pm'>12:00-12:40 Pm</option>
                                <option value='12:40-1:20 Pm'>12:40-1:20 Pm</option>

                            </select>
                        </fieldset>
                        {/*HSC Science Subject */}
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Science Subject</legend>
                            <select disabled={!(['11', '12'].includes(classValue) && ['Science'].includes(classGroup))} name='subject' defaultValue="Science Subject" className="select w-full">
                                <option disabled={true}>Science Subject</option>
                                <option value='Higher Mathematics 1st'>Higher Mathematics 1st</option>
                                <option value='Higher Mathematics 2nd'>Higher Mathematics 2nd</option>
                                <option value='Bangla 1st'>Bangla 1st</option>
                                <option value='Bangla 2nd'>Bangla 2nd</option>
                                <option value='English 1st'>English 1st</option>
                                <option value='English 2nd'>English 2nd</option>
                                <option value='Physics 1st'>Physics 1st</option>
                                <option value='Physics 2nd'>Physics 2nd</option>
                                <option value='Chemistry 1st'>Chemistry 1st</option>
                                <option value='Chemistry 2nd'>Chemistry 2nd</option>
                                <option value='Biology 1st'>Biology 1st</option>
                                <option value='Biology 2nd'>Biology 2nd</option>
                                <option value='ICT'>ICT</option>
                            </select>
                        </fieldset>
                        {/*HSC Commerce Subject */}
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Commerce Subject</legend>
                            <select disabled={!(['11', '12'].includes(classValue) && ['Commerce'].includes(classGroup))} name='subject' defaultValue="Commerce Subject" className="select w-full">
                                <option disabled={true}>Commerce Subject</option>
                                <option value='Bangla 1st'>Bangla 1st</option>
                                <option value='Bangla 2nd'>Bangla 2nd</option>
                                <option value='English 1st'>English 1st</option>
                                <option value='English 2nd'>English 2nd</option>
                                <option value='ICT'>ICT</option>
                                <option value='Accounting 1st'>Accounting 1st</option>
                                <option value='Accounting 2nd'>Accounting 2nd</option>
                                <option value='Business Organization & Management 1st'>Business Organization & Management 1st</option>
                                <option value='Business Organization & Management 2nd'>Business Organization & Management 2nd</option>
                                <option value='Finance, Banking & Insurance 1st'>Finance, Banking & Insurance 1st</option>
                                <option value='Finance, Banking & Insurance 2nd'>Finance, Banking & Insurance 2nd</option>
                                <option value='Production Management & Marketing 1st'>Production Management & Marketing 1st</option>
                                <option value='Production Management & Marketing 2nd'>Production Management & Marketing 2nd</option>

                            </select>
                        </fieldset>
                        {/*HSC Humanities Subject */}
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Humanities Subject</legend>
                            <select disabled={!(['11', '12'].includes(classValue) && ['Humanities'].includes(classGroup))} name='subject' defaultValue="Humanities Subject" className="select w-full">
                                <option disabled={true}>Humanities Subject</option>
                                <option value='Bangla 1st'>Bangla 1st</option>
                                <option value='Bangla 2nd'>Bangla 2nd</option>
                                <option value='English 1st'>English 1st</option>
                                <option value='English 2nd'>English 2nd</option>
                                <option value='ICT'>ICT</option>
                                <option value='Islamic History & Culture'>Islamic History & Culture</option>
                                <option value='History'>History</option>
                                <option value='Economics'>Economics</option>
                                <option value='Geography'>Geography</option>
                            </select>
                        </fieldset>
                        {/*Primary & Junior Secondary Subject */}
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Primary & Junior Secondary Subject</legend>
                            <select disabled={['9', '10', '11', '12'].includes(classValue)} name='subject' defaultValue="Primary & Junior Secondary Subject" className="select w-full">
                                <option disabled={true}>Primary & Junior Secondary Subject</option>
                                <option value='Bangla'>Bangla</option>
                                <option value='English'>English</option>
                                <option value='ICT'>ICT</option>
                                <option value='Mathematics'>Mathematics</option>
                                <option value='General Science'>General Science</option>
                                <option value='Bangladesh & Global Studies'>Bangladesh & Global Studies</option>
                                <option value='Religion & Moral Education'>Religion & Moral Education</option>
                                <option value='Physical Education & Health'>Physical Education & Health</option>
                            </select>
                        </fieldset>

                        {/*Secondary Level (Science) Subject */}
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Secondary Level (Science) Subject</legend>
                            <select disabled={!(['9', '10'].includes(classValue) && ['Science'].includes(classGroup))} name='subject' defaultValue="Secondary Level (Science) Subject" className="select w-full">
                                <option disabled={true}>Secondary Level (Science) Subject</option>
                                <option value='Bangla 1st'>Bangla 1st</option>
                                <option value='Bangla 2nd'>Bangla 2nd</option>
                                <option value='English 1st'>English 1st</option>
                                <option value='English 2nd'>English 2nd</option>
                                <option value='ICT'>ICT</option>
                                <option value='Higher Mathematics'>Higher Mathematics</option>
                                <option value='Physics'>Physics</option>
                                <option value='Chemistry'>Chemistry</option>
                                <option value='Biology'>Biology</option>

                            </select>
                        </fieldset>
                        {/*Secondary Level (Commerce) Subject */}
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Secondary Level (Commerce) Subject</legend>
                            <select disabled={!(['9', '10'].includes(classValue) && ['Commerce'].includes(classGroup))} name='subject' defaultValue="Secondary Level (Commerce) Subject" className="select w-full">
                                <option disabled={true}>Secondary Level (Commerce) Subject</option>
                                <option value='Bangla 1st'>Bangla 1st</option>
                                <option value='Bangla 2nd'>Bangla 2nd</option>
                                <option value='English 1st'>English 1st</option>
                                <option value='English 2nd'>English 2nd</option>
                                <option value='ICT'>ICT</option>
                                <option value='Economics'>Economics</option>
                                <option value='Accounting'>Accounting</option>
                                <option value='Business Entrepreneurship'>Business Entrepreneurship</option>
                                <option value='Finance & Banking'>Finance & Banking</option>

                            </select>
                        </fieldset>
                        {/*Secondary Level (Humanities) Subject */}
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Secondary Level (Humanities) Subject</legend>
                            <select disabled={!(['9', '10'].includes(classValue) && ['Humanities'].includes(classGroup))} name='subject' defaultValue="Secondary Level (Humanities) Subject" className="select w-full">
                                <option disabled={true}>Secondary Level (Humanities) Subject</option>
                                <option value='Bangla 1st'>Bangla 1st</option>
                                <option value='Bangla 2nd'>Bangla 2nd</option>
                                <option value='English 1st'>English 1st</option>
                                <option value='English 2nd'>English 2nd</option>
                                <option value='ICT'>ICT</option>
                                <option value='Mathematics'>Mathematics</option>
                                <option value='History'>History</option>
                                <option value='Civics & Good Governance'>Civics & Good Governance</option>
                                <option value='Religion & Moral Education'>Religion & Moral Education</option>
                            </select>
                        </fieldset>
                        {/*Teachers */}
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Teachers</legend>
                            <input name='teachers_name' className='input w-full' type="text" placeholder='Teachers Name' />
                        </fieldset>
                    </div>
                    <button className="btn btn-block my-4 bg-[#007b5e] text-white">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddClassRoutine
