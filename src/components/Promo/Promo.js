import React from 'react'
import './Promo.css'
import imgLogo from '../images/popup-error.png'

const Promo = () => {
    return (
        <div className="promo">
            <div className="promo__container">
                <div className="promo__container_content">
                    <div className="promo__container_title">
                        <h1 className="promo__title_main">
                        Учебный проект студента
                        факультета
                        Веб-разработки.
                        </h1>
                        <h2 className="promo__title_footer">
                        Листайте ниже, чтобы узнать больше про этот
                        проект и его создателя.
                        </h2>
                    </div>
                    <img alt="logo" src={imgLogo} />
                </div>
                <div className="promo__button_more"></div>
            </div>
        </div>
    )
};

export default Promo
