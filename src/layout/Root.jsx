import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/shared/Header/Header'
import Footer from '../components/shared/Footer/Footer'

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Root
