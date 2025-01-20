import { useEffect, useState } from "react";
import { Link,useNavigate } from 'react-router-dom';
import '../Styles/AdminLogin.css';
import { toast } from "react-toastify";
const AdminLogin = () => {    
    let [adminname, setAdminname] = useState("");
    let [password, setPassword] = useState("");
    let [Admindata, setAdminData] = useState([]);
    useEffect(() => {
        async function fetchAdminData() {
            let res = await fetch("https://ecommercedemodata-1.onrender.com/AdminInfo");
            let data = await res.json();
            setAdminData(data);
        }
        fetchAdminData();
    },[])
    let navigate = useNavigate()
    function loginValidation(e) {
        e.preventDefault();
        let res = Admindata.filter((x) => x.adminName == adminname && x.password == password)        
        if(res.length > 0){
            toast.success("Login Success");
            navigate('/AdminHome')
        } else{
            toast.error("Invalid Crendentials..! try again");
            setAdminname("");
            setPassword("");
        }
    }
    function redirect(){
        setTimeout(()=>{
            navigate('../AdminSignUp')
        },10)
    }
    return (
        <div className="admin-login">
            <h1 className="admin-title">Admin Login Page</h1>


            <div className="admin-login-form-cont">
                <form action="" className="admin-login-form" onSubmit={loginValidation}>
                    <label>Admin Name: </label>
                    <input required type="text" onChange={(e) => {
                        setAdminname(e.target.value);
                    }} value={adminname} className="admin-name" placeholder="Enter the Name" />
                    <label htmlFor="">Password: </label>
                    <input required type="text" onChange={(e) => { setPassword(e.target.value) }} value={password} className="amdin-pass" placeholder="Enter the Password" />
                    <button className="submit-btn">Login</button>
                </form>
            </div>
            <h5>Are you new here?  <button className="navigate-btn" onClick={redirect}><Link to="">Sign Up</Link></button></h5>
        </div>
    );
}

export default AdminLogin;
    // let validate = false;
    // Admindata.map((ele) => {
    //     if (ele.adminName == adminname && ele.password == password) {
    //         validate = true;
    //     }
    // })
    // validate ? alert("Login Success") : alert("Invalid Credentials");