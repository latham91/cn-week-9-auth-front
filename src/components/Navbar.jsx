import PropTypes from "prop-types";
import Container from "./Container";
import { Link } from "react-router-dom";

export default function Navbar({ user, handleSignout }) {
    return (
        <header className="py-5 bg-slate-800 text-neutral-100">
            <Container>
                <nav className="flex items-center justify-between">
                    <Link to="/">
                        <div className="text-3xl font-extrabold">Basic Auth</div>
                    </Link>
                    <div>
                        {user ? (
                            <div className="flex items-center gap-5">
                                <div>Welcome, {user.username}</div>
                                <Link to={`/account/${user.id}`}>
                                    <button className="btn-primary">Account</button>
                                </Link>
                                <button onClick={handleSignout} className="btn-primary">
                                    Sign out
                                </button>
                            </div>
                        ) : (
                            <Link to="/signin">
                                <button className="btn-primary">Sign in</button>
                            </Link>
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
