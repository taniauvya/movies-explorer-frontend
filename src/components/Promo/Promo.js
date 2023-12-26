import { Link } from 'react-router-dom';
import './Promo.css'
import Header from '../Header/Header';
import imgWorldLogo from '../../images/logo-world.svg'

const Promo = ({ handleNavigationMenuClick }) => {
    return (
        <div className="promo">
            <div className="promo__container">
                <Header
                    navigationAccountClass="navigation_account_color"
                    navigationLinkClass="navigation_link_color"
                    isBlackLineNavMenu={false}
                    handleNavigationMenuClick={handleNavigationMenuClick} />
                <div className="promo__container_content">
                    <div className="promo__container_title">
                        <h1 className="promo__title_main">
                            Учебный проект студента
                            факультета
                            Веб&#8209;разработки.
                        </h1>
                        <h2 className="promo__text">
                            Листайте ниже, чтобы узнать больше про этот
                            проект и его создателя.
                        </h2>
                    </div>
                    <img alt="Логотип" src={imgWorldLogo} className="promo__logo" />
                </div>
                <div className="promo__container_more">
                    <Link to="#aboutproject" className="promo__link_more">Узнать больше</Link>
                </div>
            </div>
        </div>
    )
};

export default Promo
