import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/UserSignUp.css';
import axios from 'axios';
import { toast } from 'react-toastify';
// import { Button } from "bootstrap";
const UserSignUp = () => {
    let [userName, setUserName] = useState("");
    let [password, setPassword] = useState("");
    let [name, setName] = useState("");
    console.log(userName);
    console.log(password);
    let data = {userName,password,name};
    let navigate = useNavigate();
    function AddAdminData(e){
        axios.post("http://localhost:1212/UserInfo",data)
        .then((res)=>{
            e.preventDefault();
            toast.success("Registerd Successfully ! Redirecting...")
            setTimeout(()=>{
                navigate('/userLogin')
            },1000)
        })
        .catch((err)=>{
            alert(err);
        })
    }
    return (
        <div className="user-signup">
            <h1 className="user-title">User SignUp Page</h1>
            <div className="user-signup-form-cont">
            <div className="img-cont"> <img src={require("../Images/userSignUp.png")} alt="user signup" /></div>
                <form action=""  onSubmit={AddAdminData} className="user-signup-form">
                    <label>User Name: </label>
                    <input type="text" onChange={(e) => { setUserName(e.target.value) }} className="user-username" placeholder="Enter the UserName" required/>
                    <label htmlFor="">Name: </label>
                    <input type="text" onChange={(e) => { setName(e.target.value) }} className="user-name" placeholder="Enter the Name" required/>
                    <label htmlFor="">Password: </label>
                    <input type="text" onChange={(e) => { setPassword(e.target.value) }} className="user-pass" placeholder="Enter the Password" required/>
                    <button className="submit-btn">Sign up</button>
                </form>
            </div>
            <h5>Already have an account?  <Link to="../UserLogin">Sign in</Link></h5>

        </div>
    );
}

export default UserSignUp;