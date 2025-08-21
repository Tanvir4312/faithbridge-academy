import React from 'react'
import prospectusBg from '../../../assets/prospectus-bg.avif'

const OtherActivities = () => {
    return (
        <div className='my-7'>
            <h1 className='text-5xl heading font-bold text-center text-[#007B5E] mb-10'>    Others Activities</h1>

            <div className='flex flex-wrap gap-6 text-center px-5 md:px-0'>
                <div className='border-2 rounded p-5 hover:cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-2.5'>
                    <div style={{ backgroundImage: `url(${prospectusBg})`}} className='md:w-80 rounded'>
                        <h1 className='text-2xl font-medium text-center p-10'>Department of Literature and Culture</h1>
                    </div>
                </div>
                <div className='border-2 rounded p-5 hover:cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-2.5'>
                    <div style={{ backgroundImage: `url(${prospectusBg})`}} className='md:w-80 rounded'>
                        <h1 className='text-2xl font-medium text-center p-10'>Department of Literature and Culture</h1>
                    </div>
                </div>
                <div className='border-2 rounded p-5 hover:cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-2.5'>
                    <div style={{ backgroundImage: `url(${prospectusBg})`}} className='md:w-80 rounded'>
                        <h1 className='text-2xl font-medium text-center p-10'>Department of Literature and Culture</h1>
                    </div>
                </div>
                <div className='border-2 rounded p-5 hover:cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-2.5'>
                    <div style={{ backgroundImage: `url(${prospectusBg})`}} className='md:w-80 rounded'>
                        <h1 className='text-2xl font-medium text-center p-10'>Department of Literature and Culture</h1>
                    </div>
                </div>
                <div className='border-2 rounded p-5 hover:cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-2.5'>
                    <div style={{ backgroundImage: `url(${prospectusBg})`}} className='md:w-80 rounded'>
                        <h1 className='text-2xl font-medium text-center p-10'>Department of Literature and Culture</h1>
                    </div>
                </div>
               
               
            </div>
        </div>
    )
}

export default OtherActivities
