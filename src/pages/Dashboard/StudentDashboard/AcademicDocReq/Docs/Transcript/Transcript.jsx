
import { Link } from 'react-router-dom'


const Transcript = () => {
  



    return (
        <div>
            
                <h2 className='text-2xl font-bold mt-2'>First make the  <span className='text-orange-500'>payment</span> and then apply for Transcript</h2>
            

            <div className='md:flex gap-6 mt-7 text-center'>
                <Link to={'/dashboard/apply-payment?text=transcript'}><button className="btn">Create New Payment</button></Link>
                <Link to={'/dashboard/apply-transcript'}><button className="btn my-4 md:my-0">Apply Transcript</button></Link>
                <Link to={'/dashboard/all-transcript-application'}><button className="btn">All Application</button></Link>
            </div>
        </div>
    )
}

export default Transcript
