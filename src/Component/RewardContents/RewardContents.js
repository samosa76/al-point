import { useEffect, useState } from 'react';
import Rewardspages from '../Rewardpages/RewardPages';
import Rewards from '../Rewards/Rewards';
import style from './RewardContents.module.css';
import Axios from "axios";

function RewardsContents() {
    // const [reward, setReward] = useState([]);
    const [siswa, setSiswa] = useState([]);

    function fetchSiswa() {
        Axios.get(`http://localhost:8000/api_siswa`).then((res) => {
            const data = res.data.payload;
            console.log(data);
            setSiswa(data);
        })
    }

    useEffect(() => {
        

        fetchSiswa();
        // fetchReward();
    }, [])
    return (

        <div className={style.container_RewardContents}>
            <Rewards students={siswa}/>
            <Rewardspages />
        </div>
    )
}

export default RewardsContents;