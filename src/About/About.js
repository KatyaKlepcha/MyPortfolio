import style from './About.module.css'
import Photo2 from '../Pictures/Photo3.jpg'

const About = () => {
    return (
        <div className={style.aboutContainer}>
            <img src={Photo2} className={style.photo} alt='MyPhoto2'/>
            <div className={style.about}>ABOUT</div>
            <div className={style.name}>KATYA KLEPCHA</div>
            <div className={style.profession}>Front-end Developer</div>
        </div>
    )
}

export default About