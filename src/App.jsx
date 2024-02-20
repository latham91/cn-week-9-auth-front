import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Cookies from "universal-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSignin = async (e, credentials) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch("http://localhost:5001/users/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            });

            const data = await response.json();

            if (!data.success) {
                setErrorMessage(data.message);

                setTimeout(() => {
                    setErrorMessage("");
                }, 3000);
            }

            setUser(data.user);
            cookies.set("authToken", data.token);
        } catch (error) {
            setErrorMessage(error.message);

            setTimeout(() => {
                setErrorMessage("");
            }, 3000);
        } finally {
            setLoading(false);
            navigate("/");
        }
    };

    const handleSignup = async (e, credentials) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch("http://localhost:5001/users/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            });

            const data = await response.json();

            if (!data.success) {
                setErrorMessage(data.message);

                setTimeout(() => {
                    setErrorMessage("");
                }, 3000);
            }

            navigate("/signin");
        } catch (error) {
            setErrorMessage(error.message);

            setTimeout(() => {
                setErrorMessage("");
            }, 3000);
        } finally {
            setLoading(false);
            navigate("/");
        }
    };

    const handleSignout = () => {
        setUser(null);
        cookies.remove("authToken");
        navigate("/signin");
    };

    return (
        <div>
            <Navbar user={user} handleSignout={handleSignout} />
            <Routes>
                <Route path="/" element={<Dashboard user={user} />} />
                <Route
                    path="/signup"
                    element={<Signup errorMessage={errorMessage} loading={loading} handleSignup={handleSignup} />}
                />
                <Route
                    path="/signin"
                    element={<Signin errorMessage={errorMessage} loading={loading} handleSignin={handleSignin} />}
                />
            </Routes>
        </div>
    );
}
