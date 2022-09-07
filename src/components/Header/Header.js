import './Header.scss';

function Header(){
    return(
        <header>
            <div id="logo" onClick={() => {window.location.reload()}}>BGCR</div>
            <button id="login-button">
                로그인
            </button>
        </header>
    );
};

export default Header;