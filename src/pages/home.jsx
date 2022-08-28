import "../App.css"
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
const USERNAME = "admin";
const PASSWORD = "admin";
export default function Home() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    console.log(typeof process.env.REACT_APP_RECAPTCHA_KEY)
    const handleSubmit = () => {
        if (username === USERNAME && password === PASSWORD) {
            alert("Login Successful");
        }
        else {
            alert("Login Failed");
        }
    }

    return (
        <div className="wrapper">
            <h1>Login Here</h1>
            <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
            <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)}/>
            <button onClick={handleSubmit} className="button">Login</button>
            <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_KEY} />
        </div>
    )
}