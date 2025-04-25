import { use, useEffect, useState } from "react";
import Menu from "../Component/HomeMenu/Menu";
import Axios from "axios";
function Home() {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        Axios.get("https://api.italfatih.my.id/api_users").then((res) => {
            const userData = res.data[0].playload;
            setUsers(userData);
        })
    }, [])



    // fetch("https://api.italfatih.my.id/api_users")
    // .then((response) => response.json())
    // .then((data) => {
    //     console.log(data);
    // });
    return (
        <div>
            {/* {users.map(user => (
                    <li key={user.id}>
                        {user.name} (Position ID: {user.id_posisi})
                    </li>
                ))} */}
            <Menu />
        </div>
    )
}

export default Home;