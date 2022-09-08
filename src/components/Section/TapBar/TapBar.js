import { useContext, useState } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import { TabContext } from '../../../context/TabContext';
import ModSwitch from './ModSwitch/ModSwitch';
import './TapBar.scss';

function TapBar(){    
    const handleClickRadio = (e) => { console.log(e.target.value); setRadioValue(e.target.value); }

    const { isDark } = useContext(ThemeContext);
    const { radioValue, setRadioValue } = useContext(TabContext);

    return(
        <div id="buttons">
            <div className={"taps".concat(isDark ? " taps-dark" : "")}>
                <input type="radio" value="ALL" name="grade" id="all-grade" onChange={handleClickRadio} checked={radioValue === "ALL"} />
                <label htmlFor="all-grade">전체</label>
                <input type="radio" value="GRADE_ONE" name="grade" id="first-grade" onChange={handleClickRadio} checked={radioValue === "GRADE_ONE"} />
                <label htmlFor="first-grade">1학년</label>
                <input type="radio" value="GRADE_TWO" name="grade" id="second-grade" onChange={handleClickRadio} checked={radioValue === "GRADE_TWO"} />
                <label htmlFor="second-grade">2학년</label>
            </div>
            <ModSwitch />
        </div>
    )
}

export default TapBar;