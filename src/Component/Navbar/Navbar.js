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
                            <h4>Home</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/reward'} className={style.nav_item}>
                            <h4>Reward</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/violation'} className={style.nav_item}>
                            <h4>Violation</h4>
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar;