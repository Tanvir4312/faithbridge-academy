import React from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
  return (
       <div className='mt-5 space-x-5'>
      <Link to={'/admin_layout/all-user'}><button className="btn">All User</button></Link>
    
   
    </div>
  )
}

export default Users
