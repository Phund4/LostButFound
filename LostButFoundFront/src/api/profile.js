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
    const formData = new FormData();
    formData.append('file', values.file);
    const options = {
        method: 'POST',
        body: formData,
    };
    await fetch("https://localhost:7110/api/Thing/AddImg", options);

    const url = "https://localhost:7110/api/Thing/AddPost";
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: {
            Name: values.title,
            Description: values.description,
            City: values.tags.city,
            District: values.tags.district,
            Street: values.tags.street,
            Metro: values.tags.metro
        }
    })
    
    return await response.json();
}