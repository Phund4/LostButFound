/* eslint-disable react/prop-types */
import "./myformbutton.sass";

function MyFormButton(props) {
    return (
        <div className="form__button">
            <button
                type="button"
                className="form__submit"
                onClick={props?.handleClick}
            >
                {props?.buttonText}
            </button>
        </div>
    )
}

export default MyFormButton;