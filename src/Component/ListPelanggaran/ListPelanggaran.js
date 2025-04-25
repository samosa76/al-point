import ViolationLists from '../ViolationLists/ViolationLists';
import style from './ListPelanggaran.module.css'

function ListPelanggaran() {
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
                    <div className={style.ViolationLists}>
                        <ViolationLists />
                        <ViolationLists />
                    </div>

                </div>

            </div>
            
        </div>
    )

}

export default ListPelanggaran;