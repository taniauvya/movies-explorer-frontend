import React from 'react'
import './Promo.css'
import Header from '../Header/Header';
import imgWorldLogo from '../../images/logo-world.svg'

const Promo = (props) => {
    return (
        <div className="promo">
            <Header />
            <div className="promo__container">
            <div className="promo__container_content">
                <div className="promo__container_title">
                    <h1 className="promo__title_main">
                        Учебный проект студента
                    </h1>
                    <h1 className="promo__title_main">
                        факультета
                    </h1>
                    <h1 className="promo__title_main">
                        Веб-разработки.
                    </h1>
                    <h2 className="promo__text">
                        Листайте ниже, чтобы узнать больше про этот
                    </h2>
                    <h2 className="promo__text">
                        проект и его создателя.
                    </h2>
                </div>
                <img alt="logo" src={imgWorldLogo} className="promo__logo" />
            </div>
            <div className="promo__container_more">
                <a href="" className="promo__link_more">Узнать больше</a>
            </div>
        </div>
        </div>
    )
};

export default Promo
