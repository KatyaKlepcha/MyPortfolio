import Nav from "../Nav/Nav";
import style from "./Header.module.css"
import Main from "../Main/Main";

const Header = () => {
    return (
        <div className={style.header}>
            <Nav/>
        </div>
    )
}
export default Header
