import RewardLists from '../RewardLists/RewardList';
import style from './Listreward.module.css'

function Listreward() {
    return (
        <div className={style.container_listreward}>

            <div className={style.listreward}>
                <div className={style.title}>
                    <h1>List Reward</h1>
                </div>
                <div className={style.hr_div}>
                    <hr />
                </div>
                <div className={style.list}>
                    <div className={style.RewardLists}>
                        <RewardLists />
                        <RewardLists />
                    </div>
                </div>


            </div>
        </div>
    )

}

export default Listreward;