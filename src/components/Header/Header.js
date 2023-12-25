import './Header.css'
import imgLogo from '../../images/logo.svg'
import Navigation from '../Navigation/Navigation';

const Header = ({ navigationLinkClass, navigationAccountClass }) => {

    return (
        <div className="header">
            <img alt="logo" src={imgLogo} className='header__logo' />
            <Navigation
                linkClass={navigationLinkClass}
                accountClass={navigationAccountClass} />
        </div>
    )
};

export default Header
