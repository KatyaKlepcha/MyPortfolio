import style from './Skills.module.css'
import html from '../Common/PicturesSkills/html.png'
import css from "../Common/PicturesSkills/CSS.png";
import js from '../Common/PicturesSkills/JS.png';
import react from '../Common/PicturesSkills/react.png'
import redux from '../Common/PicturesSkills/redux.jpg'

const Skills = () => {
    return (
        <div className={style.skillsContainer}>
            <h1 className={style.skillsTitle}>Skills</h1>
            <div className={style.skills}>
                <div className={style.htmlContainer}>
                    <div className={style.htmlTitle}>HTML</div>
                        <img src={html} className={style.photoHtml} alt='html'/>
                        <p className={style.htmlSills}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
                            rerum.</p>
                </div>
                <div className={style.cssContainer}>
                    <div className={style.cssTitle}>CSS</div>
                    <img src={css} className={style.photoCss} alt='css'/>
                    <p className={style.cssSills}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
                        quos.
                    </p>
                </div>
                <div className={style.jsContainer}>
                    <div className={style.jsTitle}>JS</div>
                    <img src={js} className={style.photoJs} alt='css'/>
                    <p className={style.jsSkills}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
                        possimus.</p>
                </div>
                <div className={style.reactContainer}>
                    <div className={style.reactTitle}>React</div>
                    <img src={react} className={style.photoReact} alt='react'/>
                    <p className={style.reactSkills}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                        perspiciatis?</p>
                </div>
                <div className={style.reduxContainer}>
                    <div className={style.reduxTitle}>Redux</div>
                    <img src={redux} className={style.photoRedux} alt='redux'/>
                    <p className={style.reduxSkills}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi,
                        tempora.</p>
                </div>
            </div>
        </div>

    )
}
export default Skills
