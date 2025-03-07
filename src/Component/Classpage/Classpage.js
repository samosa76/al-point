import style from './Classpage.module.css'

function Classpage() {
    return (
        <div>

            <div className={style.text}>
                <p>Data Santri</p>
                <p>Ponpes Modern IT Multimedia Al Fatih</p>
            </div>

            <div className={style.container_opsi}>

                <div className={style.opsies}>

                    <div className={style.opsi}>

                        <div className={style.ellipse}>
                            <div className={style.ellipse2}>
                                <p>1</p>
                            </div>
                            <p>SMP</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Classpage;