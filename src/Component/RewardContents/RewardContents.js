import { useEffect, useState } from 'react';
import Rewardspages from '../Rewardpages/RewardPages';
import Rewards from '../Rewards/Rewards';
import style from './RewardContents.module.css';
import Axios from "axios";

function RewardsContents() {
    // const [reward, setReward] = useState([]);
    const [siswa, setSiswa] = useState([]);
    const [reward, setReward] = useState([]);

    function fetchReward(id_name) {
        Axios.get(`http://localhost:8000/api_selectRewardBySiswa/?id_name=${id_name}`)
        .then((res) =>{
            const data = res.data.payload;
            setReward(data)
            console.log(data);
        })
    }

    function fetchSiswa() {
        Axios.get(`http://localhost:8000/api_siswa`).then((res) => {
            const data = res.data.payload;
            setSiswa(data);
        })
    }

    const [selectedStudent, setSelectedStudent] = useState("");

    const handleClick = (student) => {
        setSelectedStudent(student)
        fetchReward(student.id)
    }

    const handleReward = () => {

    }

    useEffect(() => {


        fetchSiswa();
        // fetchReward();
        
    }, [])
    return (

        <div className={style.container_RewardContents}>
            <Rewards students={siswa} onStudentClick={handleClick}/>
            <Rewardspages student={selectedStudent || siswa[0]} reward={reward}/>
        </div>
    )
}

export default RewardsContents;