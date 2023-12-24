import { useNavigate } from 'react-router-dom';
import './PageNotFound.css'

const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="pagenotfound">
            <h1 className="pagenotfound__header">404</h1>
            <p className="pagenotfound__text">Страница не найдена</p>
            <button className='pagenotfound__link' onClick={() => navigate(-1)}>Назад</button>
        </div>
    )
};

export default PageNotFound
