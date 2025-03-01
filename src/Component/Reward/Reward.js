import style from './Reward.module.css';

function Rewards() {
    return (

        <div className={style.container_Reward}>

            <div className={style.studens}>
                <div className={style.studen}>
                    <div className={style.photo}></div>
                    <div className={style.name}>
                        <p>Nama Santri</p>
                    </div>
                </div>
            </div>

            <div className={style.pages}>

                <div className={style.ellipses}>

                    <div className={style.ellipse}></div>
                    <div className={style.ellipse2}>
                        <div className={style.ellipse_2}></div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Rewards;