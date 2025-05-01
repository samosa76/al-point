import { useParams } from "react-router-dom";
import Axios from "axios";
import { useEffect, useState } from "react";
import ListSantri from "../Component/ListSantri/ListSantri";

function ListSiswa() {
    var {kelas} = useParams();
    const [siswa, setSiswa] = useState([]);

    useEffect(() => {
        function fetchSiswa() {
            Axios.get(`http://localhost:8000/selectSiswaByClasses/?kelas=${kelas}`).then((res) => {
                const data = res.data.payload;
                console.log(data);
                setSiswa(data);
            })    
        }

        fetchSiswa();
        
    }, [kelas])
    
    return(
        <div>
            <h1>List Siswa Kelas {kelas}</h1>
            <ListSantri students={siswa}/>
            {/* {siswa.map((siswa) => (

                <li key={siswa.id}>
                    {siswa.nama} (ID: {siswa.nis})
                </li>
            ))} */}
            
        </div>
    )
}

export default ListSiswa;