import React from 'react'
import './Promo.css'
import imgWorldLogo from '../../images/logo-world.svg'

const Promo = () => {
    return (
        <div className="promo">
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
                        Листайте ниже, чтобы узнать больше про этот проект и его создателя.
                    </h2>
                </div>
                <img alt="logo" src={imgWorldLogo} className="promo__logo" />
            </div>
            <a href="" className="promo__button_more">Узнать больше</a>
        </div>
    )
};

export default Promo
