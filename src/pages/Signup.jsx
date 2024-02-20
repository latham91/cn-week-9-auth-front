import PropTypes from "prop-types";
import Container from "../components/Container";
import SignupForm from "../components/SignupForm";

export default function Signup({ errorMessage, handleSignup, loading }) {
    return (
        <main>
            <Container>
                <div className="flex flex-col items-center justify-center w-2/5 py-10 mx-auto">
                    <h1 className="text-3xl font-extrabold">Sign up for a new account</h1>
                    <p>Enter your details below to sign up</p>
                    <SignupForm handleSignup={handleSignup} errorMessage={errorMessage} loading={loading} />
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
