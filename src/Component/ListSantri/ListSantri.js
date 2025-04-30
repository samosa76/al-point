import style from './ListSantri.module.css'

function ListSantri({ students }) {
    var i = 1;
    return (
        <div className={style.container}>
                <table className={style.table}>
                    <thead className={style.thead}>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Kelas</th>
                            <th>NIS</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className={style.tbody}>
                        {students.map((student, index) => (

                            <tr key={student.nis}>
                                <td>{i++}</td>
                                <td>{student.nama}</td>
                                <td>{student.kelas}</td>
                                <td>{student.nis}</td>
                                <td><button className={style.button}>Detail</button></td>
                            </tr>
                        ))}
                        {/* <tr>
                            <td>No</td>
                            <td>Nama</td>
                            <td>Kelas</td>
                            <td>NIS</td>
                            <td>Action</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
    )
}

export default ListSantri;