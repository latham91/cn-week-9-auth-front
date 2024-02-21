import { useNavigate, useParams } from "react-router-dom";
import Container from "../components/Container";
import { useState } from "react";
import { updateUser } from "../utils/fetchUsers";

export default function Account() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleUpdate = async (e) => {
        e.preventDefault();

        if (credentials.username === "" || credentials.email === "" || credentials.password === "") {
            return setErrorMessage("Fields cannot be empty.");
        }

        const updatedUser = await updateUser(id, credentials);
        console.log(updatedUser);

        if (!updatedUser.success) {
            setErrorMessage(updatedUser.error);

            return setTimeout(() => {
                setErrorMessage("");
            }, 3000);
        }

        setSuccessMessage("Updated user successfully.");
    };

    return (
        <main className="py-10">
            <Container>
                <h1 className="text-5xl font-extrabold">Account page</h1>
                <p className="py-3 text-lg">
                    This is your account page, you can update your details or delete your account.
                </p>

                <form onSubmit={handleUpdate} className="flex flex-col w-full gap-3 py-5">
                    <label htmlFor="username">Username</label>
                    <input
                        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                        type="text"
                        id="username"
                        name="username"
                        className="p-1 border rounded-md border-zinc-800 outline-slate-800"
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                        type="email"
                        id="email"
                        name="email"
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
            </Container>
        </main>
    );
}
