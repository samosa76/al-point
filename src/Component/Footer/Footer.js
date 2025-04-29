import style from './Footer.module.css'

function Footer() {
    const imagePath = `${process.env.PUBLIC_URL}/image/icon/`;
    return (
        <div className={style.container}>

            <div className={style.footer_title}>

                <div className={style.footer_name}>
                    <p>Pondok Pesantren Modern
                        <br />IT Multimedia Al Fatih</p>
                </div>

                <div className={style.div_hr}>
                    <hr />
                </div>

                <div className={style.footer_name2}>
                    <p>School Of IT Multimedia</p>
                </div>

            </div>

            <div className={style.sosmed}>

                <div className={style.icons}>
                    <img className={style.fb} src={`${imagePath}/fb.png`} alt='icon-fb'/>
                    <img src={`${imagePath}/ig.png`} alt='icon-ig'/>
                    <img src={`${imagePath}/wa.png`} alt='icon-wa'/>
                </div>

                <div className={style.title2}>
                    <a href="https://itmultimediaalfatih.com/">www.itmultimediaalfatih.com</a>
                </div>

            </div>
        </div>
    )
}

export default Footer;