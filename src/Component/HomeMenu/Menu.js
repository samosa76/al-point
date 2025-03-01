import style from './Menu.module.css'
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div className={`${style.container_home_menu}`}>
            <div className={style.menu_buttons}>

                <div>
                    <div className={`${style.btn_menu} ${style.orange} ${style.flex_center}`}>
                        <h2>Reward</h2>
                    </div>

                    <div className={`${style.btn_menu} ${style.primary_color} ${style.flex_center}`}>
                        <h2>List</h2>
                    </div>
                </div>


                <div>
                    <div className={`${style.btn_menu} ${style.primary_color} ${style.flex_center}`}>
                        <h2>About Us</h2>
                    </div>

                    <div className={`${style.btn_menu} ${style.red} ${style.flex_center}`}>
                        <h2>Violation</h2>
                    </div>
                </div>


            </div>

            <div className={`${style.menu_about_us} ${style.flex_center} ${style.text_center}`}>
                <h1>Tentang Kami</h1>
                <p>Kami merancang website untuk menciptakan lingkungan kepemondokan <br/> yang lebih disiplin, adil, dan termotivasi .Kami percaya bahwa sistem reward <br/>dan pencatatan pelanggaran yang transparan dapat membantu meningkatkan <br/>kedisiplinan serta memberikan apresiasi bagi mereka yang berprestasi.</p>
            </div>
        </div>
    )
}

export default Menu;