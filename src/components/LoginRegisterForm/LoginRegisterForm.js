import { Link } from 'react-router-dom';
import './LoginRegisterForm.css';
import Logo from '../Logo/Logo'


const LoginRegisterForm = ({ title, formName, buttonText, onSubmit, linkTitle, linkText, linkAddress, children }) => {
    return (
        <div className="loginregister" tabIndex="0">
            <header className='loginregister__header'>
                <Logo />
            </header>

            <main className="loginregister__main">
                <h1 className="loginregister__title">{title}</h1>

                <form name={formName} id={formName} className="loginregister__form" onSubmit={onSubmit}>
                    <div className="loginregister__container_input">
                        {children}
                    </div>
                    <span className="loginregister__error" />
                </form>
            </main>

            <footer className="loginregister__footer">
                <button aria-label={buttonText} form={formName} className="loginregister__submit" type="submit">
                    {buttonText}
                </button>
                <div className="loginregister___container_link">
                    <p className='loginregister__link_title'>{linkTitle}</p>
                    <Link to={linkAddress} className='loginregister__link'>{linkText}</Link>
                </div>
            </footer>
        </div>

    );
}

export default LoginRegisterForm