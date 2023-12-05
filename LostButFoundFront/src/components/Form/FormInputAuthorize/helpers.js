function isValid(props) {
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

export default isValid;