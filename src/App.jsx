import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Cookies from "universal-cookie";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const initialRender = useRef(true);

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
        } else {
            if (!user) {
                navigate("/signin");
            }
        }
    }, [user, navigate]);

    const handleSignin = async (e, credentials) => {
        e.preventDefault();
        console.log(credentials);
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
                <Route path="/signup" element={<Signup />} />
                <Route
                    path="/signin"
                    element={<Signin errorMessage={errorMessage} loading={loading} handleSignin={handleSignin} />}
                />
            </Routes>
        </div>
    );
}
