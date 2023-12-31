import './Main.css';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';

const Main = ({ handleNavigationMenuClick }) => {
    return (
        <div className='main'>
            <main className='main__main'>
                <Promo handleNavigationMenuClick={handleNavigationMenuClick} />
                <AboutProject />
                <Techs />
                <AboutMe />
            </main>
            <footer className='main__footer'>
                <Footer />
            </footer>
        </div>
    )
};

export default Main
