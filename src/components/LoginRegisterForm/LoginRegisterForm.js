import './LoginRegisterForm.css';
import imgLogo from '../../images/logo.svg'

const LoginRegisterForm = ({ title, formName, buttonText, onSubmit, linkTitle, linkText, children }) => {
    return (
        <div className="loginregister" tabIndex="0">
            <img className="loginregister__logo" src={imgLogo} />
            <h1 className="loginregister__title">{title}</h1>

            <form name={formName} className="loginregister__form" onSubmit={onSubmit}>

                {children}

                <button aria-label={buttonText} className="loginregister__submit" type="submit">
                    {buttonText}
                </button>
            </form>

            <div className="loginregister__error" />

            <div className="loginregister__link">
                <p className='loginregister__link_title'>{linkTitle}</p>
                <a href="/login">{linkText}</a>
            </div>

        </div>

    );
}

export default LoginRegisterForm