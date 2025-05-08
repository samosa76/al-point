import style from './Rewardpages.module.css';
import TableReward from './TableReward/TableReward';

function Rewardspages({ student, reward }) {
    const defaultStudent = { kelas: 'Default Class', nama: 'Student Number 1', nis: '12345' , id : "111"}
    let kelas, nama, nis, id;

    if (student) {
        // If student is available, destructure from it
        ({ kelas, nama, nis, id } = student); // Wrap in parentheses
    } else {
        // Otherwise, destructure from the default student
        ({ kelas, nama, nis, id } = defaultStudent); // Wrap in parentheses
    }


    return (

        <div className={style.container_Reward}>
            <div className={style.pages}>
                <div className={style.page}>
                    <div className={style.photoSantri}>
                        <img src='/image/PhotoSantri/Jibran.jpg' alt='image/jibran'></img>
                    </div>
                    <div className={style.ellipses}>

                        <div className={style.ellipse}></div>

                        <div className={style.ellipse2}>
                            <div className={style.ellipse_2}></div>
                        </div>

                    </div>
                    <div className={style.container_text}>

                        <div className={style.text}>
                            <div className={style.text_title}>
                                <p>Nama</p>
                            </div>
                            <p>: {nama}</p>
                        </div>
                        <div className={style.text}>
                            <div className={style.text_title}>
                                <p>Kelas</p>
                            </div>
                            <p>: {kelas}</p>
                        </div>
                        <div className={style.text}>
                            <div className={style.text_title}>
                                <p>NIS</p>
                            </div>
                            <p>: {nis}</p>
                        </div>

                        {/* Table */}
                        <TableReward reward={reward}/>

                    </div>


                </div>
            </div>

        </div>
    )
}

export default Rewardspages;