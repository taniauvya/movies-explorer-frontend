import { Link } from 'react-router-dom';
import './AboutMe.css'
import MainTitle from '../MainTitle/MainTitle'
import Portfolio from '../Portfolio/Portfolio'
import imgAvatar from '../../images/student-photo.png'

const AboutMe = () => {
    return (
        <div className="aboutme">
            <div className="aboutme__container">
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
                            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С
                            2015 года работал в компании «СКБ Контур». После того, как прошёл курс по
                            веб&#8209;разработке, начал заниматься фриланс&#8209;заказами и ушёл с постоянной работы.
                        </p>
                        <Link className="aboutme__link" to="https://github.com/taniauvya">Github</Link>
                    </div>
                    <img alt="Аватар" src={imgAvatar} className='aboutme__about_avatar' />
                </div>
                <div className="aboutme__portfolio">
                    <p className="aboutme__portfolio_title">Портфолио</p>
                    <Portfolio title="Статичный сайт" link="https://github.com/" />
                    <Portfolio title="Адаптивный сайт" link="https://github.com/" />
                    <Portfolio title="Одностраничное приложение" link="https://github.com/" />
                </div>
            </div>
        </div >
    )
};

export default AboutMe
