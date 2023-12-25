import axios from 'axios'

const errors = {
    400: "Incorrect Code",
    404: "Something went wrong...",
    500: "Server error"
}

async function sendCode(code) {
    try {
        const url = `https://localhost:7110/api/User/ConfirmRegister?code=${code}`;
        let res = null;
        axios.post(url, {}, {
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            }
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

export default sendCode;
