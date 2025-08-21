import React from 'react'
import prospectusBg from '../../../../assets/prospectus-bg.avif'

const CoursesSlide = () => {
    return (
        <div className='w-[365px] h-[300px] group hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105'>
            <div style={{backgroundImage: `url(${prospectusBg})`}} className='text-center w-full h-full px-6 py-10 '>
                <h1 className='text-2xl font-medium'>Quran memorization (Hifz)</h1>
                <button className='btn btn-outline mt-7 group-hover:bg-[#007B5E] group-hover:text-white group-hover:border-none '>Details</button>
            </div>
        </div>
    )
}

export default CoursesSlide
