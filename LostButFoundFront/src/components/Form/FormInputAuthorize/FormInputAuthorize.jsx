/* eslint-disable react/prop-types */
import "./forminput-authorize.sass"
import isValid from "./helpers";

function FormInputAuthorize(props) {
    return (
        <div className="form__box">
            <p className="message-error hide" id={props?.messageId}></p>
            <input
                type={props?.type}
                name={props.name}
                placeholder={props?.placeholder}
                className="form__input incorrect-value"
                id={props?.id}
                onBlur={() => isValid(props)}
                onChange={props.onChange}
                value={props.value}
            />
        </div>
    )
}

export default FormInputAuthorize;