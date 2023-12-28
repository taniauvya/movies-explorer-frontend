import { Link } from 'react-router-dom';
import './Promo.css'
import Header from '../Header/Header';
import imgWorldLogo from '../../images/logo-world.svg'

const Promo = ({ handleNavigationMenuClick }) => {
    return (
        <div className="promo">
            <header className='promo__header'>
                <Header
                    navigationAccountClass="navigation_account_color"
                    navigationLinkClass="navigation_link_color"
                    isBlackLineNavMenu={false}
                    handleNavigationMenuClick={handleNavigationMenuClick} />
            </header>
            <main className='promo__main'>
                <div className="promo__container_main">
                    <div className="promo__space_main_top" />
                    <div className="promo__container_content">
                        <div className="promo__container_title">
                            <div className="promo__space_main_title" />
                            <h1 className="promo__title_main">
                                Учебный проект студента
                                факультета
                                Веб&#8209;разработки.
                            </h1>
                            <div className="promo__space_main_text" />
                            <h2 className="promo__text">
                                Листайте ниже, чтобы узнать больше про этот
                                проект и его создателя.
                            </h2>
                        </div>
                        <img alt="Логотип" src={imgWorldLogo} className="promo__logo" />
                    </div>
                    <div className="promo__space_more" />
                    <Link to="#aboutproject" className="promo__link_more">Узнать больше</Link>
                </div>
            </main>
        </div>
    )
};

export default Promo
