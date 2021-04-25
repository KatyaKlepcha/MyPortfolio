import style from './Project.module.css'
import Screenshot2 from '../Common/Screenshots/Screenshot_2.png'
import Screenshot1 from '../Common/Screenshots/Screenshot_1.png'
import Screenshot3 from '../Common/Screenshots/Screenshot_3.png'

const Project = () => {
    return (
        <div className={style.projectContainer}>
            <h1 className={style.projectTitle}>MY PROJECTS</h1>
            <div className={style.workTitle}>MY WORK</div>
            <div className={style.workLink}>
                <div className={style.todoListLink}>
                    <a href={'https://katyaklepcha.github.io/TodoList/'}>TodoList </a>
                    <img src={Screenshot3} className={style.photoTodoList} alt={'photoTodoList'}/>
                </div>
                <div className={style.socialNetworkLink}>
                    <a href={'https://katyaklepcha.github.io/socialNetwork/'}>Social Network </a>
                    <img src={Screenshot1} className={style.photoSocialNetwork} alt={'photoSocialNetwork'}/>
                </div>
                <div className={style.counterLink}>
                    <a href={'https://katyaklepcha.github.io/NewCounter/'}>Counter </a>
                    <img src={Screenshot2} className={style.photoCounter} alt={'photoCounter'}/>
                </div>
            </div>
        </div>
    )
}

export default Project
