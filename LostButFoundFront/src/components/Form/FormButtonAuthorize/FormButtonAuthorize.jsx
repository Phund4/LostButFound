/* eslint-disable react/prop-types */
import "./formbutton-authorize.sass";

function FormButtonAuthorize(props) {
    return (
        <div className="form__button">
            <button
                type={props.type}
                className="form__submit"
                onClick={props?.handleSubmit}
            >
                {props?.buttonText}
            </button>
        </div>
    )
}

export default FormButtonAuthorize;