export async function getUserData() {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch("https://192.168.31.71:7110/api/User/GetCurrentUser", {
            method: "GET",
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${token}`
            }
        })
        return response.json();
    } catch (error) {
        console.log(error);
        return null;
    }
}