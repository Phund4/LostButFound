import { getAddress } from "../../api/profile";
export function getTags(data) {
    getAddress(data.address)
        .then((result) => {
            console.log(result);
            data.region = result.city;
            data.district = result.district;
            data.street = result.street;
            data.metro = result.metro;
            document.querySelector(".profile-constructor-address").classList.add('hide');
            document.querySelector(".profile-constructor-tags").classList.remove('hide');
        })
        .catch((error) => {
            console.log(error)
        })
}