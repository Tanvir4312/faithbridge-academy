import React from 'react'
import useRole from '../hooks/useRole'
import { Navigate } from 'react-router-dom'

const AdminRoute = ({ children }) => {
    const [role, isLoading] = useRole()

    if (isLoading || !role) {
        return <div className="flex justify-center my-60"> <span className="loading loading-bars loading-xl"></span></div>
    }
    if (role === 'admin') {
        return children
    }
    return <Navigate to={'/'}></Navigate>
}

export default AdminRoute
