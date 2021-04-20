import style from './Project.module.css'

const Project = ()=>{
    return (
        <div className={style.projectContainer}>
            <h1 className={style.projectTitle}>MY PROJECTS</h1>
            <div className={style.workTitle}>MY WORK</div>
        </div>
    )
}

export default Project
