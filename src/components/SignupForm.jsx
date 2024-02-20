import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function SignupForm({ handleSignup, errorMessage, loading }) {
    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
    });

    return (
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
    );
}

SignupForm.propTypes = {
    handleSignup: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
    loading: PropTypes.bool,
};
