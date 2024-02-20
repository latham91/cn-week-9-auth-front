import { useState } from "react";
import PropTypes from "prop-types";
import Container from "../components/Container";

export default function Signin({ handleSignin, errorMessage, loading }) {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    return (
        <main>
            <Container>
                <div className="flex flex-col items-center justify-center w-2/5 py-10 mx-auto">
                    <h1 className="text-3xl font-extrabold">Sign in to your account</h1>
                    <form onSubmit={(e) => handleSignin(e, credentials)} className="flex flex-col w-full gap-3 py-5">
                        <div className="flex flex-col gap-1">
                            <label id="email" name="email">
                                Email:
                            </label>
                            <input
                                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                                type="email"
                                name="email"
                                id="email"
                                placeholder="example@mail.com"
                                className="p-1 border rounded-md border-zinc-800"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label id="password" name="password">
                                Password:
                            </label>
                            <input
                                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                                className="p-1 border rounded-md border-zinc-800"
                                type="password"
                                name="password"
                                id="password"
                            />
                        </div>
                        {errorMessage && <span className="text-center text-red-600 animate-pulse">{errorMessage}</span>}
                        <button type="submit" className="btn-secondary" disabled={loading}>
                            {loading ? "Signing in..." : "Sign in"}
                        </button>
                    </form>
                </div>
            </Container>
        </main>
    );
}

Signin.propTypes = {
    handleSignin: PropTypes.func.isRequired,
    setCredentials: PropTypes.func,
    errorMessage: PropTypes.string,
    loading: PropTypes.bool,
};
