/* eslint-disable react/prop-types */
import "./forminput-authorize.sass";
import isValid from "./helpers";

function FormInputAuthorize({
    messageId,
    type,
    name,
    placeholder,
    id,
    onChange,
    value,
    isValidInput,
    messageError,
}) {
    return (
        <div className="form__box">
            <p className="message-error hide" id={messageId}></p>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className="form__input incorrect-value"
                id={id}
                onBlur={() =>
                    isValid(messageId, id, isValidInput, messageError)
                }
                onChange={onChange}
                value={value}
            />
        </div>
    );
}

export default FormInputAuthorize;
