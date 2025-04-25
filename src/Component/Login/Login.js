import { useState } from 'react';
import style from './Login.module.css'

function Login() {
    const [test, setTest] = useState("Testing")
    const [username, setUsername] = useState("")

    const clickedButton = () => {
        setTest(username)
    }

    return (
        <div className={style.container}>

            <div className={style.left}>

                <p>Login</p>

                <form>
                    <div className={style.login_input_name}>

                        <div className={style.title}>
                            <label for="Username">{test}</label>
                        </div>

                        <input className={style.placeforname} type="text" onChange={event => setUsername(event.target.value)} value={username}/>

                    </div>

                    <div>

                        <div className={style.title}>
                            <label for="e-mail">Password</label>
                        </div>

                        <input className={style.placeforemail} type="password" />

                    </div>
                </form>

                <button className={style.button} onClick={clickedButton}>
                    <p>Login</p>
                </button>

            </div>

            <div className={style.right}>

                <div className={style.logo}>
                    <img src='image/icon/alfatih.jpg' alt='icon/alfatih'/>
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