import React from 'react'


const OtherActivities = ({ activities }) => {

    return (
        <div className='my-7'>
            <h1 className='text-5xl heading font-bold text-center text-[#007B5E] mb-10'>    Others Activities</h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3 text-center px-5 lg:px-0'>
                {
                    activities.map(activity =>
                        <div
                            key={activity?._id}
                            className='border-2 rounded p-5 hover:cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-2.5 h-[200px]'>
                            <div style={{
                                backgroundImage: `url(${activity?.image})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }} className='w-full rounded h-full bg-blend-overlay bg-black/30'>
                                <h1 className='text-2xl text-white font-medium text-center p-10'>{activity?.activities_title}</h1>
                            </div>
                        </div>
                    )
                }




            </div>
        </div>
    )
}

export default OtherActivities
