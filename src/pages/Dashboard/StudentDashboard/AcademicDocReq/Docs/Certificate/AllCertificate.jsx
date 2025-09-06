import React, { useEffect, useState } from 'react'
import useAuth from '../../../../../../hooks/useAuth'
import useAxiosSecure from '../../../../../../hooks/useAxiosSecure'
import AllCertificateTable from './AllCertificateTable/AllCertificateTable'

const AllCertificate = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [certificateData, setCertificateData] = useState([])



    useEffect(() => {
        const fetchTranscriptData = async () => {
            const res = await axiosSecure.get(`/certificate-data/${user?.email}`)
            setCertificateData(res.data)
        }
        fetchTranscriptData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <h3 className='text-2xl'>Certificate List</h3>

            <div>
                <h2 className='text-lg my-5'><span className='text-2xl font-bold text-orange-600'>Notice:</span> Once your status has been verified, kindly contact the <span className='font-bold'>administrative office</span> at <span className='font-bold'>Room No. 122</span> with application print-copy.</h2>
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            certificateData.map((data, idx) => <AllCertificateTable
                                key={data._id}
                                data={data}
                                idx={idx}
                            ></AllCertificateTable>)
                        }

                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default AllCertificate
