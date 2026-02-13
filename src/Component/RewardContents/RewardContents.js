import { useEffect, useState } from 'react';
import Rewardspages from '../Rewardpages/RewardPages';
import Rewards from '../Rewards/Rewards';
import style from './RewardContents.module.css';
import Axios from "axios";

function RewardsContents() {
    // const [reward, setReward] = useState([]);
    const [siswa, setSiswa] = useState([]);
    const [reward, setReward] = useState([]);
    const [score, setScore] = useState([]);

    function fetchReward(id_name) {
        Axios.get(`http://localhost:8000/api_selectRewardBySiswa/?id_name=${id_name}`)
            .then((res) => {
                const data = res.data.payload;
                setReward(data)
                console.log(data);
            }
        )
    }

    function fetchSiswa() {
        Axios.get(`http://localhost:8000/api_siswa`).then((res) => {
            const data = res.data.payload;
            setSiswa(data);
        })
    }

    async function countScore(id_name) {
        const res = await Axios.get("http://localhost:8000/api_rewardByUID", {
            params: {
                uid: id_name
            }
        })
        console.log(res.data);
    }

    const [selectedStudent, setSelectedStudent] = useState("");

    const handleClick = (student) => {
        setSelectedStudent(student)
        fetchReward(student.id)
        countScore(student.id)
    }

    useEffect(() => {


        fetchSiswa();
        // fetchReward();

    }, [])
    return (

        <div className={style.container_RewardContents}>
            <div className={style.list_student}>
                <Rewards students={siswa} onStudentClick={handleClick} />
            </div>

            <div className={style.detail_student}>
                <Rewardspages student={selectedStudent || siswa[0]} reward={reward} />
            </div>

            
        </div>
    )
}

export default RewardsContents;