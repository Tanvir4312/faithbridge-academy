import React from 'react'
import prospectusBg from '../../../assets/second-bg.jpg'
import prospectus from '../../../assets/prospectus.jpg'

const Prospectus = () => {
  return (
    <div className='rounded shadow-2xl pb-8 md:mt-7 lg:mt-0 ' style={{backgroundImage: `url(${prospectusBg})`}}>
      <h2 className='text-center text-3xl font-bold heading py-7'>Prospectus</h2>
      <div className='lg:max-w-72 md:max-w-96 max-w-48 mx-auto'>
        <img className='w-full' src={prospectus} alt="" />
      </div>
     <div className='text-center'>
       <button className='btn btn-outline text-xl font-medium hover:bg-[#007B5E] hover:text-white mt-7'>DETAILS</button>
     </div>
    </div>
  )
}

export default Prospectus
