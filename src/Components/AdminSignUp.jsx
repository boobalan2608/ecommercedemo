import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../Styles/AdminSignup.css';
import axios from 'axios';
// import { Button } from "bootstrap";
const AdminSignUp = () => {
    let [adminName, setAdminname] = useState("");
    let [password, setPassword] = useState("");
    let [name, setName] = useState("");
    console.log(adminName);
    console.log(password);
    let data = {adminName,password,name};
    function AddAdminData(){
        axios.post("http://localhost:1212/AdminInfo",data)
        .then((res)=>{
            alert("Admin Added Successfully")
        })
        .catch((err)=>{
            alert(err);
        })
    }
    return (
        <div className="admin-signup">
            <h1 className="admin-title">Admin SignUp Page</h1>
            <div className="admin-signup-form-cont">
            <div className="img-cont"> <img src={require("../Images/adminSignUp.png")} alt="admin signup" /></div>
                <form action=""  onSubmit={AddAdminData} className="admin-signup-form">
                    <label>Admin Name: </label>
                    <input type="text" onChange={(e) => { setAdminname(e.target.value) }} className="admin-username" placeholder="Enter the UserName" required/>
                    <label htmlFor="">Name: </label>
                    <input type="text" onChange={(e) => { setName(e.target.value) }} className="amdin-name" placeholder="Enter the Name" required/>
                    <label htmlFor="">Password: </label>
                    <input type="text" onChange={(e) => { setPassword(e.target.value) }} className="amdin-pass" placeholder="Enter the Password" required/>
                    <button className="submit-btn">Sign up</button>
                </form>
            </div>
            <h5>Already have an account?  <Link to="../AdminLogin">Sign in</Link></h5>

        </div>
    );
}

export default AdminSignUp;