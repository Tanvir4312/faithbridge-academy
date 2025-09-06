import React from 'react'
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useActivities = () => {
    const axiosSecure = useAxiosSecure()

    const { data: activities = [], refetch } = useQuery({
        queryKey: ['activities'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/get-activities');
            return data
        }
    })
    return [activities, refetch]
}

export default useActivities

