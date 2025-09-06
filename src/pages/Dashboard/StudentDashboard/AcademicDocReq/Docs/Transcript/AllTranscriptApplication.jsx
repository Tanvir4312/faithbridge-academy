import React, { useEffect, useState } from 'react'
import useAuth from '../../../../../../hooks/useAuth'
import useAxiosSecure from '../../../../../../hooks/useAxiosSecure'
import AllTranscriptTable from './AllTranscriptTable/AllTranscriptTable'

const AllTranscriptApplication = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [transcriptData, setTranscriptData] = useState([])



    useEffect(() => {
        const fetchTranscriptData = async () => {
            const res = await axiosSecure.get(`/transcript-data/${user?.email}`)
            setTranscriptData(res.data)
        }
        fetchTranscriptData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <h3 className='text-2xl'>Transcript List</h3>

            <div>
                <h2 className='text-lg my-5'><span className='text-2xl font-bold text-orange-600'>Notice:</span> Once your status has been verified, kindly contact the <span className='font-bold'>administrative office</span> at <span className='font-bold'>Room No. 122</span>.</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Student Name</th>
                            <th>Year</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transcriptData.map((data, idx) => <AllTranscriptTable
                                key={data._id}
                                data={data}
                                idx={idx}
                            ></AllTranscriptTable>)
                        }

                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default AllTranscriptApplication
