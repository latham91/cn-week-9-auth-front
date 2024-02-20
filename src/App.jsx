import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpFetch, signInFetch, verifyUser } from "./utils/useAuth";

export default function App() {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // For persistant user login, sends request to backend to verify jwt token
        const fetchUser = async () => {
            const data = await verifyUser();

            if (!data.success) {
                navigate("/signin");
                return;
            }

            setUser(data.user);
            navigate("/");
        };

        fetchUser();
    }, [navigate]);

    const handleSignin = async (e, credentials) => {
        e.preventDefault();

        setLoading(true);
        const data = await signInFetch(credentials);

        if (!data.success) {
            setErrorMessage(data.message);
            setLoading(false);
            setTimeout(() => {
                setErrorMessage("");
            }, 3000);
        }

        setLoading(false);
        setUser(data.user);
        cookies.set("authToken", data.token);
        navigate("/");
    };

    const handleSignup = async (e, credentials) => {
        e.preventDefault();

        setLoading(true);
        const data = await signUpFetch(credentials);

        if (!data.success) {
            console.log(data);
            setErrorMessage(data.message);
            setLoading(false);
            setTimeout(() => {
                setErrorMessage("");
            }, 3000);
            return;
        }

        setLoading(false);
        navigate("/");
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
