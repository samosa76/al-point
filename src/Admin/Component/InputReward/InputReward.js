import { useEffect, useState } from "react";
import style from "./InputReward.module.css";
import axios from "axios";

function InputReward() {

    const [fromData, setFormData] = useState({
        grade: "",
        siswa: "",
        kategori: "",
        reward: ""
    });

    const { grade, siswa, kategori, reward } = fromData;
    const [siswaList, setSiswaList] = useState([]);
    const [rewardList, setRewardList] = useState([]);
    const [kategoriList, setKategoriList] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "grade") {
            getDataSiswa(value);
        }

        if (name === "kategori") {
            getDataReward(value);
        }

        setFormData({
            ...fromData,
            [name]: value
        });


    }

    

    /*

     Get Data Siswa by selected Grade 

     */

    const getDataSiswa = async (grade) => {
        axios.get(`http://localhost:8000/selectSiswaByClasses/?kelas=${grade}`).then((res) => {
            const data = res.data.payload;
            setSiswaList(data);
        })
    }

    /*

    Get ALL Data Kategori Reward from API

    */

    const getKategoriReward = async () => {
        const response = await axios.get("http://localhost:8000/api_kategori_reward");
        const data = response.data.payload;
        setKategoriList(data);
    }

    /* 

    Get Data Reward by selected Kategori

    */

    const getDataReward = async (kategori) => {
        const response = await axios.get("http://localhost:8000/api_ket_reward");
        const data = response.data.payload;
        const filteredData = data.filter((item) => item.kategori === parseInt(kategori));
        setRewardList(filteredData);
        
    }

    /*

    Post reward to API with parameter id_siswa, id_kategori

    */

    const addData = async () => {
        await axios.post("http://localhost:8000/api_reward", 
            {
                id_name : siswa,
                id_reward : reward
            }
        ).then((res) => {
            alert(`reward berhasil di tambahkan ${res.data}`);
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (grade === "" || siswa === "" || kategori === "" || reward === "") {
            alert("Please fill all the fields");
            return;
        } else {
            addData();
        }

        

        // console.log(`Grade: ${grade}, Siswa: ${siswa}, Kategori: ${kategori}, Reward: ${reward}`);   
    }

    useEffect(() => {
        getKategoriReward();
    }, [])

    return (
        <div className={style.inputreward_container}>

            {/* Input Siswa Dashboard */}
            <div className={style.reward_title}>

                <div className={style.img_title}>
                    <img src='image/admin/reward_img.png' />
                </div>

                <div className={style.name_title}>
                    <h1>Input Reward</h1>
                </div>

            </div>

            {/* Input Siswa Page  */}
            <div className={style.content_reward}>

                <div className={style.desc_content}>

                    <form className={style.input}>

                        <div className={style.login_input_name}>

                            <label className={style.input_label} for="grade">Grade</label>
                            <div>
                                <select className={style.input_box} id="grade" name="grade" value={grade} onChange={handleChange}>
                                    <option value="" selected disabled hidden>Choose Grade</option>
                                    <option value="1">Kelas 1</option>
                                    <option value="2">Kelas 2</option>
                                    <option value="3">Kelas 3</option>
                                    <option value="4">Kelas 4</option>
                                    <option value="5">Kelas 5</option>
                                    <option value="6">Kelas 6</option>
                                </select>
                            </div>


                        </div>

                        <div className={style.login_input_name}>

                            <label className={style.input_label} for="siswa">Nama</label>
                            <div>
                                <select className={style.input_box} id="siswa" name="siswa" value={siswa} onChange={handleChange}>
                                    <option value="" selected disabled hidden>Choose Grade</option>
                                    {siswaList.map((item) => {
                                        return (
                                            <option value={item.id}>{item.nama}</option>
                                        )
                                    })}
                                </select>
                            </div>


                        </div>

                        <div className={style.login_input_name}>


                            <label className={style.input_label} for="kategori">Kategori</label>

                            <div>
                                <select className={style.input_box} id="kategori" name="kategori" value={kategori} onChange={handleChange}>
                                    <option value="" selected disabled hidden>Choose Grade</option>
                                    {kategoriList.map((item) => {
                                        return (
                                            <option value={item.id}>{item.kategori}</option>
                                        )
                                    })}
                                </select>
                            </div>


                        </div>

                        <div className={style.login_input_name}>
                            <label className={style.input_label} for="reward">Reward</label>
                            <div>
                                <select className={style.input_box} id="reward" name="reward" value={reward} onChange={handleChange}>
                                    <option value="" selected disabled hidden>Choose Grade</option>
                                    {rewardList.map((item) => {
                                        return (
                                            <option value={item.id}>{item.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>

                        <input type="submit" className={style.button} onClick={handleClick}></input>
                    </form>


                </div>

            </div>

        </div>

    )

}
export default InputReward;