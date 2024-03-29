import { Link } from 'react-router-dom';
import './LoginRegisterForm.css';
import Logo from '../Logo/Logo'

const LoginRegisterForm = ({ title, formName, buttonText, onSubmit, linkTitle, linkText, linkAddress, children, submitSpaceClass }) => {
    return (
        <section className="loginregister" tabIndex="0">
            <section className="loginregister__wrapper">
                <header className='loginregister__header'>
                    <Logo />
                </header>

                <section className="loginregister__main">
                    <h1 className="loginregister__title">{title}</h1>
                    <form name={formName} id={formName} className="loginregister__form" onSubmit={onSubmit}>
                        <fieldset className="loginregister__container-inputs">
                            {children}
                        </fieldset>
                        <span className="loginregister__error">
                            Что-то пошло не так...
                        </span>

                        <div className={submitSpaceClass} />

                        <div className="loginregister__container-submit">
                            <button aria-label={buttonText} form={formName} className="loginregister__button-submit button-common" type="submit">
                                {buttonText}
                            </button>
                            <div className="loginregister__container-link">
                                <p className='loginregister__label-link'>{linkTitle}</p>
                                <Link to={linkAddress} className='loginregister__link link-common'>{linkText}</Link>
                            </div>
                        </div>
                    </form>
                </section>
            </section>
        </section>
    );
}

export default LoginRegisterForm