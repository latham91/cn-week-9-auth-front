import PropTypes from "prop-types";
import Container from "./Container";

export default function Navbar({ user, handleSignout }) {
    return (
        <header className="py-5 bg-slate-800 text-neutral-100">
            <Container>
                <nav className="flex items-center justify-between">
                    <div className="text-3xl font-extrabold">Auth</div>
                    <div>
                        {user ? (
                            <div className="flex items-center gap-5">
                                <div>Welcome, {user.username}</div>
                                <button onClick={handleSignout} className="btn-primary">
                                    Sign out
                                </button>
                            </div>
                        ) : (
                            <button className="btn-primary">Sign in</button>
                        )}
                    </div>
                </nav>
            </Container>
        </header>
    );
}

Navbar.propTypes = {
    user: PropTypes.object,
    handleSignout: PropTypes.func,
};
