import MenuClass from '../../MenuClass/MenuClass';
import style from './Classpage.module.css'

function Classpage({ number }) {
    return (
        <div>

            <div className={style.text}>
                <p>Data Santri</p>
                <p>Ponpes Modern IT Multimedia Al Fatih</p>
            </div>

            <div className={style.container_opsi}>

                <div className={style.opsies}>
                    <MenuClass number="1" kelas="SMP" />
                    <MenuClass number="2" kelas="SMP" />
                    <MenuClass number="3" kelas="SMP" />
                </div>

            </div>

            <div className={style.container_opsi}>

                <div className={style.opsies}>
                    <MenuClass number="4" kelas="SMK" />
                    <MenuClass number="5" kelas="SMK" />
                    <MenuClass number="6" kelas="SMK" />
                </div>

            </div>

        </div>
    )
}

export default Classpage;