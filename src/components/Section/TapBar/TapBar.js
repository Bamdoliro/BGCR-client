import ModSwitch from './ModSwitch/ModSwitch';
import './TapBar.scss';

function TapBar(){
    return(
        <div id="buttons">
            <div id="taps">
                <button>1학년</button>
                <button>2학년</button>
                <button>3학년</button>
            </div>
            <ModSwitch />
        </div>
    )
}

export default TapBar;