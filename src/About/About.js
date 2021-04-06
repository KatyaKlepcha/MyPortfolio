import style from './About.module.css'
import Photo4 from '../Common/Pictures/Photo4.jpg'
import font from '../Common/Fonts/Montserrat-Thin.ttf'

const About = () => {
    return (
        <div className={style.aboutContainer}>
            <img src={Photo4} className={style.photo} alt='MyPhoto2'/>
            <div className={style.aboutMe}>
                <div className={style.aboutName}>
                    <div className={style.about}>ABOUT</div>
                    <div className={style.name}>KATYA KLEPCHA</div>
                </div>
                <div className={style.profession}>Front-end Developer</div>
                <hr/>
                <p>My name is Katya Klepcha. I am a beginner Front-End Developer.
                    I studying in it-incubator and I like it.
                    My higher education has nothing to do with programming,
                    but this did not prevent me from going to IT in any way.
                    My skills are constantly replenished, I'm developing.
                    I continue to learn English.
                </p>
                <p>I like to cook, especially delicious food. I love knitting, creativity.</p>
                <button>Download CV</button>
            </div>
        </div>
    )
}

export default About