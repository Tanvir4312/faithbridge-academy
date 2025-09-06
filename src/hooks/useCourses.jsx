import React from 'react'
import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query'

const useCourses = () => {
    const axiosSecure = useAxiosSecure()

    const { data: courses = [], refetch } = useQuery({
        queryKey: ['courses'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/get-courses');
            return data
        }
    })
    return [courses, refetch]
}

export default useCourses

