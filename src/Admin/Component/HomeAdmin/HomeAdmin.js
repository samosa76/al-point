import { Link, Navigate, useParams } from "react-router-dom";
import style from "./HomeAdmin.module.css";


function HomeAdmin() {
    const { id_user } = useParams();
    const imagePath = `${process.env.PUBLIC_URL}/image/admin/`;

    if (id_user === "undefined") {
        return <Navigate to={`/`} />
    } else {
        return (
            <div className={style.admin_container}>

                <div className={style.admin_title}>

                    <div className={style.img_title}>
                        <img src={`${imagePath}/org_main_komputer.png`} alt="org_main_komputer.png" />
                    </div>

                    <div className={style.name_title}>
                        <h1>Admin Dashboard</h1>
                    </div>

                </div>

                <div className={style.info}>

                    {/* <Link to="/" className={style.non_link_text}>
                        <div className={style.admin_info}>

                            <div className={style.admin_img}></div>

                            <div className={style.admin_text}>

                                <div className={style.desc_text}>
                                    <img src={`${imagePath}/image_santri.png`} alt="image_santri.png" />
                                    <p> Lorem Ipsum is dummy text of the printing and
                                        typesetting the industry's standard</p>

                                    <div className={style.button_text}>
                                        <p>Input Santri</p>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </Link> */}

                    <Link to="/input-reward" className={style.non_link_text}>
                        <div className={style.admin_info}>

                            <div className={style.admin_img}></div>

                            <div className={style.admin_text}>

                                <div className={style.desc_text}>
                                    <img src={`${imagePath}/reward_img.png`} alt="reward_img.png" />
                                    <p> Memberikan penghargaan untuk siswa yang berprestasi atau yang menunjukan perilaku yang baik sesuai dengan ketentuan</p>
                                    <div className={style.button_text}>
                                        <p>Input Reward</p>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </Link>


                    <Link to="/input-pelanggaran" className={style.non_link_text}>
                        <div className={style.admin_info}>

                            <div className={style.admin_img}></div>

                            <div className={style.admin_text}>

                                <div className={style.desc_text}>
                                    <img src={`${imagePath}/image_pelanggaran.png`} alt="image_pelanggaran.png" />
                                    <p> Memberikan pelanggaran untuk siswa yang melakukan sebuah tindakan yang tidak sesuai dengan peraturan sekolah</p>
                                    <div className={style.button_text}>
                                        <p>Input Pelanggaran</p>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </Link>

                    {/* <div className={style.admin_info}>

                        <div className={style.admin_img}></div>

                        <div className={style.admin_text}>

                            <div className={style.desc_text}>
                            <img src={`${imagePath}/image_list.png`} alt="image_list.png" />
                                <p> Lorem Ipsum is dummy text of the printing and
                                    typesetting the industry's standard</p>
                                <div className={style.button_text}>
                                    <p>List Santri</p>
                                </div>

                            </div>

                        </div>

                    </div> */}

                </div>

            </div>


        )
    }
}







export default HomeAdmin;
