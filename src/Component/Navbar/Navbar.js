import { Link } from 'react-router-dom';
import style from './Navbar.module.css';

function Navbar() {
    return (
        <div className={style.container_nav}>

            <div className={style.logo_nav}>
                <h1>Al - Point</h1>
            </div>
            <div className={style.menu_nav}>
                <ul>
                    <li>
                        <Link to={'/'} className={style.nav_item}>
                            <h3>Home</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/reward'} className={style.nav_item}>
                            <h3>Reward</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/sign-in'} className={style.nav_item}>
                            <h3>Login</h3>
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar;