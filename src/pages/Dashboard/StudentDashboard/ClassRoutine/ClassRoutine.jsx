import React from 'react'

import useStudentInfo from '../../../../hooks/useStudentInfo'
import useAxiosSecure from '../../../../hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'


const ClassRoutine = () => {
    const axiosASecure = useAxiosSecure()
    const [allRoutineData, setAllRoutineData] = useState([])

    const studentInfo = useStudentInfo()
    const studentClass = studentInfo?.admission_info?.desired_class
    const studentGroup = studentInfo?.admission_info?.group



    const { data: all_routine_data = [] } = useQuery({
        queryKey: ['all_routine_data'],
        queryFn: async () => {
            const { data } = await axiosASecure.get('/get-routine')
            setAllRoutineData(data)
            return all_routine_data
        }
    })
   
    const filterRoutineData = allRoutineData.filter(routineData => {
        const matchClass = studentClass ? routineData?.class_name === studentClass : true;
        const matchGroup = studentGroup ? routineData?.group === studentGroup : true;
        return matchClass && matchGroup
    })

    // Grid
    const getGridCls = cls => {
        if (cls >= 1 && cls <= 3) return 'grid-cols-4';
        if (cls >= 4 && cls <= 6) return 'grid-cols-5';
        if (cls >= 7 && cls <= 12) return 'grid-cols-8';
        return 'grid-cols-4'
    }


    return (
        <div className='max-w-6xl mx-auto'>

            <h2 className='my-3 text-xl font-medium'>Class: {studentClass}</h2>
            {studentGroup && <h2 className='my-3 text-xl font-medium'>Group: {studentGroup}</h2>}

            {/* Class Routine Table */}

            <div className={`${getGridCls(Number(studentClass))} gap-1 md:grid print:grid`}>
                {
                    filterRoutineData.map(routine => <div className='border p-1' key={routine._id}>

                        <p className='font-medium text-center mb-2'>Day: {routine?.day}</p>
                        <p className='text-sm'><span className='font-medium'>Time Slot:</span> {routine?.time_slot}</p>
                        {routine?.subject ? <p className='text-sm'><span className='font-medium'>Subject:</span> {routine?.subject}</p> : <p className='font-bold text-center'>Break</p>}
                        {routine?.teachers_name && <p className='text-sm'><span className='font-medium'>Teacher:</span> <span className='font-bold'>{routine?.teachers_name}</span></p>}

                    </div>)
                }
            </div>

            <button
                onClick={() => window.print()}
                className="my-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
                Download / Print
            </button>
        </div>
    )
}

export default ClassRoutine
