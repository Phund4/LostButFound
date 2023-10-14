import "../../components/MyForm/MyForm"
import MyForm from "../../components/MyForm/MyForm";
import MyInput from "../../components/MyInput/MyInput";
import MyFormButton from "../../components/MyFormButton/MyFormButton";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function Registration() {
    const navigate = useNavigate();
    let fullname = useRef(null);
    let login = useRef(null);
    let email = useRef(null);
    let password = useRef(null);
    let repeatPassword = useRef(null);
    let errorMsg = useRef(null);
    const errors = {
        400: "This user already exists",
        404: "Something went wrong...",
        500: "Server error"
    }

    async function sendRegistrationData() {
        let inputs = [fullname.current, login.current, email.current, password.current, repeatPassword.current];
        for (let i=0; i<inputs.length; i++) {
            let el = inputs[i];
            if (el.classList.contains('incorrect-value') || el.value == "") return;
        }
        try {
            const response = await fetch("https://localhost:7110/api/User/Register", {
                method: "POST",
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    FullName: fullname.current.value,
                    Login: login.current.value,
                    Email: email.current.value,
                    Password: password.current.value
                }
            )});
            const status = response.status;
            if (errors[status]) {
                errorMsg.current.value = errors[status];
            } else {
                navigate("/confirmemail");
            }
        } catch (error) {
            errorMsg.current.textContent = errors[500];
        }
    }

    const fullnameInput = <MyInput
        type="text"
        placeholder="Enter FullName"
        id="registration-input-fullname"
        messageId="registration-input-fullname-message-error"
        key="registration-input-fullname"
        isValidInput={value => value.length >= 6}
        messageError="The fullname must be at least 6 characters long"
        refInput={fullname}
    />

    const loginInput = <MyInput
        type="text"
        placeholder="Enter Login"
        id="registration-input-login"
        messageId="registration-input-login-message-error"
        key="registration-input-login"
        isValidInput={value => value.length >= 6}
        messageError="The login must be at least 6 characters long"
        refInput={login}
    />
    
    const emailInput = <MyInput
        type="email"
        placeholder="Enter Email"
        id="registration-input-email"
        messageId="registration-input-email-message-error"
        key="registration-input-email"
        isValidInput={(value) => {
            let re = /^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i;
            return re.test(value);
        }}
        messageError="Uncorrect email"
        refInput={email}
    />

    const passwordInput = <MyInput
        type="password"
        placeholder="Enter Password"
        id="registration-input-password"
        messageId="registration-input-password-message-error"
        key="registration-input-password"
        isValidInput={value => value.length >= 6}
        messageError="The password must be at least 6 characters long"
        refInput={password}
    />

    const repeatPasswordInput = <MyInput
        type="password"
        placeholder="Repeat Password"
        id="registration-input-repeat-password"
        messageId="registration-input-repeat-password-message-error"
        key="registration-input-repeat-password"
        isValidInput={(value) => {
            let password = document.getElementById('registration-input-password').value;
            return password == value;
        }}
        messageError="The entered password is not identical"
        refInput={repeatPassword}
    />

    const messageError = <p
        id="registration-status-error"
        key="registration-status-error"
        ref={errorMsg}
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
                childrens={[fullnameInput, loginInput, emailInput, passwordInput, repeatPasswordInput, messageError, regButton]}
            />
        </>
    )
}

export default Registration;