import React from 'react'
import useAuth from '../../../hooks/useAuth'
import useAxiosSecure from '../../../hooks/useAxiosSecure'

const SslPayment = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const paymentInfo = {
        name: user?.displayName,
        email: user?.email,
        amount: 300,
        transactionId: '',
        date: new Date(),
        status: 'pending'
    }

    const handleConfirmPayment = async () => {
        const res = await axiosSecure.post('/create-payment', paymentInfo)
      

        if(res.data?.gateWayUrl){
            window.location.replace(res.data?.gateWayUrl)
        }
    }
    return (
        <div className='bg-gray-200 max-w-xl p-5 rounded'>
            <h3 className='text-xl font-bold'>payment details</h3>
            <p>Complete your admission apply by providing your payment details.</p>

            <h3 className='text-lg font-bold pt-4'>Email</h3>
            <input type="text" placeholder={user?.email} className="input w-full" />

            <div className='mt-3'>
                <button onClick={handleConfirmPayment} className='btn btn-block bg-black text-white'>Confirm Payment</button>
            </div>
        </div>
    )
}

export default SslPayment
