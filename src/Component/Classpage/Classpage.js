import MenuClass from '../../MenuClass/MenuClass';
import style from './Classpage.module.css'
import { useNavigate } from 'react-router-dom';

function Classpage({ number }) {
    const navigate = useNavigate();
    const handleMenuClick = (menu) => {
        navigate(`/list-siswa/${menu[0]}`);
    }
    return (
        <div className={style.container}>

            <div className={style.text}>
                <h3>Data Santri</h3>
                <h5>Ponpes Modern IT Multimedia Al Fatih</h5>
            </div>

            <div className={style.container_opsi}>

                <div className={style.opsies}>
                    <div onClick={() => handleMenuClick(["1", "SMP"])}>
                        <MenuClass number="1" kelas="SMP" />
                    </div>
                    <div onClick={() => handleMenuClick(["2", "SMP"])}>
                        <MenuClass number="2" kelas="SMP" />
                    </div>
                    <div onClick={() => handleMenuClick(["3", "SMP"])}>
                        <MenuClass number="3" kelas="SMP" />
                    </div>



                </div>

            </div>

            <div className={style.container_opsi}>

                <div className={style.opsies}>
                    <div onClick={() => handleMenuClick(["4", "SMK"])}>
                        <MenuClass number="4" kelas="SMK" />
                    </div>
                    <div onClick={() => handleMenuClick(["5", "SMK"])}>
                        <MenuClass number="5" kelas="SMK" />
                    </div>
                    <div onClick={() => handleMenuClick(["6", "SMK"])}>
                        <MenuClass number="6" kelas="SMK" />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Classpage;