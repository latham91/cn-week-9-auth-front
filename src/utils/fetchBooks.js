export default async function getBooksByAuthorId(id) {
    const response = await fetch(`http://localhost:5001/users/${id}/books`, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Allow-Control-Allow-Origin": "http://localhost:5001",
        },
        credentials: "include",
    });
    const data = await response.json();

    return data;
}
