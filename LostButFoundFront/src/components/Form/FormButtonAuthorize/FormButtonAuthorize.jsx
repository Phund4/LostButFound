/* eslint-disable react/prop-types */
import "./formbutton-authorize.sass";

function FormButtonAuthorize({ type = "", handleSubmit, buttonText = "" }) {
    return (
        <div className="form__button">
            <button type={type} className="form__submit" onClick={handleSubmit}>
                {buttonText}
            </button>
        </div>
    );
}

export default FormButtonAuthorize;
