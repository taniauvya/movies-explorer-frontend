import { Link } from 'react-router-dom';
import './Promo.css'
import Header from '../Header/Header';
import imgWorldLogo from '../../images/logo-world.svg'

const Promo = () => {
    return (
        <div className="promo">
            <div className="promo__container">
                <Header accountClass="header_account_color" linkClass="header_link_color" />
                <div className="promo__container_content">
                    <div className="promo__container_title">
                        <h1 className="promo__title_main">
                            Учебный проект студента<br />
                            факультета<br />
                            Веб-разработки.
                        </h1>
                        <h2 className="promo__text">
                            Листайте ниже, чтобы узнать больше про этот<br />
                            проект и его создателя.
                        </h2>
                    </div>
                    <img alt="logo" src={imgWorldLogo} className="promo__logo" />
                </div>
                <div className="promo__container_more">
                    <Link to="#aboutproject" className="promo__link_more">Узнать больше</Link>
                </div>
            </div>
        </div>
    )
};

export default Promo
