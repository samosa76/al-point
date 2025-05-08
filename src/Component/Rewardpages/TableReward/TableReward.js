import style from './TableReward.module.css'
const TableReward = ({ reward }) => {
    var i = 1;
    return (
        <div className={style.container_RewardContents}>
            <div className={style.title}>
                <h2>Reward</h2>
                <hr />
            </div>
            <div className={style.RewardsContents}>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Reward</th>
                            <th>Point</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reward.map((item) => (
                            <tr>
                                <td>{i++}</td>
                                <td>{item.name}</td>
                                <td>{item.score}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableReward;