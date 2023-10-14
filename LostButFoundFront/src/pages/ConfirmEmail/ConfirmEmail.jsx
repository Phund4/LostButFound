import MyForm from "../../components/MyForm/MyForm";
import MyInput from "../../components/MyInput/MyInput";
import MyFormButton from "../../components/MyFormButton/MyFormButton";
import MyTimer from "../../components/MyTimer/MyTimer"

function ConfirmEmail() {

    

    async function sendCode() {

    }

    const confirmCodeInput = <MyInput
        type="password"
        placeholder="Enter Code"
        id="confirm-email-input-code"
        messageId="confirm-email-input-code-message-error"
        key="confirm-email-input-code"
        isValidInput={value => value.length >= 6}
        messageError="Invalid Code"
    />

    const confirmEmail = <MyFormButton
        buttonText="Send Code"
        handleClick={sendCode}
        key="sendCodeButton"
    />

    const confirmEmailTimer = <MyTimer
        duration={120}
        key="confirm-email-timer"
    />

    return (
        <>
            <MyForm
                headerText="Confirm Email"
                childrens={[confirmCodeInput, confirmEmail, confirmEmailTimer]}
            />
        </>
    )
}

export default ConfirmEmail;