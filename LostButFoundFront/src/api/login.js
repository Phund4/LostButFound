import axios from 'axios'

const errors = {
    400: "Incorrect login or password",
    404: "Something went wrong...",
    500: "Server error"
}

async function sendLoginData(loginOrEmail, password) {
    try {
        axios.post("https://localhost:7110/api/User/Login",{
            loginOrEmail: loginOrEmail,
            Password: password
        }, {
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            }
        }).then(response => {
            localStorage.setItem('token', response.data.token);
            return 'Done';
        }).catch(() => {
            return errors[400];
        })
    } catch (error) {
        console.log(error);
        return errors[500];
    }
}

export default sendLoginData;