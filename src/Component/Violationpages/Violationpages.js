import style from './Violationpages.module.css'

function Violationpages() {
    return (
        <div className={style.container}>
            <div className={style.profile}>
                <div className={style.photo}>
                    <img src='/image/PhotoSantri/Jibran.jpg' alt='image/jibran'></img>
                </div>
                <div className={style.studen}>
                    <div className={style.text}>
                        <div className={style.text_title}>
                            <p>Nama</p>
                        </div>
                        <p>: Jibran Amranulhaq</p>
                    </div>
                    <div className={style.text}>
                        <div className={style.text_title}>
                            <p>Kelas</p>
                        </div>
                        <p>: IV</p>
                    </div>
                    <div className={style.text}>
                        <div className={style.text_title}>
                            <p>Tanggal Lahir</p>
                        </div>
                        <p>: 7 januari 2008</p>
                    </div>
                    <div className={style.text}>
                        <div className={style.text_title}>
                            <p>Alamat</p>
                        </div>
                        <p>: Tasikmalaya</p>
                    </div>
                </div>
            </div>
            <div className={style.barexp}>
                <div className={style.warning}>
                    <p>WARNING</p>
                </div>
                <div className={style.bar}></div>
            </div>
            <div className={style.notes}>
                <h3>Catatan :</h3>
                <div className={style.note}>
                    <ul>
                        <li>Bagi santri</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Violationpages;