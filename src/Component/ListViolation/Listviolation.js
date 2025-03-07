import RewardLists from '../RewardLists/RewardList';
import ViolationLists from '../ViolationLists/ViolationLists';
import style from './Listviolation.module.css'

function Listviolation() {
    return (
        <div className={style.container_Listviolation}>

            <div className={style.Listviolation}>
                <div className={style.title}>
                    <h1>List Violation</h1>
                </div>
                <div className={style.hr_div}>
                    <hr />
                </div>
                <div className={style.list}>
                    <div className={style.RewardLists}>
                        <ViolationLists />
                        <ViolationLists />
                    </div>
                </div>


            </div>
        </div>
    )

}

export default Listviolation;