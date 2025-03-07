import style from "./InputReward.module.css";

function InputReward() {



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
                                <label className={style.name} for="reward">Reward</label>
                            </div>

                            <input className={style.place_reward} type="text" placeholder="enter reward" />

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
export default InputReward;