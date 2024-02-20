import PropTypes from "prop-types";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Signup({ errorMessage, handleSignup, loading }) {
    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
    });

    return (
        <main>
            <Container>
                <div className="flex flex-col items-center justify-center w-2/5 py-10 mx-auto">
                    <h1 className="text-3xl font-extrabold">Sign up for a new account</h1>
                    <p>Enter your details below to sign up</p>
                    <form onSubmit={(e) => handleSignup(e, credentials)} className="flex flex-col w-full gap-3 py-5">
                        <div className="flex flex-col gap-1">
                            <label id="username" name="username">
                                Username:
                            </label>
                            <input
                                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                                type="text"
                                name="username"
                                id="username"
                                placeholder="johndoe"
                                className="p-1 border rounded-md border-zinc-800"
                            />
                        </div>

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
                        {errorMessage && <span className="text-center text-red-600 animate-pulse">Error message</span>}
                        <button type="submit" className="btn-secondary">
                            {loading ? "Creating..." : "Register account"}
                        </button>
                        <span>
                            Already have an account?{" "}
                            <Link to="/signin" className="text-blue-500 hover:underline">
                                Sign in
                            </Link>
                        </span>
                    </form>
                </div>
            </Container>
        </main>
    );
}

Signup.propTypes = {
    errorMessage: PropTypes.string,
    handleSignup: PropTypes.func.isRequired,
    loading: PropTypes.bool,
};
