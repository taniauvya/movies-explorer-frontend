import React from 'react'
import './AboutMe.css'
import MainTitle from '../MainTitle/MainTitle'
import Portfolio from '../Portfolio/Portfolio'
import imgAvatar from '../../images/logo.svg'

const AboutMe = () => {
    return (
        <div className="aboutme">
            <MainTitle title="Студент" />
            <div className="aboutme__about">
                <div className="aboutme__about_text">
                    <h1 className="aboutme__h1">
                        Виталий
                    </h1>
                    <h2 className="aboutme__h2">
                        Фронтенд-разработчик, 30 лет
                    </h2>
                    <p className="aboutme__p">
                        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                    </p>
                    <a className="aboutme__p" href="https://github.com/taniauvya">Github</a>
                </div>
                <img alt="Аватар" src={imgAvatar} />
            </div>
            <div className="aboutme__portfolio">
                <Portfolio title="Статичный сайт" />
                <Portfolio title="Адаптивный сайт" />
                <Portfolio title="Одностраничное приложение" />
            </div>
        </div>
    )
};

export default AboutMe
