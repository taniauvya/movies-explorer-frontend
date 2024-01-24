import { useNavigate } from 'react-router-dom';
import './PageNotFound.css'

const PageNotFound = () => {
    const navigate = useNavigate();

    function handleBackOnClick() {
        navigate(-1);
    }

    return (
        <section className="pagenotfound page-width-common">
            <h1 className="pagenotfound__title">404</h1>
            <span className="pagenotfound__text">Страница не найдена</span>
            <button aria-label="Назад" className='pagenotfound__button button-common' onClick={handleBackOnClick}>Назад</button>
        </section>
    )
};

export default PageNotFound
