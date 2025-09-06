
import React from 'react'
import Marquee from "react-fast-marquee";

import { Link } from 'react-router-dom';
import useNotice from '../../../hooks/useNotice';
// import NoticeScroll from './NoticeScroll/NoticeScroll';

const Scroll = () => {
  const [notices] = useNotice()

  return (
    <div style={{ backgroundImage: `url('/b21862d4-30e1-40ee-af2b-3540c3f4221f.png')` }} className='max-w-6xl mx-auto'>
      <Marquee pauseOnHover={true} className='py-5 heading font-medium cursor-pointer'>
        {
          notices.map(notice =>
            <Link key={notice._id} to={`/notice-details/${notice._id}`} className='mr-6 hover:text-[#4cfcd3]'>{notice?.notice_title}</Link>
          )
        }
      </Marquee>
    </div>
  )
}

export default Scroll
