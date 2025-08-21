import React, { useState } from 'react'
import SslPayment from './SslPayment/SslPayment'

const ApplyPayment = () => {
    const [click, setClick] = useState(true)

    const handleStripe = () => {
        setClick(false)
    }

    const handleSsl = () => {
        setClick(true)
    }
    console.log(click)
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-5'> Please Payment</h1>
            <div>


                <select defaultValue={'Payment Method'} onChange={e => {
                    if (e.target.value === 'STRIPE') {
                        handleStripe()
                    }
                    if (e.target.value === 'SSLCOMMERZ') {
                        handleSsl()
                    }
                }} className="select">
 <option disabled={true}>Payment Method</option>
                    <option value={'STRIPE'}>STRIPE</option>
                    <option value={'SSLCOMMERZ'}>SSLCOMMERZ</option>

                </select>

                <div className='mt-10'>
                    {
                        click ? <SslPayment></SslPayment> : <p>Stripe</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default ApplyPayment
