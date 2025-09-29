import React from 'react'
import { Link } from 'react-router-dom'

const Payments = () => {
  return (
    <div className='mt-5'>
      <Link to={'/admin_layout/all-payment'}><button className="btn">All Payment</button></Link>
    </div>
  )
}

export default Payments
