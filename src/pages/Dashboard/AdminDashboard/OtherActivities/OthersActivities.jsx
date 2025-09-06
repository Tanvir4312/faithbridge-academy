import React from 'react'
import { Link } from 'react-router-dom'

const OthersActivities = () => {
  return (
    <div className='mt-5 space-x-5'>
      <Link to={'/admin_layout/add-activities'}> <button className="btn">Add Activities</button></Link>
      <Link to={'/admin_layout/view-activities'}><button className="btn">View Activities</button></Link>
    </div>
  )
}

export default OthersActivities
