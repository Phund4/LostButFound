import "../../styles/registration/registration.sass"
function Registration() {
    async function sendRegistrationData() {
        let name = document.getElementById('registration-input-name').value;
        let email = document.getElementById('registration-input-email').value;
        try {
            const response = await fetch("https://localhost:7110/api/User/Register", {
                method: "POST",
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email
                }),
            }
            );

            const result = await response.json();
            console.log("Success:", result);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <>
            <div className="form">
                <form action="/" className="form__content">
                    <h1>Register Form</h1>
                    <div className="form__box">
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="form__input"
                            id="registration-input-name"
                        />
                    </div>
                    <div className="form__box">
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="form__input"
                            id="registration-input-email"
                        />
                    </div>
                    <div className="form__button">
                        <button
                            type="button"
                            className="form__submit"
                            onClick={sendRegistrationData}
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Registration