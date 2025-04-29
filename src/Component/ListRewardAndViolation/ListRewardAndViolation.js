import { useEffect, useState } from 'react';
import ViolationLists from '../ViolationLists/ViolationLists';
import style from './ListRewardAndViolation.module.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ListRewardAndViolation() {
    const {kategori} = useParams();
    const [pelanggaran, SetPelanggaran] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/api_ket_${kategori}`)
        .then((response) => {
            const data = response.data[0].playload;
            console.log(data);
            
            SetPelanggaran(data);
        })
    }, [kategori])
    return (
        <div className={style.container_Listviolation}>

            <div className={style.Listviolation}>

                <div className={style.title}>
                    <h1>List {kategori}</h1>
                </div>

                <div className={style.hr_div}>
                    <hr />
                </div>

                <div className={style.list}>
                    <div className={style.ViolationLists}>
                        {pelanggaran.map((pelanggaran, index) => (
                            <ViolationLists pelanggaran={pelanggaran} index={index+1}/>
                        ))}
                        {/* <ViolationLists />
                        <ViolationLists /> */}
                    </div>

                </div>

            </div>
            
        </div>
    )

}

export default ListRewardAndViolation;