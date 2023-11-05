import "../../components/MyForm/MyForm"
import MyForm from "../../components/MyForm/MyForm";
import MyInput from "../../components/MyInput/MyInput";
import MyFormButton from "../../components/MyFormButton/MyFormButton";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function Login() {
    const navigate = useNavigate();
    let loginOrEmail = useRef(null);
    let password = useRef(null);
    let errorMsg = useRef(null);
    const errors = {
        400: "Incorrect login or password",
        404: "Something went wrong...",
        500: "Server error"
    }

    async function sendLoginData() {
        let inputs = [loginOrEmail.current, password.current];
        for (let i=0; i<inputs.length; i++) {
            let el = inputs[i];
            if (el.classList.contains('incorrect-value') || el.value == "") return;
        }
        try {
            const response = await fetch("https://localhost:7110/api/User/Login", {
                method: "POST",
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    loginOrEmail: loginOrEmail.current.value,
                    Password: password.current.value
                }
            )});
            const status = response.status;
            if (errors[status]) {
                errorMsg.current.textContent = errors[status];
            } else {
                navigate("/myprofile");
            }
        } catch (error) {
            errorMsg.current.textContent = errors[500];
        }
    }

    const loginOrEmailInput = <MyInput
        type="text"
        placeholder="Enter Login or Email"
        id="login-input-loginoremail"
        messageId="login-input-loginoremail-message-error"
        key="login-input-loginoremail"
        isValidInput={() => true}
        messageError="Incorrect field"
        refInput={loginOrEmail}
    />

    const passwordInput = <MyInput
        type="password"
        placeholder="Enter Password"
        id="login-input-password"
        messageId="login-input-password-message-error"
        key="login-input-password"
        isValidInput={value => value.length >= 6}
        messageError="The password must be at least 6 characters long"
        refInput={password}
    />

    const messageError = <p
        id="login-status-error"
        key="login-status-error"
        ref={errorMsg}
    />

    const buttonLink = <p
        className="link-to-registration"
        onClick={() => navigate("/registration")}
        key="link-to-registration"
    >
        I am not registered
    </p>

    const regButton = <MyFormButton
        buttonText="Login Up"
        handleClick={sendLoginData}
        key="LoginUpButton"
    />

    return (
        <>
            <MyForm
                headerText="Login Form"
                childrens={[loginOrEmailInput, passwordInput, messageError, buttonLink, regButton]}
            />
        </>
    )
}

export default Login;