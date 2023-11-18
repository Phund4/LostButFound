const errors = {
    400: "Incorrect Code",
    404: "Something went wrong...",
    500: "Server error"
}

async function sendCode(code) {
    try {
        const response = await fetch(`https://192.168.31.71:7110/api/User/ConfirmRegister?code=${code}`, {
            method: "POST",
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            }
        });
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

export default sendCode;
