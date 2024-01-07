import './AboutProject.css'
import MainTitle from '../MainTitle/MainTitle'

const AboutProject = () => {
    return (
        <article id="aboutproject" className="aboutproject">

            <section className='aboutproject__wrapper'>

                <header className='aboutproject__header'>
                    <MainTitle title="О проекте" />
                </header>

                <section className='aboutproject__content'>
                    <section className='aboutproject__col'>
                        <p className='aboutproject__col-title1'>Дипломный проект включал 5 этапов</p>
                        <p className='aboutproject__col-title2'>
                            Составление плана, работу над бэкендом, вёрстку, добавление
                            функциональности и финальные доработки.
                        </p>
                    </section>
                    <section className='aboutproject__col'>
                        <p className='aboutproject__col-title1'>На выполнение диплома ушло 5 недель</p>
                        <p className='aboutproject__col-title2'>
                            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                            соблюдать, чтобы успешно защититься.
                        </p>
                    </section>
                </section>
                <section className='aboutproject__timeline'>
                    <p className='aboutproject__timeline-period aboutproject__timeline-period_backend'>1 неделя</p>
                    <p className='aboutproject__timeline-text aboutproject__timeline-text_backend'>Back-end</p>
                    <p className='aboutproject__timeline-period aboutproject__timeline-period_frontend'>4 недели</p>
                    <p className='aboutproject__timeline-text aboutproject__timeline-text_frontend'>Front-end</p>
                </section>
            </section>
        </article>
    )
};

export default AboutProject
