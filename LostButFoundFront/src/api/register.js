import axios from "axios";

const errors = {
    400: "This user already exists",
    404: "Something went wrong...",
    500: "Internal server error",
};

async function sendRegistrationData(fullname, login, email, password) {
    try {
        const url = "https://localhost:7110/api/User/Register";
        let res = "";
        await axios.post(url,
                {
                    FullName: fullname,
                    Login: login,
                    Email: email,
                    Password: password,
                },
                {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                }
            )
            .then(() => {
                res = "Done";
            })
            .catch((err) => {
                throw err;
            });
        return res;
    } catch (err) {
        if (err.code == "ERR_NETWORK") return errors[500];
        else return errors[400];
    }
}

export default sendRegistrationData;
