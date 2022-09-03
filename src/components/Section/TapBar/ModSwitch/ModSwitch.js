import './ModSwitch.scss';

function ModSwitch() {
    return (
        <div className="mod-switch">
            <input type="checkbox" id="switch" />
                <label htmlFor="switch" className="switch_label">
                    <span className="onf_btn"></span>
                </label>
        </div>
    );
}

export default ModSwitch;