import style from './Reward.module.css';

function Rewards({ students, onStudentClick }) {


    return (
        <div className={style.container_Reward}>
            <div className={style.students}>


                <div>
                    {students.map((student) => (
                        <div className={style.student} onClick={() => onStudentClick(student)}>
                            <div className={style.student_name}>
                                <div className={style.photo}>
                                    <img src='/image/PhotoSantri/Jibran.jpg' alt='image/jibran'></img>
                                </div>
                                <div className={style.name}>
                                    <p>{student.nama.split(" ")[0] + " " + student.nama.split(" ")[1]}</p>
                                </div>
                            </div>

                            <div className={style.student_score}>
                                80
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Rewards;