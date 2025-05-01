import { useState } from 'react';
import style from './Login.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {

    // const fetchData = async () => {
    //     axios.get('http://localhost:8000/api_users').then((response) => {
    //         console.log(response.data.payload);
    //     })
    // }

    const navigate = useNavigate()
    const [error, setError] = useState(false);

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const { username, password } = formData;

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
            // [e.target.name]: e.target.value
        })

    }

    const handleClick = async (e) => {
        e.preventDefault();
        const response = await axios.get('http://localhost:8000/api_users');
        const users = response.data.payload;
        // for (let index = 0; index < users.length; index++) {
        //     const user = users[index];
        //     console.log(user.name);

        // }
        const user = users.find(user => user.name === username && user.password === password);

        console.log(`Login with username: ${username} and password: ${password}`);

        if (user) {
            console.log("Login successful");
            navigate('/admin');
        } else {
            setError(true);
        }
    }

    return (
        <div className={style.container}>

            <div className={style.left}>

                <p>Login</p>

                <form>
                    <div className={style.login_input_name}>

                        <div className={style.title}>
                            <label for="Username">Username</label>
                        </div>

                        <input className={style.placeforname} type="text" onChange={handleChange} value={username} name='username' />

                    </div>

                    <div>

                        <div className={style.title}>
                            <label for="e-mail">Password</label>
                        </div>

                        <input className={style.placeforemail} type="password" onChange={handleChange} value={password} name='password' />

                    </div>
                </form>

                {error ? <div><p className={style.error_text}>Wrong!! Do it again</p></div> :  <div className={style.error_text_box}><p>Error Message</p></div>}

                <button className={style.button} onClick={handleClick}>
                    <p>Login</p>
                </button>

            </div>

            <div className={style.right}>

                <div className={style.logo}>
                    <img src='image/icon/alfatih.jpg' alt='icon/alfatih' />
                </div>

                <div className={style.titlejudul}>
                    <p>Al Fatih</p>
                </div>

                <div className={style.titledesc}>
                    <p>Pondok Pesantren Modern
                        <br />IT Multimedia Al Fatih</p>
                </div>

            </div>

        </div >
    )
}

export default Login;