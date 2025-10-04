import React from 'react'
import { Link } from 'react-router-dom'

const ClassRoutineManage = () => {
  return (
    <div className='md:flex gap-5 my-5'>
     <Link to={'/admin_layout/add-class-routine'}><button className="btn">Add Class Routine</button></Link>
     <Link to={'/admin_layout/view-class-routine'}><button className="btn">View Class Routine</button></Link>
    </div>
  )
}

export default ClassRoutineManage
