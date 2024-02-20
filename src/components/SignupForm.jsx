import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignupForm({ handleSignup, errorMessage, loading }) {
    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(true);
    const passwordRef = useRef();

    const handleShowPassword = () => {
        setShowPassword(!showPassword);

        if (showPassword) {
            passwordRef.current.type = "text";
        } else {
            passwordRef.current.type = "password";
        }
    };

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
                    className="p-1 border rounded-md border-zinc-800 outline-slate-800"
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
                    className="p-1 border rounded-md border-zinc-800 outline-slate-800"
                />
            </div>

            <div className="relative flex flex-col gap-1">
                <label id="password" name="password">
                    Password:
                </label>
                <input
                    ref={passwordRef}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    className="p-1 border rounded-md border-zinc-800 outline-slate-800"
                    type="password"
                    name="password"
                    id="password"
                />
                {showPassword ? (
                    <FaEye onClick={handleShowPassword} className="absolute cursor-pointer right-2 bottom-2" />
                ) : (
                    <FaEyeSlash onClick={handleShowPassword} className="absolute cursor-pointer right-2 bottom-2" />
                )}
            </div>
            {errorMessage && <span className="text-center text-red-600 animate-pulse">{errorMessage}</span>}
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
