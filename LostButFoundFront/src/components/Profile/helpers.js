import { getAddress } from "../../api/profile";
export function getTags(data) {
    getAddress(data.address)
        .then((result) => {
            console.log(result);
            const tags = result.json();
            console.log(result);
            data.city = tags.city;
            data.district = tags.district;
            data.street = tags.street;
            data.metro = tags.metro;
            document.querySelector(".profile-constructor-address").classList.add('hide');
            document.querySelector(".profile-constructor-tags").classList.remove('hide');
        })
        .catch((error) => {
            console.log(error)
        })
}