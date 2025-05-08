import style from './Reward.module.css';

function Rewards({ students, onStudentClick }) {
    return (

        <div className={style.container_Reward}>
            <div className={style.students}>

                <div>
                    {students.map((student) => (
                        <div className={style.student} onClick={() => onStudentClick(student)}>

                            <div className={style.photo}>
                                <img src='/image/PhotoSantri/Jibran.jpg' alt='image/jibran'></img>
                            </div>
                            <div className={style.name}>
                                <p>{student.nama}</p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Rewards;