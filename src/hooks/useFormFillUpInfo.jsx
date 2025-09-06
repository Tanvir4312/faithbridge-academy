import React from 'react'
import { useEffect } from 'react'
import useAxiosSecure from './useAxiosSecure'
import useAuth from './useAuth'
import { useState } from 'react'

const useFormFillUpInfo = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [formFillUpInfo, setFormFillUpInfo] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const res = await axiosSecure.get(`/form-fillUp-info/${user?.email}`)
            setFormFillUpInfo(res?.data)
        }
        fetchData()
    }, [axiosSecure, user?.email])
    return formFillUpInfo
}

export default useFormFillUpInfo
