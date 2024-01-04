import './AboutProject.css'
import MainTitle from '../MainTitle/MainTitle'

const AboutProject = () => {
    return (
        <article id="aboutproject" className="aboutproject">

            <section className='aboutproject__wrapper'>

                <header className='aboutproject__header'>
                    <MainTitle title="О проекте" />
                </header>

                <section className="aboutproject__main">
                    <section className='aboutproject__content'>
                        <section className='aboutproject__col'>
                            <p className='aboutproject__col_title_1'>Дипломный проект включал 5 этапов</p>
                            <p className='aboutproject__col_title_2'>
                                Составление плана, работу над бэкендом, вёрстку, добавление
                                функциональности и финальные доработки.
                            </p>
                        </section>
                        <section className='aboutproject__col'>
                            <p className='aboutproject__col_title_1'>На выполнение диплома ушло 5 недель</p>
                            <p className='aboutproject__col_title_2'>
                                У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                                соблюдать, чтобы успешно защититься.
                            </p>
                        </section>
                    </section>
                    <section className='aboutproject__timeline'>
                        <p className='aboutproject__timeline_period aboutproject__timeline_period_backend'>1 неделя</p>
                        <p className='aboutproject__timeline_text aboutproject__timeline_text_backend'>Back-end</p>
                        <p className='aboutproject__timeline_period aboutproject__timeline_period_frontend'>4 недели</p>
                        <p className='aboutproject__timeline_text aboutproject__timeline_text_frontend'>Front-end</p>
                    </section>
                </section>
            </section>
        </article>
    )
};

export default AboutProject
