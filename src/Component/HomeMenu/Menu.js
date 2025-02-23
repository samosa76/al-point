import style from './Menu.module.css'

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

            <div className={`${style.menu_about_us} ${style.flex_center}`}>
                <h1>Title</h1>
                <h3>Testing lorem ipsum ceritanya </h3>
            </div>
        </div>
    )
}

export default Menu;