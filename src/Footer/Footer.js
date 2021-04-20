import style from './Footer.module.css'
import insta from "../Common/PicturesFooter/insta.png";
import telegram from '../Common/PicturesFooter/telegram.jpg';
import vk from '../Common/PicturesFooter/vk.jpg'


const Footer = () => {
    return (
        <div className={style.footerContainer}>
            <div>MY PORTFOLIO</div>
            <div>
                <div>Vasnetsova,15b</div>
                <div>Minsk, Belarus</div>
            </div>
            <div>
                <div>Solianchik@yandex.ru</div>
                <div>+375(29)278-00-44</div>
            </div>
            <div>
                <img src={insta} className={style.photoInsta} alt='instaLogo'/>
                <img src={telegram} className={style.photoTelegram} alt='telegramLogo'/>
                <img src={vk} className={style.photoTelegram} alt='vkLogo'/>
            </div>
        </div>
    )
}
export default Footer