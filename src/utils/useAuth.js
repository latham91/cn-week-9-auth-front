export const signUpFetch = async (credentials) => {
    try {
        const response = await fetch("http://localhost:5001/users/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });

        const data = await response.json();

        return data;
    } catch (error) {
        return error;
    }
};

export const signInFetch = async (credentials) => {
    try {
        const response = await fetch("http://localhost:5001/users/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });

        const data = await response.json();

        return data;
    } catch (error) {
        return error;
    }
};
