import "../../components/MyForm/MyForm"
import MyForm from "../../components/MyForm/MyForm";
import MyInput from "../../components/MyInput/MyInput";
import MyFormButton from "../../components/MyFormButton/MyFormButton";

function validFullname(name, input, messageError) {
    if (name.length <= 6) {
        input.classList.add('uncorrect-input');
        messageError.classList.remove('hide');
        messageError.textContent = "The name must be at least 6 characters long";
        return false;
    } 
    return true;
}

function validLogin(login, input, messageError) {
    if (login.length <= 6) {
        input.classList.add('uncorrect-input');
        messageError.classList.remove('hide');
        messageError.textContent = "The login must be at least 6 characters long";
        return false;
    } 
    return true;
}

function validEmail(email, input, messageError) {
    let re = /^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i;
    let valid = re.test(email);
    if (!valid) {
        input.classList.add('uncorrect-input');
        messageError.classList.remove('hide');
        messageError.textContent = "Uncorrect email";
        return false;
    } 
    return true;
}

function validPassword(password, input, messageError) {
    if (password.length < 6) {
        input.classList.add('uncorrect-input');
        messageError.classList.remove('hide');
        messageError.textContent = "The password must be at least 6 characters long";
        return false;
    } 
    return true;
}

function validRepeatPassword(repeatPassword, password, input, messageError) {
    if (password != repeatPassword) {
        input.classList.add('uncorrect-input');
        messageError.classList.remove('hide');
        messageError.textContent = "Еhe entered password is not identical";
        return false;
    } 
    return true;
}

function checkFields(fullname, login, email, password, repeatPassword) {
    let messageErrorFullname = document.getElementById('registration-input-fullname-message-error');
    let messageErrorLogin = document.getElementById('registration-input-login-message-error');
    let messageErrorEmail = document.getElementById('registration-input-email-message-error');
    let messageErrorPassword = document.getElementById('registration-input-password-message-error');
    let messageErrorRepeatPassword = document.getElementById('registration-input-repeat-password-message-error');
    if (!validFullname(fullname.value, fullname, messageErrorFullname) ||
        !validLogin(login.value, login, messageErrorLogin) || 
        !validEmail(email.value, email, messageErrorEmail) ||
        !validPassword(password.value, password, messageErrorPassword) ||
        !validRepeatPassword(repeatPassword.value, password.value, repeatPassword, messageErrorRepeatPassword)) {
        return false;
    }
    return true;
}

function Registration() {
    async function sendRegistrationData() {
        let fullname = document.getElementById('registration-input-fullname');
        let login = document.getElementById('registration-input-login');
        let email = document.getElementById('registration-input-email');
        let password = document.getElementById('registration-input-password');
        let repeatPassword = document.getElementById('registration-input-repeat-password');
        if (!checkFields(fullname, login, email, password, repeatPassword)) return;
        try {
            const response = await fetch("https://192.168.31.71:7110/api/User/Register", {
                method: "POST",
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    name: fullname.value,
                    login: login.value,
                    email: email.value,
                    password: password.value
                })});
            console.log(response);
            document.location.href = "/login";
        } catch (error) {
            console.error(error);
        }
    }

    const fullnameInput = <MyInput
        type="text"
        placeholder="Enter FullName"
        id="registration-input-fullname"
        messageId="registration-input-fullname-message-error"
        key="registration-input-fullname"
    />

    const loginInput = <MyInput
        type="text"
        placeholder="Enter Login"
        id="registration-input-login"
        messageId="registration-input-login-message-error"
        key="registration-input-login"
    />

    const emailInput = <MyInput
        type="email"
        placeholder="Enter Email"
        id="registration-input-email"
        messageId="registration-input-email-message-error"
        key="registration-input-email"
    />

    const passwordInput = <MyInput
        type="password"
        placeholder="Enter Password"
        id="registration-input-password"
        messageId="registration-input-password-message-error"
        key="registration-input-password"
    />

    const repeatPasswordInput = <MyInput
        type="password"
        placeholder="Repeat Password"
        id="registration-input-repeat-password"
        messageId="registration-input-repeat-password-message-error"
        key="registration-input-repeat-password"
    />

    const regButton = <MyFormButton
        buttonText="Sign Up"
        handleClick={sendRegistrationData}
        key="signUpButton"
    />

    return (
        <>
            <MyForm
                headerText="Register Form"
                childrens={[fullnameInput, loginInput, emailInput, passwordInput, repeatPasswordInput, regButton]}
            />
        </>
    )
}

export default Registration