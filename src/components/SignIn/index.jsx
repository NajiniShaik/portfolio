
import {Link,useNavigate} from "react-router-dom";
import "./index.css";

import { dataContext } from "../../Context/index.jsx"
import { useState,useContext} from "react";

import Cookies from "js-cookie";

const SignIn=()=>{
    
    const {updateAccState} = useContext(dataContext);

    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const  navigate=useNavigate();

    const checkDetails = (e) => {
        e.preventDefault();

        if (!userName.trim() || !userPassword.trim()) {
            alert("Please enter both username and password");
            return;
        }

        const usersCookie = Cookies.get("users");
        const storedUsers = usersCookie ? JSON.parse(usersCookie) : [];
        const user = storedUsers.find(u => u.accName === userName.trim() && u.accPassword === userPassword.trim());


        if (user) {
            setUserName("");
            setUserPassword("");
            updateAccState(true); // update login state

            // Set a login session cookie
            Cookies.set("loggedInUser", JSON.stringify({ accName: userName }), { expires: 2 });

            navigate("/page", { replace: true });
        } else {
            alert("Invalid credentials");
        }

    };
    
    return(
        <div className="signin-container">
            <div className="signin-details-card">
                <h1 className="signin-form-title">Sign In</h1>
                <form className="signin-form-container" onSubmit={checkDetails}>
                <div className="signin-form-card">
                    <label className="signin-form-lable">Enter Name</label>
                    <input value={userName} autoComplete="username" type="text" placeholder="Name" onChange={e => {setUserName(e.target.value)}}/>
                </div>
                <div className="signin-form-card">
                    <label className="signin-form-lable">Enter Password</label>
                    <input value={userPassword} autoComplete="current-password" type="password" placeholder="Password" onChange={e => {setUserPassword(e.target.value)}}/>
                </div>

                <div className="sign-in-form-btn-card">
                    <button type="submit" className="signin-btn">SignIn</button>
                </div>
                <p className="msg">Create an account? <Link to="/signup" className="link-of-page">Sign Up</Link></p>
                </form>
            </div>
        </div>
    )
}

export default SignIn

