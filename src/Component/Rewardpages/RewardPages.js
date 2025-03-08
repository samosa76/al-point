import RewardsContents from '../RewardContents/RewardContents';
import style from './Rewardpages.module.css';

function Rewardspages() {
    return (

        <div className={style.container_Reward}>
            <div className={style.pages}>
                <div className={style.page}>
                <div className={style.photoSantri}>
                        <img src='/image/PhotoSantri/Jibran.jpg' alt='image/jibran'></img>
                    </div>
                    <div className={style.ellipses}>
                    
                        <div className={style.ellipse}></div>

                        <div className={style.ellipse2}>
                            <div className={style.ellipse_2}></div>
                        </div>

                    </div>
                    <div className={style.container_text}>

                        <div className={style.text}>
                            <div className={style.text_title}>
                                <p>Nama</p>
                            </div>
                            <p>: Jibran Amranulhaq</p>
                        </div>
                        <div className={style.text}>
                            <div className={style.text_title}>
                                <p>Kelas</p>
                            </div>
                            <p>: IV</p>
                        </div>
                        <div className={style.text}>
                            <div className={style.text_title}>
                                <p>Tanggal Lahir</p>
                            </div>
                            <p>: 29 juni 2008</p>
                        </div>
                        <div className={style.text}>
                            <div className={style.text_title}>
                                <p>Alamat</p>
                            </div>
                            <p>: Tasikmalaya</p>
                        </div>

                        <RewardsContents />
                        
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Rewardspages;