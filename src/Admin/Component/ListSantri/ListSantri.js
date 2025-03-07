import style from "./ListSantri.module.css";

function ListSantri() {



    return (
        <div className={style.container_li_santri}>

            <div className={style.title}>

                <h1> Data Santri SMP IT Kelas 1
                    <br />
                    Ponpes Modern IT Multimedia Al Fatih</h1>
            </div>

            <div className={style.slide}>

                <div className={style.smp_slide}>
                    <p>SMP</p>
                </div>

                <div className={style.smk_slide}>
                    <p>SMK</p>
                </div>

            </div>

        </div>


    )

}
export default ListSantri;