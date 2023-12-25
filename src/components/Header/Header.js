import './Header.css'
import imgLogo from '../../images/logo.svg'
import Navigation from '../Navigation/Navigation';
import NavigationMenu from '../NavigationMenu/NavigationMenu'

const Header = ({ navigationLinkClass, navigationAccountClass, isBlackLineNavMenu =true }) => {

    return (
        <div className="header">
            <img alt="logo" src={imgLogo} className='header__logo' />

            <div className='header__container_nav_large'>
                <Navigation
                    linkClass={navigationLinkClass}
                    accountClass={navigationAccountClass} />
            </div>

            <div className='header__container_nav_medium'>
                <NavigationMenu isBlack={isBlackLineNavMenu} />
            </div>
        </div>
    )
};

export default Header
