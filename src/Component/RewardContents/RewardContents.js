import { useEffect, useState } from 'react';
import Rewardspages from '../Rewardpages/RewardPages';
import Rewards from '../Rewards/Rewards';
import style from './RewardContents.module.css';
import Axios from "axios";

function RewardsContents() {
    // const [reward, setReward] = useState([]);
    const [siswa, setSiswa] = useState([]);

    useEffect(() => {
        // function fetchReward() {
        //     Axios.get("http://localhost:8000/api_selectRewardByIdSiswa/?id_name=2").then((res) => {
        //         const data = res.data[0].playload;
        //         console.log(data);
        //         setReward(data);
        //     })
        // }
        function fetchSiswa() {
            Axios.get(`http://localhost:8000/api_siswa`).then((res) => {
                const data = res.data[0].playload;
                console.log(data);
                setSiswa(data);
            })
        }

        fetchSiswa();
        // fetchReward();
    }, [])
    return (

        <div className={style.container_RewardContents}>
            {/* <div>
                {siswa.map((siswa) => (

                    <li key={siswa.id}>
                        {siswa.nama} (Kelas: {siswa.kelas})
                    </li>
                ))}
            </div> */}
            <Rewards students={siswa}/>
            <Rewardspages />
        </div>
    )
}

export default RewardsContents;