import axios from 'axios';

export async function getUserData() {
    try {
        const token = localStorage.getItem('token');
        let res = null;
        // if (!!token == false) {
        //     document.location.href = '/login'
        // }
        axios.get("https://localhost:7110/api/User/GetCurrentUser", {
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
    } catch (error) {
        return null;
    }
}

export async function updateLogin(login) {
    try {
        const token = localStorage.getItem('token');
        let res = null;
        const url = `https://localhost:7110/api/User/UpdateLogin?newLogin=${login}`;
        axios.post(url, {}, {
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
        axios.post(url, {}, {
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            }
        }).then(response => {
            res = response.data;
        }).catch(err => {
            console.log(err);
        })
        return res;
    } catch (error) {
        console.log(error);
    }
}

export async function addPost(values) {
    console.log(values);
    // let canvas = document.getElementById('constructor-canvas');
    // let dataURL = canvas.toDataURL();
    // let formdata = new FormData();
    // formdata.append('file', values.file);
    try {
        const token = localStorage.getItem('token');
        const url = `https://localhost:7110/api/Thing/AddPost?Name` +
            `=${values.title}&Description=${values.description}&City=${values.tags.city}` +
            `&District=${values.tags.district}&Street=${values.tags.street}&Metro=${values.tags.metro}`;
        let res = null;
        axios.post(url, {}, {
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
        axios.get(url, {
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json',
            }
        }).then(response => {
            res = response.data;
        }).catch(err => {
            console.log(err);
        })
        return res;
    } catch (e) {
        return null;
    }

}