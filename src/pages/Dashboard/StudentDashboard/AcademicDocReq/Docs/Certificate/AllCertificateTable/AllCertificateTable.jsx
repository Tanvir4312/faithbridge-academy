import React from 'react'

const AllCertificateTable = ({ data, idx }) => {
    const { student_name, year, status } = data || {}

    return (
        <tr className="bg-base-200">
            <th>{idx + 1}</th>
            <td>{student_name}</td>
            <td>{year}</td>
            <td>{status === 'pending' ? <p className='text-red-600'>Pending</p> : <p className='text-green-600'>Verified</p>}</td>
            <td>{status === 'verified' && <p>Download Copy</p>}</td>
        </tr>
    )
}

export default AllCertificateTable
