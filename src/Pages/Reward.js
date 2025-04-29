import RewardsContents from "../Component/RewardContents/RewardContents";

function Reward() { return (
        <div>
            {/* <h1>List Siswa Kelas {
            {/* {reward.map((reward) => (

                <li key={reward.id}>
                    {reward.nama} (ID: {reward.name})
                </li>
            ))} */}
            <RewardsContents />
        </div>
    )
}

export default Reward;