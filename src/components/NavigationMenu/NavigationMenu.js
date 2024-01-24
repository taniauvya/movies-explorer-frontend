import './NavigationMenu.css'
import imgWhite from '../../images/nav-menu-white.svg';
import imgBlack from '../../images/nav-menu-black.svg';

const NavigationMenu = ({ isBlack, onClick }) => {

    const img = isBlack ? imgBlack : imgWhite;

    return (
        <button aria-label="Меню" onClick={onClick} className="navigationmenu button-common">
            <img className='navigationmenu__image' alt="Меню" src={img} />
        </button>
    )
};

export default NavigationMenu
