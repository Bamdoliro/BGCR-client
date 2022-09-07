<<<<<<< HEAD
import { useEffect, useState } from 'react';
=======
import { useState } from 'react';
>>>>>>> 8ee0b0d38b385c5362e5ba79040bfb046c8a373c
import ModSwitch from './ModSwitch/ModSwitch';
import './TapBar.scss';

function TapBar(){
    const [radioValue, setRadioValue] = useState("1");
<<<<<<< HEAD
    const handleClickRadio = (e) => { setRadioValue(e.target.value); }
    useEffect(() => {
        console.log(radioValue)
    }, [radioValue])
=======
    const handleClickRadio = (e) => { console.log(e.target.value); setRadioValue(e.target.value); }
>>>>>>> 8ee0b0d38b385c5362e5ba79040bfb046c8a373c
    return(
        <div id="buttons">
            <div id="taps">
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