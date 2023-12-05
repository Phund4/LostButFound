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
    const url = "https://localhost:7110/api/Thing/EditData";
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                data: address
            })
        })
        return response;
    } catch (error) {
        console.log(error);
    }
}