import React from 'react'
import { Link } from 'react-router-dom'

const Home_Page_Image = () => {
    return (
        <div className='mt-5 space-x-5'>
            <Link to={'/admin_layout/add-image'}> <button className="btn mb-4 md:mb-0">Add Image</button></Link>
            <Link to={'/admin_layout/view-image'}><button className="btn">View Image</button></Link>
        </div>
    )
}

export default Home_Page_Image
