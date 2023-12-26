import { Link } from 'react-router-dom';
import './LoginRegisterForm.css';
import imgLogo from '../../images/logo.svg'

const LoginRegisterForm = ({ title, formName, buttonText, onSubmit, linkTitle, linkText, linkAddress, children }) => {
    return (
        <div className="loginregister" tabIndex="0">

            <div className='loginregister__space_top' />

            <div className="loginregister__container">

                <div className="loginregister__container_logo">
                    <img className="loginregister__logo" src={imgLogo} />
                    <h1 className="loginregister__title">{title}</h1>
                </div>

                <form name={formName} className="loginregister__form" onSubmit={onSubmit}>

                    <div className="loginregister__container_input">
                        {children}
                    </div>
                    <p className="loginregister__error" />

                    <div className='loginregister__space' />

                    <button aria-label={buttonText} className="loginregister__submit" type="submit">
                        {buttonText}
                    </button>
                </form>

                <div className="loginregister___container_link">
                    <p className='loginregister__link_title'>{linkTitle}</p>
                    <Link to={linkAddress} className='loginregister__link'>{linkText}</Link>
                </div>

            </div>

            <div className='loginregister__space_bottom' />
        </div>

    );
}

export default LoginRegisterForm