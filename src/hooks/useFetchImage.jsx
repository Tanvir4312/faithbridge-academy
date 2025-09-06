import React from 'react'
import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query'

const useFetchImage = () => {
    const axiosSecure = useAxiosSecure()

    const { data: fetchImage = [], refetch } = useQuery({
        queryKey: ['fetch-image'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/fetch-image');
            return data
        }
    })
    return [fetchImage, refetch]
}

export default useFetchImage
