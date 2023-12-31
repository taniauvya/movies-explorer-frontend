import { Link } from 'react-router-dom'
import './Portfolio.css'

const Portfolio = ({ link, title, hasUnderline = true }) => {
    return (
        <div className="portfolio">
            <div className="portfolio__line">
                <Link className="portfolio__title" to={link} target="_blank">
                    {title}
                </Link>
                <Link className="portfolio__link" to={link} target="_blank"></Link>
            </div>
            {hasUnderline && <div className="portfolio__underline" />}
        </div>
    )
};

export default Portfolio
