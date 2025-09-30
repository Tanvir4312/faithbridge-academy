import React from 'react'
import { Link } from 'react-router-dom'

const AllCertificateTable = ({ data, idx }) => {
    const { student_name, year, status, _id } = data || {}

    return (
        <tr className="bg-base-200">
            <th>{idx + 1}</th>
            <td>{student_name}</td>
            <td>{year}</td>
            <td>{status === 'pending' ? <p className='text-red-600'>Pending</p> : <p className='text-green-600'>Verified</p>}</td>
            <td>{status === 'verified' && <Link to={`/certificate-copy/${_id}`}><p className='cursor-pointer underline text-blue-500'>Show Copy</p></Link>}</td>
        </tr>
    )
}

export default AllCertificateTable
