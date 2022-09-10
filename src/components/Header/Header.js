import {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';
import './Header.scss';

function Header() {
    const {isDark} = useContext(ThemeContext);

    return (
        <header className={isDark ? 'header-dark' : null}>
            <img id="logo" onClick={() => window.location.reload()}
                 src={`./images/logo-${isDark === true ? "white" : "black"}.svg`} alt="logo"/>
            <button id="login-button">
                로그인
            </button>
        </header>
    );
};

export default Header;
