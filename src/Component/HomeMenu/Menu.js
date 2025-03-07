import style from './Menu.module.css'
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div className={`${style.container_home_menu}`}>
            <div className={style.menu_buttons}>
                <div>
                    <Link to={'/reward'} className={`${style.btn_menu} ${style.orange} ${style.flex_center}`}>
                        <h2 className={style.text}>Reward</h2>
                    </Link>
                    
                    <Link to={'/List'} className={`${style.btn_menu} ${style.primary_color} ${style.flex_center}`}>
                        <h2 className={style.text}>List</h2>
                    </Link>
                </div>


                <div>
                    <Link to={'/Classpage'}className={`${style.btn_menu} ${style.primary_color} ${style.flex_center}`}>
                        <h2 className={style.text}>Data Santri</h2>
                    </Link>

                    <Link className={`${style.btn_menu} ${style.red} ${style.flex_center}`}>
                        <h2 className={style.text}>Violation</h2>
                    </Link>
                </div>


            </div>
            <div className={style.about_us}>
                <div className={`${style.menu_about_us} ${style.flex_center} ${style.text_center}`}>
                    <h1>Tentang Kami</h1>
                    <p>Kami merancang website untuk menciptakan lingkungan kepemondokan <br /> yang lebih disiplin, adil, dan termotivasi .Kami percaya bahwa sistem reward <br />dan pencatatan pelanggaran yang transparan dapat membantu meningkatkan <br />kedisiplinan serta memberikan apresiasi bagi mereka yang berprestasi.</p>
                </div>
                <img className={style.bacground_about_us} src='image/bachground/shapes.png' />
            </div>

        </div>

    )
}

export default Menu;