import style from './ViolationLists.module.css';

function ViolationLists() {
    return (
        <div className={style.container}>

            <div className={style.list}>

                <div className={`${style.number} ${style.btn_text}`}>
                    <p>1</p>
                </div>

                <div className={`${style.violation} ${style.btn_text}`}>
                    <p>Merokok</p>
                </div>

                <div className={style.div_hr}>
                    <hr />
                </div>

                <div className={`${style.point} ${style.btn_text}`}>
                    <p>100 Point</p>
                </div>

            </div>

        </div>
    )
}

export default ViolationLists;