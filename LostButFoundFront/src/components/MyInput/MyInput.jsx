/* eslint-disable react/prop-types */
import "./myinput.sass"

function MyInput(props) {
    function isValid() {
        let messageError = document.getElementById(props?.messageId);
        let input = document.getElementById(props?.id);
        if (!props.isValidInput(input?.value)) {
            input.classList.add('incorrect-input');
            messageError.classList.remove('hide');
            messageError.textContent = props?.messageError;
        } else {
            input.classList.remove('incorrect-input', 'incorrect-value');
            messageError.classList.add('hide');
            messageError.textContent = "";
        }
    }

    return (
        <div className="form__box">
            <p className="message-error hide" id={props?.messageId}></p>
            <input
                type={props?.type}
                placeholder={props?.placeholder}
                className="form__input incorrect-value"
                id={props?.id}
                onBlur={isValid}
                ref={props?.refInput}
            />
        </div>
    )
}

export default MyInput;