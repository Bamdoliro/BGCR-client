import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './Header.scss';

function Header(){
    const { isDark } = useContext(ThemeContext);

    return(
        <header className={isDark ? 'header-dark' : null}>
            <div id="logo" onClick={() => {window.location.reload()}}>BGCR</div>
            <button id="login-button">
                로그인
            </button>
        </header>
    );
};

export default Header;