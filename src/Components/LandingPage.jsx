import { Link } from 'react-router-dom';
import "../Styles/LandingPage.css"
const LandingPage = () => {
    
    return (
        <div className="landing-page">
                    <h1>Welcome to I-Zone</h1>
                    <h3 className='admin-txt'>Login as Admin</h3>
                    <h3 className="user-txt">Login as User</h3>
            <div className="landing-login">
                <div className="landing-admin-login">
                    <Link to='./adminlogin'>
                        <img src="https://cdn-icons-png.flaticon.com/128/2206/2206248.png" alt="" />
                        <h2>Admin Login</h2>
                    </Link>
                </div>
                <div className="landing-user-login">
                    <Link to='./userlogin'>
                        <img src="https://cdn-icons-png.flaticon.com/128/17924/17924371.png" alt="" />
                        <h2>User Login</h2>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;