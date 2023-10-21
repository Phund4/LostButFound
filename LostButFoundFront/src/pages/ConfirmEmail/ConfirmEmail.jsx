import MyForm from "../../components/MyForm/MyForm";
import MyInput from "../../components/MyInput/MyInput";
import MyFormButton from "../../components/MyFormButton/MyFormButton";
import MyTimer from "../../components/MyTimer/MyTimer";
import { useRef } from 'react'
import { useNavigate } from "react-router-dom";

function ConfirmEmail() {
    const navigate = useNavigate();
    let code = useRef(null);
    let errorMsg = useRef(null);
    const errors = {
        400: "Incorrect Code",
        404: "Something went wrong...",
        500: "Server error"
    }

    async function sendCode() {
        try {
            const response = await fetch(`https://localhost:7110//api/User/ConfirmRegister?code=${code};`, {
                method: "POST",
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    Code: code.current.value
                }
            )});
            const status = response.status;
            if (errors[status]) {
                errorMsg.current.textContent = errors[status];
            } else {
                navigate("/login");
            }
        } catch (error) {
            errorMsg.current.textContent = errors[500];
        }
    }

    const confirmCodeInput = <MyInput
        type="password"
        placeholder="Enter Code"
        id="confirm-email-input-code"
        messageId="confirm-email-input-code-message-error"
        key="confirm-email-input-code"
        isValidInput={() => true}
        messageError="Invalid Code"
        refInput={code}
    />

    const confirmEmail = <MyFormButton
        buttonText="Send Code"
        handleClick={sendCode}
        key="sendCodeButton"
    />

    const messageError = <p
        id="confirmemail-status-error"
        key="confirmemail-status-error"
        ref={errorMsg}
    />

    const confirmEmailTimer = <MyTimer
        duration={5}
        clickHandler={sendCode}
        key="confirm-email-timer"
    />

    return (
        <>
            <MyForm
                headerText="Confirm Email"
                childrens={[confirmCodeInput, messageError, confirmEmail, confirmEmailTimer]}
            />
        </>
    )
}

export default ConfirmEmail;