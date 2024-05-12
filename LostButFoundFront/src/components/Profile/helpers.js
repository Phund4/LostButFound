import { getAddress, updateLogin } from "../../api/profile";
export function getTags(formik, address) {
    getAddress(address)
        .then((result) => {
            console.log(result);
            formik.setFieldValue("tags", {
                city: result.region,
                district: result.district,
                street: result.street,
                metro: result.metro,
            });
            document
                .querySelector(".profile-constructor-tags")
                .classList.remove("hide");
            document
                .querySelector(".profile-constructor-address")
                .classList.add("hide");
            document
                .querySelector(".constructor-button-location")
                .classList.add("hide");
            document
                .querySelector(".constructor-button-retry")
                .classList.remove("hide");
        })
        .catch((error) => {
            console.log(error);
        });
}

export function hideTags() {
    document
        .querySelector(".profile-constructor-tags")
        .classList.add("hide");
    document
        .querySelector(".profile-constructor-address")
        .classList.remove("hide");
    document
        .querySelector(".constructor-button-location")
        .classList.remove("hide");
    document
        .querySelector(".constructor-button-retry")
        .classList.add("hide");
}

export function handleFiles(e) {
    var ctx = document.getElementById("constructor-canvas").getContext("2d");
    var img = new Image();
    img.src = URL.createObjectURL(e.target.files[0]);
    img.onload = function () {
        ctx.drawImage(
            img,
            0,
            0,
            img.width > img.height ? 400 : 300,
            img.height > img.wigth ? 400 : 300
        );
    };
}

export function updateData(id) {
    let p = document.getElementById(id);
    let editElement = id.split("-")[0];
    p.setAttribute("contenteditable", "true");
    document.addEventListener("keydown", function (event) {
        if (event.code == "Enter") {
            switch (editElement) {
                case "Login":
                    updateLogin(p.textContent).then((result) => {
                        localStorage.setItem("token", result);
                    });
            }
            p.setAttribute("contenteditable", "false");
        }
    });
}
