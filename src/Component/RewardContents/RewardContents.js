import style from './RewardContents.module.css';

function RewardsContents() {
    return (

        <div className={style.container_RewardContents}>
            <div className={style.title}>
                <h2>Reward</h2>
                <hr />
            </div>
            <div className={style.RewardsContents}>
                <table>
                    <tr>
                        <th>No</th>
                        <th>Reward</th>
                        <th>Point</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Penghargaan bagi santri yang rajin</td>
                        <td>50</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default RewardsContents;