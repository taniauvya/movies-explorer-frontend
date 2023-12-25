import './NavigationMenu.css'

const NavigationMenu = ({ isBlack }) => {

    const lineColor = isBlack ? "navigationmenu__line_black" : "navigationmenu__line_white";
    const lineClass = `navigationmenu__line ${lineColor}`;
    return (
        <div className="navigationmenu">
            <div className={lineClass} />
            <div className={lineClass} />
            <div className={lineClass} />
        </div>
    )
};

export default NavigationMenu
