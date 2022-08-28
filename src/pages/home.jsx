import "../App.css"
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {  useNavigate } from "react-router-dom";
const USERNAME = "admin";
const PASSWORD = "admin";
export default function Home() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [captcha, setCaptcha] = useState(null);
    const navigate = useNavigate();
    const handleSubmit = () => {
        if (username === USERNAME && password === PASSWORD) {
            navigate('/success');
        }
        else {
            alert("Login Failed");
        }
    }
    const handleCaptcha = (value) => {
        setCaptcha(value);
        console.log(value);
    }

    return (
        <div className="wrapper">
            <h1>Login Here</h1>
            <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
            <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)}/>
            <button onClick={handleSubmit} className="button" disabled={captcha===null}>Login</button>
            <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_KEY} onChange={(value) => handleCaptcha(value)} />
        </div>
    )
}