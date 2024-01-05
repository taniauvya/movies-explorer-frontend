
import './Main.css';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';

const Main = () => {

    return (
        <section className='main'>
            <section className='main__content'>
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
            </section>
        </section>
    )
};

export default Main
