import { useState } from "react"

const From = () => {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    return (
        <>
            <div>From</div>
            <input placeholder="הכנס שם משתמש "   value={username} onChange={handleUsernameChange} />
            <h5> {username}</h5>
            <input placeholder="הכנס סיסמא   "   value={password}onChange={handlePasswordChange} />
            <h5> {password}</h5>



        </>
    )
}

export default From