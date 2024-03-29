import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signUpFetch, signInFetch, verifyUser } from "./utils/useAuth";
import { deleteUser } from "./utils/fetchUsers";
import Cookies from "universal-cookie";

import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import Account from "./pages/Account";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

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
                return;
            }

            setUser(data.user);
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
        navigate("/");
    };

    const handleDeleteAccount = async (e) => {
        e.preventDefault();

        const data = await deleteUser(user.id);

        if (data.success) {
            setUser(null);
            cookies.remove("authToken");
            navigate("/");
        }
    };

    return (
        <div className="flex flex-col h-screen">
            <Navbar user={user} handleSignout={handleSignout} />
            <Routes>
                <Route path="/" element={<Dashboard user={user} />} />
                <Route
                    path="/signup"
                    element={
                        <Signup errorMessage={errorMessage} loading={loading} handleSignup={handleSignup} user={user} />
                    }
                />
                <Route
                    path="/signin"
                    element={
                        <Signin errorMessage={errorMessage} loading={loading} handleSignin={handleSignin} user={user} />
                    }
                />
                <Route path="/books/:id" element={<Books />} />
                <Route
                    path="/account/:id"
                    element={<Account user={user} handleDeleteAccount={handleDeleteAccount} />}
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}
