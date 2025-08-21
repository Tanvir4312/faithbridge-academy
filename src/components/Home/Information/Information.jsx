import React from 'react'
import backgroundDesign from '../../../assets/information-bg.jpeg'
import { HiOutlineMailOpen } from "react-icons/hi";
import { PiAddressBookLight } from 'react-icons/pi';
import { BsTelephone } from 'react-icons/bs';

const Information = () => {
  return (
    <div className='relative mt-10 top-16 z-50 mx-5 lg:mx-0'>
      <div style={{ backgroundImage: `url(${backgroundDesign})`}} className='absolute inset-0 z-0 rounded'></div>
      <div className='relative z-10 max-w-6xl mx-auto px-5 py-12 md:grid grid-cols-12 gap-5'>

        {/* ---------------------Contact Info start------------------------ */}
        <div className='md:col-span-6 lg:col-span-5'>
          <h1 className='heading text-3xl font-bold text-[#005842] pb-2'>Contact Info</h1>
          <hr />

          {/*EMAIL */}
          <div className='flex gap-2 mt-4'>
            <div className=''><HiOutlineMailOpen className='text-[#005842] text-3xl' /></div>
            <div>
              <p className='font-bold'>E-MAIL</p>
              <p className='font-medium'>FaithBridgeAcademy24@gmail.com</p>
            </div>
          </div>

          {/*Address */}
          <div className='flex gap-2 mt-4'>
            <div className=''><PiAddressBookLight className='text-[#005842] text-3xl' /></div>
            <div>
              <p className='font-bold'>Address</p>
              <p className='font-medium'>Gazipura, Earshad Nagar, Tongi
                Gazipur-1712, Bangladesh</p>
            </div>
          </div>

          {/* Contact (Office) */}
          <h1 className='heading text-3xl font-bold text-[#005842] pb-2 mt-5 text-center'>Contact (Office)</h1>
          <hr />
          <div className='flex flex-wrap gap-4'>
            <div className='flex gap-2 mt-4'>
              <div className=''><BsTelephone className='text-[#005842] text-3xl' /></div>

              <p className='font-bold'>+8801550-706095</p>
            </div>
            <div className='flex gap-2 mt-4'>
              <div className=''><BsTelephone className='text-[#005842] text-3xl' /></div>

              <p className='font-bold'>+8801550-706095</p>
            </div>
            <div className='flex gap-2 mt-4'>
              <div className=''><BsTelephone className='text-[#005842] text-3xl' /></div>

              <p className='font-bold'>+8801550-706095</p>
            </div>
            <div className='flex gap-2 mt-4'>
              <div className=''><BsTelephone className='text-[#005842] text-3xl' /></div>

              <p className='font-bold'>+8801550-706095</p>
            </div>
            <div className='flex gap-2 mt-4'>
              <div className=''><BsTelephone className='text-[#005842] text-3xl' /></div>

              <p className='font-bold'>+8801550-706095</p>
            </div>
            <div className='flex gap-2 mt-4'>
              <div className=''><BsTelephone className='text-[#005842] text-3xl' /></div>

              <p className='font-bold'>+8801550-706095</p>
            </div>
            <div className='flex gap-2 mt-4'>
              <div className=''><BsTelephone className='text-[#005842] text-3xl' /></div>

              <p className='font-bold'>+8801550-706095</p>
            </div>
            <div className='flex gap-2 mt-4'>
              <div className=''><BsTelephone className='text-[#005842] text-3xl' /></div>

              <p className='font-bold'>+8801550-706095</p>
            </div>
            <div className='flex gap-2 mt-4'>
              <div className=''><BsTelephone className='text-[#005842] text-3xl' /></div>

              <p className='font-bold'>+8801550-706095</p>
            </div>
          </div>
        </div>
        {/* ---------------------Contact Info end------------------------ */}

        {/* Important Links */}
        <div className='md:col-span-6 lg:col-span-3'>
          <h1 className='heading text-3xl font-bold text-[#005842] pb-2'>Important Links</h1>
          <hr className='mb-7' />

          <div>
            <a className='bg-gray-100 px-6 py-3 border border-gray-700 rounded button-text hover:text-white hover:bg-[#005842]' href="https://dhakaeducationboard.gov.bd/site" target="_blank" rel="noopener noreferrer">Dhaka Education Board</a>
          </div>
          <div className='mt-9'>
            <a className='bg-gray-100 px-[67px] py-3 border border-gray-700 rounded button-text hover:text-white hover:bg-[#005842] ' href="https://teachers.gov.bd" target="_blank" rel="noopener noreferrer">শিক্ষক বাতায়ন</a>
          </div>
          <div className='mt-9'>
            <a className='bg-gray-100 px-[35px] py-3 border border-gray-700 rounded button-text hover:text-white hover:bg-[#005842] ' href="https://moedu.portal.gov.bd" target="_blank" rel="noopener noreferrer">Ministry of Education</a>
          </div>
          <div className='mt-9'>
            <a className='bg-gray-100 px-[35px] py-3 border border-gray-700 rounded button-text hover:text-white hover:bg-[#005842] ' href="https://www.dpe.gov.bd" target="_blank" rel="noopener noreferrer">প্রাথমিক শিক্ষা অধিদপ্তর</a>
          </div>
          
        </div>

        {/* Google Map */}
        <div className='md:w-80 md:ml-52 lg:ml-0 lg:col-span-4 mt-7 md:mt-0'>
          <h1 className='heading text-3xl font-bold text-[#005842] pb-2'>Google Map</h1>
          <hr />
          <div className='border h-56 mt-5'>MAP COming soon........</div>
          <div className='mt-3 flex items-center gap-4'>
            <a href="" target='blank'><img className='w-16' src="https://img.icons8.com/?size=160&id=118568&format=png" alt="" /></a>
            <a href="" target='blank'><img className='w-16' src="https://img.icons8.com/?size=160&id=oaaSr6h7kwm6&format=png" alt="" /></a>
            <a href="" target='blank'><img className='w-16' src="https://img.icons8.com/?size=96&id=19318&format=png" alt="" /></a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Information
