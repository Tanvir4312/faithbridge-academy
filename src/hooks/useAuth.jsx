import React, { useContext } from 'react'
import { AuthContext } from '../Routes/provider/AuthProvider'


const useAuth = () => {
    const authContext = useContext(AuthContext)
    return authContext
}

export default useAuth
