import React from 'react'
import './Main.css';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <div className='main__container_footer'>
                <Footer />
            </div>
        </>
    )
};

export default Main
