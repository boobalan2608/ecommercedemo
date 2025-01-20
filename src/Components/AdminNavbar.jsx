import React from 'react';
import { Link } from 'react-router-dom';
import AdminAccountDropDownList from './AdminAccountDropDownList';
import '../Styles/AdminNavbar.css';
export default function AdminNavbar() {
  return (
    <div className='AdminNavbar'>
        <div className="logo">
            <Link to='/'><h1>I-<span>zone</span></h1></Link>
        </div>
        <div className="nav-links">
            <Link to='../adminhome/AdminAddProducts'>Add Item</Link>
            <Link to='../adminhome/AdminshoppingList'>ShoppingItems</Link>
            <Link to='../adminhome/Admincart'>Cart</Link>
        </div>
        <div className="account">
            <AdminAccountDropDownList/>
        </div>
    </div>
  )
}
