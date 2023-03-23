import { useState } from "react";
import axios from "axios";
import {useCookies} from 'react-cookie';
import { useNavigate } from "react-router-dom";

export  const Auth=()=>{
    return(
        <div>
            <h1>Auth</h1>
            <Register/>
            <Login/>
        </div>
    )
};

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const onSubmit = async (e) => {
        e.preventDefault();
try{
        await axios.post("http://localhost:3001/auth/register", {
            username,
            password
        });
        alert("Register Success")
        
    }
    catch(err){
        console.error(err);
}

    }
    return (
            <Form userName={username} setUserName={setUsername} password={password} setPassword={setPassword} label={'Register'} onSubmitForm={onSubmit}/>
    )
}

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [_,setCookie]= useCookies(['access_token']);
    const navigate = useNavigate();
    const onSubmit = async (e) => {
        e.preventDefault();
        try{
            const response=await axios.post("http://localhost:3001/auth/login", {
                username,
                password
            });
            setCookie('access_token',response.data.token);
        window.localStorage.setItem('UserId',response.data.userID);
        navigate('/');
            
            alert("Login Success")
        }
        catch(err){
            console.error(err);
        }
    };
    return (
        <Form userName={username} setUserName={setUsername} password={password} setPassword={setPassword} label={'Login'} onSubmitForm={onSubmit}/>
    )
}

const Form = ({userName,setUserName,password,setPassword,label,onSubmitForm}) => {
    return (
            <div>
                <form>
                    <h2>{label}</h2>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="username" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                        <button onClick={onSubmitForm}> {label}</button>
                    </div>
                </form>
            </div>

    )
}
