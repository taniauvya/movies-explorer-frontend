import { useLocation } from "react-router-dom";
import './Main.css';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Main = ({ handleNavigationMenuClick }) => {

    const location = useLocation();

    let header;
    if (["/", "movies", "saved-movies"].includes(location.pathname))
        header =
            <header className='main__header'>
                <div className="main__header_wrapper">
                    <Header
                        navigationAccountClass="navigation_account_color"
                        navigationLinkClass="navigation_link_color"
                        isBlackLineNavMenu={false}
                        handleNavigationMenuClick={handleNavigationMenuClick} />
                </div>
            </header>;

    let footer;
    if (["/", "movies", "saved-movies"].includes(location.pathname))
        footer =
            <footer className='main__footer'>
                <div className="main__footer_wrapper">
                    <Footer />
                </div>
            </footer>;

    return (
        <section className='main'>
            {header || ""}

            <main className='main__content'>
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
            </main>

            {footer || ""}
        </section>

    )
};

export default Main
