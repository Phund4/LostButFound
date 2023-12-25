import axios from "axios";

const errors = {
    400: "This user already exists",
    404: "Something went wrong...",
    500: "Server error"
}

async function sendRegistrationData(fullname, login, email, password) {
    try {
        const url = "https://localhost:7110/api/User/Register";
        let res = null;
        axios.post(url, {
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
            res = 'Done';
        }).catch(err => {
            console.log(err);
            res = errors[400];
        })
        return res;
    } catch (error) {
        return errors[500];
    }
}

export default sendRegistrationData;