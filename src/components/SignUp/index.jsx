import { useState} from "react"

import {Link,useNavigate} from "react-router-dom"
import Cookies from "js-cookie";
import "./index.css"

const SignUp=()=>{

    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const navigate = useNavigate();

    const onSubmitDetails=(e)=>{
        e.preventDefault();

        const trimmedName = name.trim();
        const trimmedPassword = password.trim();


        if (!trimmedName || !trimmedPassword ) {
            alert("Please fill all fields");
            return;
        }

        // Get existing users from cookies
        const usersCookie = Cookies.get("users");
        const storedUsers = usersCookie ? JSON.parse(usersCookie) : [];

        console.log(storedUsers);

        // Check if user exists
        if (storedUsers.some(u => u.accName === trimmedName)) {
            alert("User already exists");
            return;
        }

        // Add new user and save in cookie
        storedUsers.push({ accName: trimmedName, accPassword: trimmedPassword });
        Cookies.set("users", JSON.stringify(storedUsers), { expires: 2 }); // cookie expires in 2 days

        // Clear form and redirect
        setName("");
        setPassword("");
        navigate("/portfolio/signin");
    }

    return(
        <div className="signup-container">
            <div className="signup-details-card">
                <h1 className="signup-form-title">Sign Up</h1>
                <form className="signup-form-container" onSubmit={onSubmitDetails}>
                <div className="signup-form-card">
                    <label className="signup-form-lable">Enter Name</label>
                    <input value={name} type="text" placeholder="Name" onChange={e => {setName(e.target.value)}}/>
                </div>
                <div className="signup-form-card">
                    <label className="signup-form-lable">Enter Password</label>
                    <input value={password} type="password" placeholder="Password" onChange={e => {setPassword(e.target.value)}}/>
                </div>

                <div className="sign-up-form-btn-card">
                    <button type="submit" className="signup-btn">SignUp</button>
                </div>

                <p className="msg">Already have an account? <Link to="/portfolio/signin" className="link-of-page">Sign In</Link></p>
                </form>
            </div>
        </div>
    )
}

export default SignUp