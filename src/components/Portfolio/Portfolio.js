import { Link } from 'react-router-dom'
import './Portfolio.css'

const Portfolio = (props) => {
    return (
        <div className="portfolio">
            <div className="portfolio__line">
                <Link className="portfolio__title" to={props.link} target="_blank">
                    {props.title}
                </Link>
                <Link className="portfolio__link" to={props.link} target="_blank"></Link>
            </div>
            <div className="portfolio__underline" />
        </div>
    )
};

export default Portfolio
