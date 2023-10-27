import React from 'react';
import { useState } from 'react';
import db from '../context/mockData.js/db';
import { GithubContext } from '../context/context';
import { useHistory } from 'react-router-dom';

import '../App.css';


const LoginUser = () => {

    const [userName,setUserName]=useState('');
    
    const {setIsUserLoggedIn,setLoggedUser} = React.useContext(GithubContext);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [userSignUp, setUserSignUp] = useState(false);

    let history = useHistory();
        
    //on click of login
    const onButtonClick = () => {

        // Set initial error values to empty
        setEmailError("");
        setPasswordError("");

        // Check if the user has entered both fields correctly
        if (email === "") {
            setEmailError("Please enter your email")
            return
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError("Please enter a valid email")
            return;
        }

        if (password === "") {
            setPasswordError("Please enter a password")
            return;
        }

        if (password.length < 5) {
            setPasswordError("The password must be 5 characters or longer")
            return;
        }

        // Authentication calls  
        
        {db.map((user) => {
            console.log(user,'user',userName,password);
            if(email == user.email){
                if(password == user.password){
                    setLoggedUser(user);
                    setIsUserLoggedIn(true);
                    history.push("/");              //Redirect to dashboard
                    console.log('setter',user);
                }
            } else if(email !== user.email && password !== user.password){
                console.log('inside ');
                setUserSignUp(true);
        }
      })}

    }

    //Reset the fields 
    const resetData = () =>{
        setEmailError("");
        setPasswordError("");
        setEmail("");
        setPassword("");
    }

return (<div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Login</div>
        </div>
        <br />
        {userSignUp && <label className="errorMsg">User is not logged in !!! Please click sign up to continue</label>}
        <div className={"inputContainer"}>
            <input
                value={email}
                placeholder="Enter your email here"
                onChange={ev => setEmail(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{emailError}</label>
</div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={password}
                type='password'
                placeholder="Enter your password here"
                onChange={ev => setPassword(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className={""}>
            <input
                className={"signup"}
                type="button"
                onClick={onButtonClick}
                value={"Log in"} />
                <a href="" onClick={resetData}>Reset</a>
        </div>
        {
            userSignUp && <div className={"inputContainer"}>
            <a href='/signin' className='signUp'>Sign up</a>
        </div>
        }
    </div>
)
}


export default LoginUser;
