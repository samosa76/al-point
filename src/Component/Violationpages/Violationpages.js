import style from './Violationpages.module.css'

function Violationpages({ student, point }) {
    const { nama, kelas, nis } = student
    if (point > 100) {
        point = 100
    }
    return (
        <div className={style.container}>

            <div className={style.profile}>

                <div className={style.photo}>
                    <img src='/image/PhotoSantri/Jibran.jpg' alt='image/jibran'></img>
                    <div className={style.container_title}>
                        <div className={style.text}>
                            <div className={style.text_title}>
                                <p>Nama</p>
                            </div>
                            <p>: {nama}</p>
                        </div>
                        <div className={style.text}>
                            <div className={style.text_title}>
                                <p>Kelas</p>
                            </div>
                            <p>: {kelas}</p>
                        </div>
                        <div className={style.text}>
                            <div className={style.text_title}>
                                <p>NIS</p>
                            </div>
                            <p>: {nis}</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className={style.student}>
                <div className={style.barexp}>
                    <div className={style.warning}>
                        <p>Total Point: {point}</p>
                    </div>
                    <div className={style.bar_container}>
                        <div className={style.bar_progress} style={{ width: `${point}%` }}></div>
                    </div>
                </div>
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