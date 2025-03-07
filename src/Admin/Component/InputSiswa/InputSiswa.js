import style from "./InputSiswa.module.css";

function InputSiswa() {



    return (
        <div className={style.inputsiswa_container}>

            {/* Input Siswa Dashboard */}
            <div className={style.siswa_title}>

                <div className={style.img_title}>
                    <img src='image/admin/image_santri.png' />
                </div>

                <div className={style.name_title}>
                    <h1>Input Santri</h1>
                </div>

            </div>

            {/* Input Siswa Page  */}
            <div className={style.content_siswa}>

                <div className={style.desc_content}>

                    <form className={style.input}>

                        <div className={style.login_input_name}>

                            <div>
                                <label className={style.name} for="id">Id</label>
                            </div>

                            <input className={style.place_id} type="text" placeholder="enter id" />

                        </div>

                        <div className={style.login_input_name}>

                            <label className={style.name} for="nama">Nama</label>
                            <div>
                                <input className={style.place_name} type="text" placeholder="enter nama" />
                            </div>


                        </div>

                        <input type="submit" className={style.button}></input>


                    </form>



                </div>

            </div>

        </div>

    )

}
export default InputSiswa;