import "../../components/MyForm/MyForm"
import MyForm from "../../components/MyForm/MyForm";
import MyInput from "../../components/MyInput/MyInput";
import MyFormButton from "../../components/MyFormButton/MyFormButton";

function Registration() {
    async function sendRegistrationData() {
        let fullname = document.getElementById('registration-input-fullname').value;
        let login = document.getElementById('registration-input-login').value;
        let email = document.getElementById('registration-input-email').value;
        let password = document.getElementById('registration-input-password').value;
        let inputs = document.getElementsByClassName('form__input');
        for (let i=0; i<inputs.length; i++) {
            let el = inputs[i];
            if (el.classList.contains('empty-value')) return;
        }
        console.log('Done');
        try {
            const response = await fetch("https://localhost:7110/api/User/Register", {
                method: "POST",
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    FullName: fullname,
                    Login: login,
                    Email: email,
                    Password: password
                })});
            console.log(response);
            document.location.href = "/confirmemail";
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
        isValidInput={value => value.length >= 6}
        messageError="The fullname must be at least 6 characters long"
    />

    const loginInput = <MyInput
        type="text"
        placeholder="Enter Login"
        id="registration-input-login"
        messageId="registration-input-login-message-error"
        key="registration-input-login"
        isValidInput={value => value.length >= 6}
        messageError="The login must be at least 6 characters long"
    />

    const emailInput = <MyInput
        type="email"
        placeholder="Enter Email"
        id="registration-input-email"
        messageId="registration-input-email-message-error"
        key="registration-input-email"
        isValidInput={(value) => {
            let re = /^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i;
            return  re.test(value);
        }}
        messageError="Uncorrect email"
    />

    const passwordInput = <MyInput
        type="password"
        placeholder="Enter Password"
        id="registration-input-password"
        messageId="registration-input-password-message-error"
        key="registration-input-password"
        isValidInput={value => value.length >= 6}
        messageError="The password must be at least 6 characters long"
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

export default Registration;