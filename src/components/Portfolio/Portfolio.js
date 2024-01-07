import { Link } from 'react-router-dom'
import './Portfolio.css'

const Portfolio = ({ link, title, hasUnderline = true }) => {
    return (
        <div className="portfolio">
            <div className="portfolio__line">
                <Link className="portfolio__title link-common" to={link} target="_blank">
                    {title}
                </Link>
                <Link className="portfolio__link link-common" to={link} target="_blank"></Link>
            </div>
            {hasUnderline && <div className="portfolio__underline" />}
        </div>
    )
};

export default Portfolio
