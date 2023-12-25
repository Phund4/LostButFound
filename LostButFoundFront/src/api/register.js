import axios from "axios";

const errors = {
    400: "This user already exists",
    404: "Something went wrong...",
    500: "Server error"
}

async function sendRegistrationData(fullname, login, email, password) {
    try {
        axios.post("https://localhost:7110/api/User/Register", {
            FullName: fullname,
            Login: login,
            Email: email,
            Password: password
        }, {
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            },
        }).then(() => {
            return 'Done';
        }).catch(err => {
            console.log(err);
            return errors[400];
        })
    } catch (error) {
        return errors[500];
    }
}

export default sendRegistrationData;