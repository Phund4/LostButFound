import axios from 'axios';

const errors = {
    400: "This user already exists",
    404: "Something went wrong...",
    500: "Internal server error",
};

export async function getUserData() {
    try {
        const token = localStorage.getItem('token');
        let res;
        await axios.get("https://localhost:7110/api/User/GetCurrentUser", {
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${token}`
            }
        }).then(response => {
            res = response.data;
        }).catch(err => {
            throw err
        })
        return res;
    } catch (err) {
        if (err.code == "ERR_NETWORK") return errors[500]
        else return errors[404];
    }
}

export async function updateLogin(login) {
    try {
        const token = localStorage.getItem('token');
        let res = null;
        const url = `https://localhost:7110/api/User/UpdateLogin?newLogin=${login}`;
        await axios.post(url, {}, {
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${token}`
            }
        }).then(response => {
            res = response.data;
        }).catch(err => {
            console.log(err);
        })
        return res;
    } catch (err) {
        return null;
    }
}

export async function getAddress(address) {
    try {
        const url = `https://localhost:7110/api/Thing/EditData?data=${address}`;
        let res = null;
        await axios.post(url, {
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            }
        }).then(response => {
            res = response.data;
        }).catch(err => {
            throw err;
        })
        return res;
    } catch (error) {
        console.log(error)
        return null;
    }
}

export async function addPost(values) {
    console.log(values);
    let canvas = document.getElementById('constructor-canvas');
    let dataURL = canvas.toDataURL();
    console.log(dataURL)
    let formdata = new FormData();
    formdata.append('file', values.file);
    try {
        const token = localStorage.getItem('token');
        const url = `https://localhost:7110/api/Thing/AddPost?Name` +
            `=${values.title}&Description=${values.description}&City=${values.tags.city}` +
            `&District=${values.tags.district}&Street=${values.tags.street}&Metro=${values.tags.metro}`;
        let res = null;
        await axios.post(url, {}, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; multipart/form-data; boundary=---------",
                "Authorization": `Bearer ${token}`
            }
        }).then(response => {
            res = response.data;
        }).catch(err => {
            console.log(err);
        })
        return res;
    } catch (err) {
        return null;
    }
}

export async function getPosts() {
    try {
        const url = 'https://localhost:7110/api/Thing/GetPosts';
        let res = null;
        await axios.get(url, {
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json',
            }
        }).then(response => {
            res = response.data;
        }).catch(err => {
            throw err;
        })
        return res;
    } catch (err) {
        if (err.code == "ERR_NETWORK") return errors[500]
        else return errors[404];
    }
}

export async function getUserPosts() {
    try {
        const url = `https://localhost:7110/api/Thing/GetUserPosts`;
        const token = localStorage.getItem('token');
        let res = null;
        await axios.get(url, {
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${token}`
            }
        }).then(response => {
            res = response.data;
            console.log(response)
        }).catch(err => {
            throw err
        })
        return res;
    } catch (err) {
        console.log(err);
        return [];
        // if (err.code == "ERR_NETWORK") return errors[500]
        // else return errors[400];
    }
}

export async function deletePost(title) {
    try {
        const url = `https://localhost:7110/api/Thing/DeleteThing?title=${title}`;
        const token = localStorage.getItem('token');
        let res = null;
        await axios.post(url, {}, {
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${token}`
            }
        }).then(response => {
            res = response.data;
        }).catch(err => {
            throw err;
        })
        return res;
    } catch (err) {
        if (err.code == "ERR_NETWORK") return errors[500]
        else return errors[404];
    }
}