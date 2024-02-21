import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Container from "./Container";

import { FaCog, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

export default function Navbar({ user, handleSignout }) {
    return (
        <header className="py-5 shadow-md bg-gradient-to-br from-zinc-900 to-slate-700 text-neutral-100">
            <Container>
                <nav className="flex items-center justify-between">
                    <Link to="/">
                        <div className="text-3xl font-extrabold">Basic Auth</div>
                    </Link>
                    <div>
                        {user ? (
                            <div className="flex items-center gap-5">
                                <div className="font-semibold">Welcome, {user.username}</div>
                                <Link to={`/account/${user.id}`}>
                                    <button className="flex items-center gap-2 btn-primary">
                                        Account
                                        <FaCog />
                                    </button>
                                </Link>
                                <button onClick={handleSignout} className="flex items-center gap-2 btn-primary">
                                    Sign out
                                    <FaSignOutAlt />
                                </button>
                            </div>
                        ) : (
                            <Link to="/signin">
                                <button className="flex items-center gap-2 btn-primary">
                                    Sign in
                                    <FaSignInAlt />
                                </button>
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
