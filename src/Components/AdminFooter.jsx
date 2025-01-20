import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../Styles/AdminFooter.css';
export default function AdminFooter() {
  return (
    <div className='AdminFooter'>
        <div className="contact-details">
            <h3>Phone Number: 1234567890</h3>
            <h3>Email : IZone@gmail.com</h3>
        </div>
        <div className="social-media-links">
            <FacebookIcon/>
            <InstagramIcon/>
            <XIcon/>
        </div>
    </div>
  )
}
