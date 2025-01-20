import React from 'react'
import UserNavbar from './UserNavbar'
import UserDashboard from './UserDashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserShoppingCart from './UserShoppingCart'
import UserCart from './UserCart'
export default function UserHome() {
    return (
        <div className='UserHome'>
            <UserNavbar />
            <Routes>
                <Route path='/' element={<UserDashboard />}></Route>
                <Route path='/ShoppingCart' element={<UserShoppingCart />}></Route>
                <Route path='/UserCart' element={<UserCart/>}></Route>
            </Routes>
        </div>
    )
}
