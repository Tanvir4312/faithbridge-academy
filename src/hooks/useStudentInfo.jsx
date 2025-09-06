import React from 'react'
import useAxiosSecure from './useAxiosSecure'
import useAuth from './useAuth'
import { useQuery } from '@tanstack/react-query'

const useStudentInfo = () => {
    const axiosSecure = useAxiosSecure()
    const { user, loading } = useAuth()

    const { data: studentInfo } = useQuery({
        queryKey: ['applier'],
        enabled: !loading,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/student-information/${user?.email}`)
            return data
        }
    })
    return studentInfo

}
export default useStudentInfo
