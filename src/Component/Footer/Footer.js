import style from './Footer.module.css'

function Footer() {
    return (
        <div className={style.container}>

            <div className={style.footer_title}>
                <div className={style.title}>
                    <p>Pondok Pesantren Modern
                        <br />IT Multimedia Al Fatih</p>
                </div>
                <div className={style.icone}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
            </div>

            <div className={style.div_hr}>
                <hr />
            </div>

            <div className={style.title2}>
                <p>School Of IT Multimedia</p>
                <a href="https://itmultimediaalfatih.com/">www.itmultimediaalfatih.com</a>
            </div>
        </div>
    )
}

export default Footer;