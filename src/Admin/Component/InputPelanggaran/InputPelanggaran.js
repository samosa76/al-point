import { useEffect, useState } from "react";
import style from "./InputPelanggaran.module.css";
import axios from "axios";

function InputPelanggaran() {

    // const [formData, setFormData] = useState({
    //     name: "",
    //     pelanggaran: ""
    // })

    const [grade, setGrade] = useState("");
    const [name, setName] = useState("");
    const [pelanggaran, setPelanggaran] = useState("");
    const [kategori, setKategori] = useState("");
    const [siswa, setSiswa] = useState([]);
    const [pelanggaranList, setPelanggaranList] = useState([]);
    const [kategoriPelanggaran, setKategoriPelanggaran] = useState([]);

    const handleGradeChange = (e) => {
        const { value } = e.target;
        setGrade(value);
        getDataSiswa(value);
        console.log(value);
        
    }

    const handleKategoriChange = (e) => {
        const { value } = e.target;
        setKategori(value);
        getDataPelanggaran(value);
        console.log(value);
        
    }

    function getDataSiswa(grade) {
        axios.get(`http://192.168.5.2:8000/selectSiswaByClasses/?kelas=${grade}`).then((res) => {
            const data = res.data.payload;
            setSiswa(data);

        })
    }

    const getDataPelanggaran = async (kategori) => {
        const response = await axios.get("http://192.168.5.2:8000/api_ket_pelanggaran");
        const data = response.data.payload;
        const filteredData = data.filter((item) => item.kategori === parseInt(kategori));
        setPelanggaranList(filteredData);
        
    }

    const getKategoriPelanggaran = async () => {
        const response = await axios.get("http://192.168.5.2:8000/api_kategori_pelanggaran");
        const data = response.data.payload;
        setKategoriPelanggaran(data);
        
    }

    /* 
    Make sure to get api from /api_reward 
    */
    function addData() {
        axios.post("http://192.168.5.2:8000/api_pelanggaran",
            {
                id_name: name,
                id_pelanggaran: pelanggaran
            }
        ).then((res) => {
            console.log(`data berhasil di tambahkan ${res.data}`);
        })
    }

    function handleClick(e) {
        if (!name || !pelanggaran) {
            alert("Masukan seluruh data")
            e.preventDefault();
        }
        else {
            addData();
            alert(`Data Berhasil di tambahkan`);
        }
        // addData();
        // const filter = pelanggaranList.filter((item => item.kategori === ""))
        // console.log(pelanggaranList);        
    }

    useEffect(() => {
        getKategoriPelanggaran();
    }, [])

    return (
        <div className={style.inputPelanggaran_container}>

            {/* Input Siswa Dashboard */}
            <div className={style.pelanggaran_title}>

                <div className={style.img_title}>
                    <img src='image/admin/image_pelanggaran.png' alt="image_pelanggaran.png" />
                </div>

                <div className={style.name_title}>
                    <h1>Input pelanggaran</h1>
                </div>

            </div>

            {/* Input Siswa Page  */}
            <div className={style.content_pelanggaran}>

                <div className={style.desc_content}>

                    <form className={style.input}>

                        <div className={style.login_input_name}>

                            <label className={style.input_label} for="grade">Kelas</label>
                            <div>
                                {/* <input className={style.place_name} type="text" placeholder="enter nama" onChange={handleChange} name="name" value={name}/> */}
                                <select className={style.input_box} id="grade" name="grade" value={grade} onChange={handleGradeChange}>
                                    <option value="" selected disabled hidden>Choose Grade</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>


                        </div>

                        <div className={style.login_input_name}>

                            <label className={style.input_label} for="nama">Nama</label>
                            <div>
                                <select className={style.input_box} id="name" name="name" value={name} onChange={event => setName(event.target.value)}>
                                    <option value="" selected disabled hidden>Choose Grade</option>
                                    {siswa.map((item) => {
                                        return (
                                            <option value={item.id}>{item.nama}</option>
                                        )
                                    })}
                                </select>
                            </div>


                        </div>

                        <div className={style.login_input_name}>

                            <label className={style.input_label} for="kategori">kategori</label>
                            <div>
                                <select className={style.input_box} id="kategori" name="kategori" value={kategori} onChange={handleKategoriChange}>
                                    <option value="" selected disabled hidden>Choose Grade</option>
                                    {kategoriPelanggaran.map((item) => {
                                        return (
                                            <option value={item.id}>{item.kategori}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>

                        <div className={style.login_input_name}>

                            <label className={style.input_label} for="pelanggaran">Pelanggaran</label>

                            <select className={style.input_box} id="pelanggaran" name="pelanggaran" value={pelanggaran} onChange={event => setPelanggaran(event.target.value)}>
                                <option value="" selected disabled hidden>Choose Grade</option>
                                {pelanggaranList.map((item) => {
                                    return (
                                        <option value={item.id}>{item.name}</option>
                                    )
                                })}
                            </select>

                        </div>

                        <input type="submit" className={style.button} onClick={handleClick}></input>
                    </form>


                </div>

            </div>

        </div>

    )

}
export default InputPelanggaran;