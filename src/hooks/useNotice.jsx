import React from 'react'
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useNotice = () => {
    const axiosSecure = useAxiosSecure()

    const { data: notices = [], refetch } = useQuery({
        queryKey: ['notices'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/notice');
            return data
        }
    })
    return [notices, refetch]
}

export default useNotice
