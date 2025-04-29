import style from './ViolationLists.module.css';

function ViolationLists({ pelanggaran, index}) {
    return (
        <div className={style.container}>

            <div className={style.list}>

                <div className={`${style.number} ${style.btn_text}`}>
                    <p>{index}</p>
                </div>

                <div className={`${style.violation} ${style.btn_text}`}>
                    <p>{pelanggaran.name}</p>
                </div>

                <div className={style.div_hr}>
                    <hr />
                </div>

                <div className={`${style.point} ${style.btn_text}`}>
                    <p>{pelanggaran.score}</p>
                </div>

            </div>

        </div>
    )
}

export default ViolationLists;