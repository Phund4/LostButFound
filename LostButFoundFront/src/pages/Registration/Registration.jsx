import "../../components/MyForm/MyForm"
import MyForm from "../../components/MyForm/MyForm";
import MyInput from "../../components/MyInput/MyInput";
import MyFormButton from "../../components/MyFormButton/MyFormButton";

function Registration() {
    async function sendRegistrationData() {
        let name = document.getElementById('registration-input-name').value;
        let email = document.getElementById('registration-input-email').value;
        try {
            const response = await fetch("https://192.168.31.71:7110/api/User/Register", {
                method: "POST",
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email
                })});
            console.log(response);
            document.location.href = "/login";
        } catch (error) {
            console.error(error);
        }
    }

    const nameInput = <MyInput
        type="text"
        placeholder="Enter Name"
        id="registration-input-name"
        key="registration-input-name"
    />

    const surnameInput = <MyInput
        type="text"
        placeholder="Enter Surname"
        id="registration-input-surname"
        key="registration-input-surname"
    />

    const emailInput = <MyInput
        type="email"
        placeholder="Enter Email"
        id="registration-input-email"
        key="registration-input-email"
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
                childrens={[nameInput, surnameInput, emailInput, regButton]}
            />
        </>
    )
}

export default Registration