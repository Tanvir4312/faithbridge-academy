import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate } from 'react-router-dom'


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()

    if (loading) {
        return <div className='flex justify-center mt-60'>
            <span className="loading loading-bars loading-xl"></span>
        </div>
    }
    if (user) {
        return children
    }

    return <Navigate to={'/'}></Navigate>
}

export default PrivateRoute
