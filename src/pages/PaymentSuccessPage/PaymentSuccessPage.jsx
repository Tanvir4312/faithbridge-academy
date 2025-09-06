import React, { useEffect, useState } from 'react'

import { useSearchParams } from 'react-router-dom'

const PaymentSuccessPage = () => {
    const [transactionId, setTransactionId] = useState(null)

    const [searchParams] = useSearchParams()

    const fetchTransId = async () => {

        const vai_id = searchParams.get('transactionId')

        setTransactionId(vai_id)

    }

    useEffect(() => {
        fetchTransId()
       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <div className="p-6 bg-green-100 rounded-lg text-center">
                <h2 className="text-xl font-bold text-green-700">🎉 Payment Successful!</h2>
                <p className="mt-2">Thank you for your payment.</p>
                <p className="mt-4 text-gray-700">
                    Your Transaction ID: <span className="font-mono font-semibold text-blue-600">{transactionId}</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                    Please save this ID for future reference.
                </p>
            </div>
        </div>
    )
}

export default PaymentSuccessPage
