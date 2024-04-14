function isValid(messageId, id, isValidInput, textMessageError) {
    let messageError = document.getElementById(messageId);
    let input = document.getElementById(id);
    if (!isValidInput(input?.value)) {
        input.classList.add('incorrect-input');
        messageError.classList.remove('hide');
        messageError.textContent = textMessageError;
    } else {
        input.classList.remove('incorrect-input', 'incorrect-value');
        messageError.classList.add('hide');
        messageError.textContent = "";
    }
}

export default isValid;