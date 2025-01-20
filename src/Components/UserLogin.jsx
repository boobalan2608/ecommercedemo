import { useState,useEffect } from "react";
import { Link,useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import '../Styles/UserLogin.css';   
const UserLogin = ()=> {
    let [userName, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [UserData, setUserData] = useState([]);
    console.log(userName);
    console.log(password);

    useEffect(() => {
        async function fetchAdminData() {
            let res = await fetch("http://localhost:1212/UserInfo");
            let data = await res.json();
            setUserData(data);
        }
        fetchAdminData();
    },[])
    let navigate = useNavigate()
    function loginValidation(e) {
        let res = UserData.filter((x) => x.userName == userName && x.password == password)
        if(res.length > 0){
            e.preventDefault();
            toast.success("Login Successfull ! Redirecting...");
            setTimeout(()=>{
                navigate('/userHome')
            },2000)
        } else{
            toast.error("Login Failed !...");
        }
    }
    return (
        <div className="user-login">
            <h1 className="user-title">User Login Page</h1>
            <div className="user-login-form-cont">
                <form action="" className="user-login-form" onSubmit={loginValidation}>
                    <label>User Name: </label>
                    <input type="text" onChange={(e) => { setUsername(e.target.value) }} className="user-name" placeholder="Enter the Name" />
                    <label htmlFor="">Password: </label>
                    <input type="text" onChange={(e) => { setPassword(e.target.value) }} className="user-pass" placeholder="Enter the Password"/>
                    <button className="submit-btn">Login</button>
                </form>
            </div>
                <h5>Are You New Here?  <Link to="../UserSignup">Sign Up</Link></h5>
        </div>
    ); 
}
 
export default UserLogin;