import style from "./Main.module.css"
import Photo from '../Common/Pictures/photo2.jpg'

const Main = () => {
    return (
        <div className={style.container}>
            <div className={style.main}>
                <div className={style.mainContainer}>
                    <h1 className={style.name}>KATYA
                        <span className={style.surname}>KLEPCHA</span>
                    </h1>
                    <h4 className={style.profession}>Front-end Developer</h4>
                </div>
            </div>
            <img src={Photo} className={style.photo} alt='MyPhoto'/>
        </div>
    )
}

export default Main
