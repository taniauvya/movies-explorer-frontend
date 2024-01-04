import { Link } from 'react-router-dom';
import './Promo.css'
import imgWorldLogo from '../../images/logo-world.svg'

const Promo = () => {
    return (
        <article className="promo">
            <section className='promo__wrapper'>
                <section className="promo__container_content">
                    <section className="promo__container_title">
                        <h1 className="promo__title_main">
                            Учебный проект студента
                            факультета
                            Веб&#8209;разработки.
                        </h1>
                        <h2 className="promo__text">
                            Листайте ниже, чтобы узнать больше про этот
                            проект и его создателя.
                        </h2>
                    </section>
                    <img alt="Логотип" src={imgWorldLogo} className="promo__logo" />
                </section>
                <Link to="#aboutproject" className="promo__link_more">Узнать больше</Link>
            </section>
        </article>
    )
};

export default Promo
