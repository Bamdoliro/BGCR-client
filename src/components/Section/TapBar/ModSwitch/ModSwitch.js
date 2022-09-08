import { useContext } from 'react';
import { ThemeContext } from '../../../../context/ThemeContext';
import './ModSwitch.scss';

function ModSwitch() {
    const { setIsDark } = useContext(ThemeContext);

    return (
        <div className="mod-switch">
            <input type="checkbox" id="switch" onClick={() => setIsDark(current => !current)} />
                <label htmlFor="switch" className="switch_label">
                    <span className="onf_btn"></span>
                </label>
        </div>
    );
}

export default ModSwitch;