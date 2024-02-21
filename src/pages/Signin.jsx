import PropTypes from "prop-types";
import Container from "../components/Container";
import SigninForm from "../components/SigninForm";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin({ handleSignin, errorMessage, loading, user }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    return (
        <main>
            <Container>
                <div className="flex flex-col items-center h-full py-10 mx-auto justify-centerw-full lg:w-2/5">
                    <h1 className="text-3xl font-extrabold">Sign in to your account</h1>
                    <p>Enter your details below to sign in</p>
                    <SigninForm handleSignin={handleSignin} errorMessage={errorMessage} loading={loading} />
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
    user: PropTypes.object,
};
