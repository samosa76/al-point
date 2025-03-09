import Rewardspages from '../Rewardpages/RewardPages';
import style from './Reward.module.css';

function Rewards() {
    return (

        <div className={style.container_Reward}>

            <div className={style.students}>

                <div className={style.student}>

                    <div className={style.photo}>
                        <img src='/image/PhotoSantri/Jibran.jpg' alt='image/jibran'></img>
                    </div>
                    <div className={style.name}>
                        <p>Jibran Amranulhaq</p>
                    </div>

                </div>
                <div className={style.student}>

                    <div className={style.photo}>
                        <img src='/image/PhotoSantri/Jibran.jpg' alt='image/jibran'></img>
                    </div>
                    <div className={style.name}>
                        <p>Jibran Amranulhaq</p>
                    </div>

                </div>

            </div>
            <Rewardspages />
        </div>
    )
}

export default Rewards;