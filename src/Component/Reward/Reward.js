import RewardsContents from '../RewardContents/RewardContents';
import Rewardspages from '../Rewardpages/RewardPages';
import style from './Reward.module.css';

function Rewards() {
    return (

        <div className={style.container_Reward}>

            <div className={style.students}>

                <div className={style.student}>

                    <div className={style.photo}></div>
                    <div className={style.name}>
                        <p>Nama Santri</p>
                    </div>

                </div>

            </div>
            <Rewardspages />
        </div>
    )
}

export default Rewards;