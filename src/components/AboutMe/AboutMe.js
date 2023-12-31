import { Link } from 'react-router-dom';
import './AboutMe.css'
import MainTitle from '../MainTitle/MainTitle'
import Portfolio from '../Portfolio/Portfolio'
import imgAvatar from '../../images/student-photo.png'

const AboutMe = () => {
    return (
        <div className="aboutme">

            <header className='aboutme__header'>
                <div className='aboutme__space aboutme__space_header_top' />
                <MainTitle title="Студент" />
            </header>

            <main className="aboutme__main">
                <section className="aboutme__container_main">
                    <div className='aboutme__space aboutme__space_main_top' />
                    <section className="aboutme__about">
                        <section className="aboutme__about_text">
                            <div className='aboutme__space aboutme__space_h1' />
                            <h1 className="aboutme__h1">
                                Виталий
                            </h1>
                            <div className='aboutme__space aboutme__space_h2' />
                            <h2 className="aboutme__h2">
                                Фронтенд-разработчик, 30 лет
                            </h2>
                            <div className='aboutme__space aboutme__space_p' />
                            <p className="aboutme__p">
                                Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                                и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С
                                2015 года работал в компании «СКБ Контур». После того, как прошёл курс по
                                веб&#8209;разработке, начал заниматься фриланс&#8209;заказами и ушёл с постоянной работы.
                            </p>
                            <div className='aboutme__space aboutme__space_link' />
                            <Link className="aboutme__link" to="https://github.com/taniauvya" target="_blank">Github</Link>
                        </section>
                        <img alt="Аватар" src={imgAvatar} className='aboutme__about_avatar' />
                    </section>

                    <div className='aboutme__space aboutme__space_portfolio_title' />
                    <p className="aboutme__portfolio_title">Портфолио</p>

                    <div className='aboutme__space aboutme__space_portfolio' />
                    <section className="aboutme__portfolio">
                        <Portfolio title="Статичный сайт" link="https://github.com/" />
                        <Portfolio title="Адаптивный сайт" link="https://github.com/" />
                        <Portfolio title="Одностраничное приложение" link="https://github.com/" hasUnderline={false} />
                    </section>
                    <div className='aboutme__space aboutme__space_main_bottom' />
                </section>
            </main>
        </div>
    )
};

export default AboutMe
