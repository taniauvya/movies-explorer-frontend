import './Techs.css'
import MainTitle from '../MainTitle/MainTitle'

const Techs = () => {
    return (
        <article className="techs">
            <section className="techs__wrapper">
                <section className='techs__header'>
                    <MainTitle title="Технологии" />
                </section>

                <section className="techs__main">
                    <h1 className="techs__title">7 технологий</h1>
                    <p className="techs__text">
                        На курсе веб-разработки мы освоили технологии, которые применили
                        в дипломном проекте.
                    </p>
                    <ul className="techs__list">
                        <li className="techs__list-item">HTML</li>
                        <li className="techs__list-item">CSS</li>
                        <li className="techs__list-item">JS</li>
                        <li className="techs__list-item">React</li>
                        <li className="techs__list-item">Git</li>
                        <li className="techs__list-item">Express.js</li>
                        <li className="techs__list-item">mongoDB</li>
                    </ul>
                </section>
            </section>
        </article>
    )
};

export default Techs
