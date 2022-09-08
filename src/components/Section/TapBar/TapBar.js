import { useContext, useState } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import ModSwitch from './ModSwitch/ModSwitch';
import './TapBar.scss';

function TapBar(){
    const [radioValue, setRadioValue] = useState("1");
    const handleClickRadio = (e) => { console.log(e.target.value); setRadioValue(e.target.value); }

    const { isDark } = useContext(ThemeContext);

    return(
        <div id="buttons">
            <div className={"taps".concat(isDark ? " taps-dark" : "")}>
                <input type="radio" value="1" name="grade" id="all-grade" onChange={handleClickRadio} checked={radioValue === "1"} />
                <label htmlFor="all-grade">전체</label>
                <input type="radio" value="2" name="grade" id="first-grade" onChange={handleClickRadio} checked={radioValue === "2"} />
                <label htmlFor="first-grade">1학년</label>
                <input type="radio" value="3" name="grade" id="second-grade" onChange={handleClickRadio} checked={radioValue === "3"} />
                <label htmlFor="second-grade">2학년</label>
            </div>
            <ModSwitch />
        </div>
    )
}

export default TapBar;