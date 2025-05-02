import { data } from "react-router-dom";
import style from "./InputPelanggaran.module.css";
import { use, useEffect } from "react";

function InputPelanggaran() {

    /* 
    Make sure to get api from /api_reward 
    */
    function fetchData() {
        fetch("http://localhost:8000/api_pelanggaran")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className={style.inputPelanggaran_container}>

            {/* Input Siswa Dashboard */}
            <div className={style.pelanggaran_title}>

                <div className={style.img_title}>
                    <img src='image/admin/image_pelanggaran.png' />
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

                            <label className={style.name} for="id">Id</label>
                            <div>
                                <input className={style.place_id} type="text" placeholder="enter id" />
                            </div>


                        </div>

                        <div className={style.login_input_name}>

                            <label className={style.name} for="nama">Nama</label>
                            <div>
                                <input className={style.place_name} type="text" placeholder="enter nama" />
                            </div>


                        </div>

                        <div className={style.login_input_name}>

                            <div>
                                <label className={style.name} for="pelanggaran">Pelanggaran</label>
                            </div>

                            <input className={style.place_pelanggaran} type="text" placeholder="enter pelanggaran" />

                        </div>

                        <div className={style.login_input_name}>

                            <div>
                                <label className={style.name} for="date">Date</label>
                            </div>

                            <input className={style.place_date} type="text" placeholder="enter date" />

                        </div>

                        <input type="submit" className={style.button}></input>
                    </form>


                </div>

            </div>

        </div>

    )

}
export default InputPelanggaran;