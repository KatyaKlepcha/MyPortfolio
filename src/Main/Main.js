import style from "./Main.module.css"
import Photo from '../Pictures/Photo.jpg'

const Main = () => {
    return (
        <div className={style.container}>
            <div className={style.main}>
                <h1 className={style.title}>KATYA
                    <span className={style.surname}>KLEPCHA</span>
                </h1>
                <h4 className={style.profession}>Front-end Developer</h4>
            </div>
            <div className={style.photoBox}>
                <img src={Photo} className={style.photo} alt='MyPhoto'/>
            </div>

        </div>
    )
}

export default Main
