import { Link } from 'react-router-dom';
import './LoginRegisterForm.css';
import Logo from '../Logo/Logo'


const LoginRegisterForm = ({ title, formName, buttonText, onSubmit, linkTitle, linkText, linkAddress, children }) => {
    return (
        <div className="loginregister" tabIndex="0">
            <header className='loginregister__header'>
                <div className='loginregister__space_logo' />
                <Logo />
            </header>

            <main className="loginregister__main">
                <div className='loginregister__space_main_title' />
                <h1 className="loginregister__title">{title}</h1>
                <div className='loginregister__space_main_form' />
                <form name={formName} id={formName} className="loginregister__form" onSubmit={onSubmit}>
                    <div className="loginregister__container_input">
                        {children}
                    </div>
                    <span className="loginregister__error" />
                </form>
            </main>

            <footer className="loginregister__footer">
                <div className="loginregister__container_footer">
                    <button aria-label={buttonText} form={formName} className="loginregister__submit" type="submit">
                        {buttonText}
                    </button>
                    <div className="loginregister___container_link">
                        <p className='loginregister__link_title'>{linkTitle}</p>
                        <Link to={linkAddress} className='loginregister__link'>{linkText}</Link>
                    </div>
                </div>
                <div className='loginregister__space_footer' />
            </footer>
        </div>

    );
}

export default LoginRegisterForm