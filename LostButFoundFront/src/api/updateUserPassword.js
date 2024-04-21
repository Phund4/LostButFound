import axios from "axios";

const errors = {
    400: "404 Error",
    404: "Something went wrong...",
    500: "Internal server error",
};

export async function updatePassword(password) {
    try {
        const id = document.location.href.split('?')[1].split("=")[1];
        const url = `https://localhost:7110/api/User/UpdatePassword?userId=${id}&newPassword=${password}`;
        let res = "";
        await axios
            .post(
                url,
                {
                    Password: password,
                    Id: id
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
        else return errors[404];
    }
}

export async function resendLetter() {
    
}

