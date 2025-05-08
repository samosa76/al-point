import { useState } from "react"
import Login from "../Component/Login/Login";
import Violation from "./Violation";
import Admin from "../Admin/Component/Pages/Admin";

const Auth = () => {
    const [user, setUser] = useState();
    const [role, setRole] = useState();

    const siswa = role === 2;
    if (!user) {
        return (
            <div>
                <Login setUser={setUser} setRole={setRole}/>
            </div>
        )
    }

    if (!siswa) {
        return (
            <div>
                <Admin />
            </div>
        )
    }

    return (
        <div>
            
            <Violation user={user} />
        </div>
    )
}

export default Auth