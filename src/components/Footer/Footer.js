import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <p className="footer__title">
                Учебный проект Яндекс.Практикум х BeatFilm.
            </p>
            <div className="footer__container_bottom">
                <p className="footer__year">© 2023</p>
                <div className="footer__container_link">
                    <Link className="footer___link link-common" to="https://practicum.yandex.ru" target="_blank">Яндекс.Практикум</Link>
                    <Link className="footer___link link-common" to="https://github.com" target="_blank">Github</Link>
                </div>
            </div>
        </div>
    )
};

export default Footer
