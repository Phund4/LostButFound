import axios from 'axios'

const errors = {
    400: "Incorrect login or password",
    404: "Something went wrong...",
    500: "Internal server error"
}

async function sendLoginData(loginOrEmail, password) {
    try {
        const url = "https://localhost:7110/api/User/Login"
        let res = null;
        await axios.post(url,{
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
        }).catch((err) => {
            throw err
        })
        return res;
    } catch (err) {
        if (err.code == "ERR_NETWORK") return errors[500];
        else return errors[400];
    }
}

export default sendLoginData;