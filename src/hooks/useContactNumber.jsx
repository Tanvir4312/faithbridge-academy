import { useQuery } from '@tanstack/react-query';
import React from 'react'
import useAxiosSecure from './useAxiosSecure';

const useContactNumber = () => {
    const axiosSecure = useAxiosSecure()

    const { data: contactNumber = [], refetch } = useQuery({
        queryKey: ['contact-number'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/get-contact-number');
            return data
        }
    })
    return [contactNumber, refetch]
}

export default useContactNumber
