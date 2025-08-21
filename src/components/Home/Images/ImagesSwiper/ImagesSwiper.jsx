import React from 'react'


const ImagesSwiper = ({image}) => {
  return (
    <div className='w-[365px] h-[300px] overflow-hidden'>
      <img className='h-full w-full transition-all duration-300 ease-in-out hover:scale-125' src={image} alt="" />
    </div>
  )
}

export default ImagesSwiper
