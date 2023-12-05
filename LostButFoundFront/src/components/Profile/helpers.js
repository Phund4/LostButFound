import { getAddress } from "../../api/profile";
export function getTags(data) {
    getAddress(data.address)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error)
        })
}