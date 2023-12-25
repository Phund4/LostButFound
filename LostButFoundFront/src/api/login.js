import axios from 'axios'

const errors = {
    400: "Incorrect login or password",
    404: "Something went wrong...",
    500: "Server error"
}

async function sendLoginData(loginOrEmail, password) {
    try {
        const url = "https://localhost:7110/api/User/Login"
        let res = null;
        axios.post(url,{
            loginOrEmail: loginOrEmail,
            Password: password
        }, {
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            }
        }).then(response => {
            localStorage.setItem('token', response.data.token);
            res = 'Done';
        }).catch(() => {
            res = errors[400];
        })
        return res;
    } catch (error) {
        return errors[500];
    }
}

export default sendLoginData;