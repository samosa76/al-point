import style from './RewardList.module.css';

function RewardLists() {
    return (
        <div className={style.container}>

            <div className={style.list}>

                <div className={`${style.number} ${style.btn_text}`}>
                    <p>1</p>
                </div>
                
                <div className={`${style.reward} ${style.btn_text}`}>
                    <p>Penghargaan untuk santri yang paling rajin</p>
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

export default RewardLists;