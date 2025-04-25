import style from './ViolationContent.module.css'

function ViolationContent() {
    return (
        <div className={style.container}>
            <div className={style.title}>
                <h3>Your violations</h3>
            </div>
            <hr />
            <div className={style.violationcontent}>
                <div className={style.violations}>
                    <div className={`${style.number} ${style.btn_text}`}>
                        <p>1</p>
                    </div>

                    <div className={`${style.violation} ${style.btn_text}`}>
                        <p>Pelanggaran merokok</p>
                    </div>

                    <div className={style.div_hr}>
                        <hr />
                    </div>

                    <div className={`${style.point} ${style.btn_text}`}>
                        <p>100 Point</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ViolationContent;