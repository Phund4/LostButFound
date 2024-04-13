import axios from 'axios'

const errors = {
    400: "Incorrect code",
    404: "Something went wrong...",
    500: "Internal Server error"
}

async function sendCode(code) {
    try {
        const url = `https://localhost:7110/api/User/ConfirmRegister?code=${code}`;
        let res = null;
        await axios.post(url, {}, {
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            }
        }).then(() => {
            res = 'Done';
        }).catch(err => {
            throw err
        })
        return res;
    } catch (err) {
        if (err.code == "ERR_NETWORK") return errors[500];
        else return errors[500];
    }
}

export default sendCode;
