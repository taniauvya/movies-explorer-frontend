import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <p className="footer__title">
                Учебный проект Яндекс.Практикум х BeatFilm.
            </p>
            <div className="footer__container">
                <p className="footer__year">© 2023</p>
                <a className="footer___link_practicum" href="https://practicum.yandex.ru">Яндекс.Практикум</a>
                <a className="footer___link_github" href="https://github.com/taniauvya">Github</a>
            </div>
        </div>
    )
};

export default Footer
