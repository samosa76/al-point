import style from './ListSantri.module.css'

function ListSantri() {
    return (
        <div>

            <div className={style.title}>
                <p>Data Santri SMP IT Kelas 1</p>
                <p>Ponpes Modern IT Multimedia Al Fatih</p>
            </div>

            <div className={style.table}>

                <div className={style.profil}></div>

                <div className={style.container_text}>

                    <div className={style.text}>
                        <p className={style.text_title}>Nama</p>
                        <p>:</p>
                    </div>
                    <div className={style.text}>
                        <p className={style.text_title}>Kelas</p>
                        <p>:</p>
                    </div>
                    <div className={style.text}>
                        <p className={style.text_title}>Asal</p>
                        <p>:</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ListSantri;