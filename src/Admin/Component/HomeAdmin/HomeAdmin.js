import style from "./HomeAdmin.module.css";


function HomeAdmin() {

    return (
        <div className={style.admin_container}>

            <div className={style.admin_title}>

                <div className={style.img_title}>
                    <img src='image/admin/org_main_komputer.png' />
                </div>

                <div className={style.name_title}>
                    <h1>Admin Dashboard</h1>
                </div>

            </div>
            
            <div className={style.info}>
                <div className={style.admin_info}>

                    <div className={style.admin_img}></div>

                    <div className={style.admin_text}>

                        <div className={style.desc_text}>
                            <img src='image/admin/image_santri.png' />
                            <p> Lorem Ipsum is dummy text of the printing and
                                typesetting the industry's standard</p>

                            <div className={style.button_text}>
                                <p>Input Santri</p>
                            </div>

                        </div>

                    </div>

                </div>

                <div className={style.admin_info}>

                    <div className={style.admin_img}></div>

                    <div className={style.admin_text}>

                        <div className={style.desc_text}>
                            <img src='image/admin/reward_img.png' />
                            <p> Lorem Ipsum is dummy text of the printing and
                                typesetting the industry's standard</p>

                            <div className={style.button_text}>
                                <p>Input Reward</p>
                            </div>

                        </div>

                    </div>

                </div>

                <div className={style.admin_info}>

                    <div className={style.admin_img}></div>

                    <div className={style.admin_text}>

                        <div className={style.desc_text}>
                            <img src='image/admin/image_pelanggaran.png' />
                            <p> Lorem Ipsum is dummy text of the printing and
                                typesetting the industry's standard</p>

                            <div className={style.button_text}>
                                <p>Input Pelanggaran</p>
                            </div>

                        </div>

                    </div>

                </div>

                <div className={style.admin_info}>

                    <div className={style.admin_img}></div>

                    <div className={style.admin_text}>

                        <div className={style.desc_text}>
                            <img src='image/admin/image_list.png' />
                            <p> Lorem Ipsum is dummy text of the printing and
                                typesetting the industry's standard</p>

                            <div className={style.button_text}>
                                <p>List Santri</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>


    )

}







export default HomeAdmin;
