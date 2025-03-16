import style from "./MenuClass.module.css"

function MenuClass({ number, kelas }) {
    return (
        <div className={style.opsi}>

            <div className={style.ellipse}>
                <div className={style.ellipse2}>
                    <p>{number}</p>
                </div>
            </div>

            <h1>{kelas}</h1>
        </div>
    )
}

export default MenuClass;