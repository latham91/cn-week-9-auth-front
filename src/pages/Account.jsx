import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { updateUser } from "../utils/fetchUsers";
import PropTypes from "prop-types";
import Container from "../components/Container";

export default function Account({ user, handleDeleteAccount }) {
    const { id } = useParams();

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const [credentials, setCredentials] = useState({
        id: id,
        name: "",
        username: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        if (user) {
            setCredentials({
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                password: user.password,
            });
        }
    }, [user]);

    const handleError = (error) => {
        setErrorMessage(error);
        setTimeout(() => {
            setErrorMessage("");
        }, 3000);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        if (credentials.username === "" || credentials.email === "" || credentials.password === "") {
            return handleError("Please fill in all fields.");
        }

        const updatedUser = await updateUser(id, credentials);
        console.log(updatedUser);

        if (!updatedUser.success) {
            return handleError(updatedUser.message);
        }

        setSuccessMessage("Updated user successfully.");
        setTimeout(() => {
            setSuccessMessage("");
        }, 3000);
    };

    if (!user) {
        return <div>Loading...</div>;
    } else {
        return (
            <main className="py-10">
                <Container>
                    <h1 className="text-5xl font-extrabold">Account page</h1>
                    <p className="py-3 text-lg">
                        This is your account page, you can update your details or delete your account.
                    </p>

                    <form onSubmit={handleUpdate} className="flex flex-col w-full gap-3 py-5">
                        <label htmlFor="username">Name</label>
                        <input
                            onChange={(e) => setCredentials({ ...credentials, name: e.target.value })}
                            type="text"
                            id="name"
                            name="name"
                            placeholder={user.name}
                            className="p-1 border rounded-md border-zinc-800 outline-slate-800"
                        />

                        <label htmlFor="username">Username</label>
                        <input
                            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                            type="text"
                            id="username"
                            name="username"
                            placeholder={user.username}
                            className="p-1 border rounded-md border-zinc-800 outline-slate-800"
                        />

                        <label htmlFor="email">Email</label>
                        <input
                            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                            type="email"
                            id="email"
                            name="email"
                            placeholder={user.email}
                            className="p-1 border rounded-md border-zinc-800 outline-slate-800"
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                            type="password"
                            id="password"
                            name="password"
                            className="p-1 border rounded-md border-zinc-800 outline-slate-800"
                        />

                        {errorMessage && <div className="text-red-500 animate-pulse">{errorMessage}</div>}
                        {successMessage && <div className="text-green-500 animate-pulse">{successMessage}</div>}
                        <button type="submit" className="btn-secondary">
                            Update
                        </button>
                    </form>
                    <button
                        onClick={(e) => handleDeleteAccount(e, user.id)}
                        className="w-full text-white bg-red-500 btn-secondary hover:bg-red-600"
                    >
                        Delete account
                    </button>
                </Container>
            </main>
        );
    }
}

Account.propTypes = {
    user: PropTypes.object,
    handleDeleteAccount: PropTypes.func,
};
