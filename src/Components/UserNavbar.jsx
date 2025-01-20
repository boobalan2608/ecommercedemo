import React from 'react';
import { Link } from 'react-router-dom';
import UserAccountDropDownList from './UserAccountDropDown';
import '../Styles/UserNavbar.css';
export default function AdminNavbar() {
  return (
    <div className='UserNavbar'>
        <div className="logo">
            <Link to='/'><h1>I-<span>zone</span></h1></Link>
        </div>
        <div className="nav-links">
            <Link to='../userhome/ShoppingCart'>ShoppingItems</Link>
            <Link to='../userhome/UserCart'>Cart</Link>
        </div>
        <div className="account">
            <UserAccountDropDownList/>
        </div>
    </div>
  )
}
