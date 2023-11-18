const errors = {
    400: "Incorrect login or password",
    404: "Something went wrong...",
    500: "Server error"
}

async function sendLoginData(loginOrEmail, password) {
    try {
        const response = await fetch("https://localhost:7110/api/User/Login", {
            method: "POST",
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                loginOrEmail: loginOrEmail,
                Password: password
            }
        )});
        const status = response.status;
        if (errors[status]) {
            return errors[status];
        } else {
            return 'Done'
        }
    } catch (error) {
        return errors[500];
    }
}

export default sendLoginData