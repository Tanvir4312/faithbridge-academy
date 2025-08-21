import React from 'react'
import Marquee from "react-fast-marquee";

const Scroll = () => {
  return (
    <div style={{ backgroundImage: `url('/b21862d4-30e1-40ee-af2b-3540c3f4221f.png')` }} className='max-w-6xl mx-auto'>
 <Marquee pauseOnHover={true} className='py-5 heading font-medium cursor-pointer'>
    <p className='mr-6 hover:text-[#4cfcd3]'>📚 Mid-Term Examinations Begin July 15, 2025</p>
    <p className='hover:text-[#4cfcd3]'>🌙 Eid-ul-Adha Holiday Announcement!!</p>
  </Marquee>
    </div>
  )
}

export default Scroll
