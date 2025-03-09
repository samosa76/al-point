import style from './Login.module.css'

function Login() {
    return (
        <div className={style.container}>

            <div className={style.left}>

                <p>Login</p>

                <form>
                    <div className={style.login_input_name}>

                        <div className={style.title}>
                            <label for="Username">Username</label>
                        </div>

                        <input className={style.placeforname} type="text" placeholder="enter username" />

                    </div>

                    <div>

                        <div className={style.title}>
                            <label for="e-mail">E-mail</label>
                        </div>

                        <input className={style.placeforemail} type="text" placeholder="enter e-mail" />

                    </div>
                </form>

                <button className={style.button}>
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