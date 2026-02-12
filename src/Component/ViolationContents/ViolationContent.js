import { useEffect } from 'react';
import style from './ViolationContent.module.css'

function ViolationContent({ violation }) {
    var id = 1;
    return (
        <div className={style.container}>

            <div className={style.title}>
                <h3>Your Violations</h3>
            </div>
            <hr />
            <div className={style.violationcontent}>
                {violation.map((item) => (
                    <div className={style.violations}>
                        <div className={`${style.number} ${style.btn_text}`}>
                            <p>{id++}</p>
                        </div>

                        <div className={`${style.violation} ${style.btn_text}`}>
                            <p>{item.pelanggaran}</p>
                        </div>

                        <div className={style.div_hr}>
                            <hr />
                        </div>

                        <div className={`${style.point} ${style.btn_text}`}>
                            <p>{item.score}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )

}

export default ViolationContent;