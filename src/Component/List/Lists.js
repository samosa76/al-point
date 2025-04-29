import { Link } from 'react-router-dom';
import style from './Lists.module.css'

function Lists() {
    return (
        <div className={style.container_list}>
            <Link to={'/list-detail/Reward'} className={`${style.btn_list} ${style.orange} ${style.flex_center}`}>
                <h2>List Reward</h2>
            </Link>
            <Link to={'/list-detail/Pelanggaran'} className={`${style.btn_list} ${style.red} ${style.flex_center}`}>
                <h2>List Violation</h2>
            </Link>
        </div>

    )

}

export default Lists;