import React from 'react'
import AdminNavbar from './AdminNavbar';
import AdminDashboard from './AdminDashboard';
import AdminFooter from './AdminFooter';
import AdminShoppingList from './AdminShoppingList';
import AdminCart from './AdminCart';
import { Routes, Route, useParams } from 'react-router-dom';
import AdminAddItems from './AdminAddProducts';
import AdminUpdateItems from './AdminUpdateItems';
import { blue } from '@mui/material/colors';


export default function AdminHome() {
  return (
    <div className='AdminHome' style={{height:"100vh"}}>
      <AdminNavbar />
      <Routes>
        <Route path='/' element={<AdminDashboard />}></Route>
        <Route path='/AdminAddProducts' element={<AdminAddItems />}></Route>
        <Route path='/Adminshoppinglist' element={<AdminShoppingList />}></Route>
        <Route path='/Admincart' element={<AdminCart />}></Route>
        <Route path='/AdminUpdateItems/:id' element={<AdminUpdateItems />}></Route>
      </Routes>
      <AdminFooter />
    </div>
  )
}
