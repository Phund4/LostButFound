const errors = {
    400: "This user already exists",
    404: "Something went wrong...",
    500: "Server error"
}

async function sendRegistrationData(fullname, login, email, password) {
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

export default sendRegistrationData;