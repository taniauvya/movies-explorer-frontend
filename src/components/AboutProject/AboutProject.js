import './AboutProject.css'
import MainTitle from '../MainTitle/MainTitle'

const AboutProject = () => {
    return (
        <div id="aboutproject" className="aboutproject">
            <div className="aboutproject__content_main">
                <MainTitle title="О проекте" />
                <div className='aboutproject__content'>
                    <div className='aboutproject__col1'>
                        <p className='aboutproject__col_title_1'>Дипломный проект включал 5 этапов</p>
                        <p className='aboutproject__col_title_2'>
                            Составление плана, работу над бэкендом, вёрстку, добавление<br/>
                            функциональности и финальные доработки.
                        </p>
                    </div>
                    <div className='aboutproject__col2'>
                        <p className='aboutproject__col_title_1'>На выполнение диплома ушло 5 недель</p>
                        <p className='aboutproject__col_title_2'>
                            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было<br/>
                            соблюдать, чтобы успешно защититься.
                        </p>
                    </div>
                </div>
                <div className='aboutproject__timeline'>
                    <div className='aboutproject__timeline_backend'>
                        <p className='aboutproject__timeline_backend_week'>1 неделя</p>
                        <p className='aboutproject__timeline_bottom_text'>Back-end</p>
                    </div>
                    <div className='aboutproject__timeline_frontend'>
                        <p className='aboutproject__timeline_frontend_week'>4 недели</p>
                        <p className='aboutproject__timeline_bottom_text'>Front-end</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutProject
