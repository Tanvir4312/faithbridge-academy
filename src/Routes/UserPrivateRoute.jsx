import React from 'react'

import useAuth from '../hooks/useAuth'
import { Navigate } from 'react-router-dom'
import useRole from '../hooks/useRole'

const UserPrivateRoute = ({ children }) => {

    const [role] = useRole()
    const { loading } = useAuth()

    if (loading || !role) {
        return <div className="flex justify-center mt-60"> <span className="loading loading-bars loading-xl"></span></div>
    }
    if (role === 'user') {
        return children
    }
    return <Navigate to={'/'}></Navigate>
}

export default UserPrivateRoute
