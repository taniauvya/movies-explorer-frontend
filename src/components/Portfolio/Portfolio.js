import { Link } from 'react-router-dom'
import './Portfolio.css'

const Portfolio = (props) => {
    return (
        <div className="portfolio">
            <div className="portfolio__line">
                <h1 className="portfolio__title">
                    {props.title}
                </h1>
                <Link className="portfolio__link" to={props.link}></Link>
            </div>
            <div className="portfolio__underline" />
        </div>
    )
};

export default Portfolio
