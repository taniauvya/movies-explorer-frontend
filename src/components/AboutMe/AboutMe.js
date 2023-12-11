import React from 'react'
import './AboutMe.css'
import MainTitle from '../MainTitle/MainTitle'
import imgAvatar from '../images/popup-error.png'

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
            <p className="aboutme__prefooter">
                Учебный проект Яндекс.Практикум х BeatFilm.
            </p>
            <div className="aboutme__footer">
                <p className="aboutme__footer_year">© 2023</p>
                <a className="aboutme__footer_practicum" href="https://practicum.yandex.ru">Яндекс.Практикум</a>
                <a className="aboutme__footer_github" href="https://github.com/taniauvya">Github</a>
            </div>
        </div>
    )
};

export default AboutMe
