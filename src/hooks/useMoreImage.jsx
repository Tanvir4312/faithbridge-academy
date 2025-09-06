import React from 'react'
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useMoreImage = () => {
    const axiosSecure = useAxiosSecure()

    const { data: fetchMoreImage = [], refetch } = useQuery({
        queryKey: ['fetch-more-image'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/fetch-more-image');
            return data
        }
    })
    return [fetchMoreImage, refetch]
}

export default useMoreImage
