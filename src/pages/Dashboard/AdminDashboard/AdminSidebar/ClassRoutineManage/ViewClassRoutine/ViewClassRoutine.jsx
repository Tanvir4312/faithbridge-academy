import React from 'react'
import useAxiosSecure from '../../../../../../hooks/useAxiosSecure'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import ShowRoutine from './ShowRoutine/ShowRoutine'

const ViewClassRoutine = () => {
    const axiosASecure = useAxiosSecure()
    const [allRoutineData, setAllRoutineData] = useState([])
    const [classValue, setClassValue] = useState(null)
    const [classGroup, setClassGroup] = useState(null)


    const { data: all_routine_data = [], refetch } = useQuery({
        queryKey: ['all_routine_data'],
        queryFn: async () => {
            const { data } = await axiosASecure.get('/get-routine')
            setAllRoutineData(data)
            return all_routine_data
        }
    })

    const filterRoutineData = allRoutineData.filter(routineData => {
        const matchClass = classValue ? routineData?.class_name === classValue : true;
        const matchGroup = classGroup ? routineData?.group === classGroup : true

        return matchClass && matchGroup
    })

    return (
        <div className='max-w-6xl mx-auto'>


            <div className='flex gap-5'>
                {/* Class */}
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Class</legend>
                    <select name='class_name' defaultValue="Class" className="select" onChange={(e) => setClassValue(e.target.value)}>
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
                    <legend className="fieldset-legend">Group</legend>
                    <select defaultValue="Group" className="select" onChange={(e) => setClassGroup(e.target.value)}>
                        <option disabled={true}>Group</option>
                        <option value={'Science'}>Science</option>
                        <option value={'Commerce'}>Commerce</option>
                        <option value={'Humanities'}>Humanities</option>
                        <option value={''}>No Group</option>

                    </select>
                </fieldset>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Class</th>
                            <th>Day</th>
                            <th>Group</th>
                            <th>Subject</th>
                            <th>Time Slot</th>
                            <th>Teacher's Name</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filterRoutineData.map((data, idx) => <ShowRoutine
                                key={data._id}
                                routine={data}
                                refetch={refetch}
                                idx={idx}
                            ></ShowRoutine>)
                        }


                    </tbody>
                </table>
            </div>

            <div className='my-7'>


            </div>
        </div>
    )
}

export default ViewClassRoutine
