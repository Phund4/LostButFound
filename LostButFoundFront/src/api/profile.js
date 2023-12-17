export async function getUserData() {
    try {
        const token = localStorage.getItem('token');
        // if (!!token == false) {
        //     document.location.href = '/login'
        // }
        const response = await fetch("https://localhost:7110/api/User/GetCurrentUser", {
            method: "GET",
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${token}`
            }
        })
        return response.json();
    } catch (error) {
        return null;
    }
}

export async function getAddress(address) {
    const url = `https://localhost:7110/api/Thing/EditData?data=${address}`;
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            }
        })
        return await response.json();
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
    const token = localStorage.getItem('token');
    const url = `https://localhost:7110/api/Thing/AddPost?Name` +
        `=${values.title}&Description=${values.description}&City=${values.tags.city}` +
        `&District=${values.tags.district}&Street=${values.tags.street}&Metro=${values.tags.metro}`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; multipart/form-data; boundary=---------",
            "Authorization": `Bearer ${token}`
        }
    })

    return await response.json();
}

export async function getPosts() {
    try {
        const url = 'https://localhost:7110/api/Thing/GetPosts';
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json',
            }
        })
        return response.json();
    } catch (e) {
        return null
    }
    
}