import './NavigationMenu.css'

const NavigationMenu = ({ isBlack, onClick }) => {

    const lineColor = isBlack ? "navigationmenu__line_black" : "navigationmenu__line_white";
    const lineClass = `navigationmenu__line ${lineColor}`;
    return (
        <div onClick={onClick} className="navigationmenu">
            <div className={lineClass} />
            <div className={lineClass} />
            <div className={lineClass} />
        </div>
    )
};

export default NavigationMenu
