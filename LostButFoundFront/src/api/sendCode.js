import axios from 'axios'

const errors = {
    400: "Incorrect Code",
    404: "Something went wrong...",
    500: "Server error"
}

async function sendCode(code) {
    try {
        axios.post(`https://localhost:7110/api/User/ConfirmRegister?code=${code}`, {}, {
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            }
        }).then(() => {
            return 'Done'
        }).catch(err => {
            console.log(err);
            return errors[400];
        })
    } catch (error) {
        return errors[500];
    }
}

export default sendCode;
