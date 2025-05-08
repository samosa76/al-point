import { useEffect, useState } from 'react';
import ViolationContent from '../ViolationContents/ViolationContent';
import Violationpages from '../Violationpages/Violationpages';
import style from './Violations.module.css';
import axios from 'axios';

function Violations(props) {
    const {user} = props;
    const [violation, setViolation] = useState([]);
    const [siswa, setSiswa] = useState([]);

    useEffect(() => {

        const getDataPelanggaran = () => {
            axios.get(`http://localhost:8000/api_selectPelanggaranBySiswa`).then((res) => {
                const data = res.data.payload;
                const filteredData = data.filter((item) => item.id_name === parseInt(user.id_account));
                console.log(filteredData);
                setViolation(filteredData);
            })
        }

        const getDataSiswa = () => {
            axios.get(`http://localhost:8000/api_siswa`).then((res) => {
                const data = res.data.payload;
                const filteredData = data.find((item) => item.id === parseInt(user.id_account));
                setSiswa(filteredData);
            })
        }

        getDataPelanggaran()
        getDataSiswa()
    }, []);

    return (
        <div className={style.container}>
            <div className={style.profile}>
                <Violationpages student={siswa} />
            </div>
            <div className={style.Violations}>
                <ViolationContent violation={violation} />
            </div>
        </div>
    )

}

export default Violations;