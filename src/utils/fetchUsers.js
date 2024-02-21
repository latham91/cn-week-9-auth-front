export async function fetchUsers() {
    try {
        const response = await fetch("http://localhost:5001/users", {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:5001",
            },
            credentials: "include",
        });

        const data = await response.json();

        return data;
    } catch (error) {
        return error;
    }
}

export async function updateUser(id, credentials) {
    try {
        const response = await fetch(`http://localhost:5001/users/${id}`, {
            method: "PATCH",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:5001",
            },
            body: JSON.stringify(credentials),
            credentials: "include",
        });

        const data = await response.json();

        return data;
    } catch (error) {
        return error;
    }
}
