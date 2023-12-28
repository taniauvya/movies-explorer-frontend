import './AboutProject.css'
import MainTitle from '../MainTitle/MainTitle'

const AboutProject = () => {
    return (
        <div id="aboutproject" className="aboutproject">

            <header className='aboutproject__header'>
                <MainTitle title="О проекте" />
            </header>

            <main className="aboutproject__main">
                <div className="aboutproject__container_main">
                    <div className='aboutproject__space aboutproject__space_main_top' />
                    <div className='aboutproject__content'>
                        <div className='aboutproject__col'>
                            <p className='aboutproject__col_title_1'>Дипломный проект включал 5 этапов</p>
                            <p className='aboutproject__col_title_2'>
                                Составление плана, работу над бэкендом, вёрстку, добавление
                                функциональности и финальные доработки.
                            </p>
                        </div>
                        <div className='aboutproject__col'>
                            <p className='aboutproject__col_title_1'>На выполнение диплома ушло 5 недель</p>
                            <p className='aboutproject__col_title_2'>
                                У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                                соблюдать, чтобы успешно защититься.
                            </p>
                        </div>
                    </div>
                    <div className='aboutproject__space aboutproject__space_main_timeline' />
                    <div className='aboutproject__timeline'>
                        <p className='aboutproject__timeline_period aboutproject__timeline_period_backend'>1 неделя</p>
                        <p className='aboutproject__timeline_text aboutproject__timeline_text_backend'>Back-end</p>
                        <p className='aboutproject__timeline_period aboutproject__timeline_period_frontend'>4 неделя</p>
                        <p className='aboutproject__timeline_text aboutproject__timeline_text_frontend'>Front-end</p>
                    </div>
                </div>
            </main>
        </div>
    )
};

export default AboutProject
