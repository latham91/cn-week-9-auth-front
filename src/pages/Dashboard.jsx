import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Container from "../components/Container";
import { useEffect } from "react";

export default function Dashboard({ user }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/signin");
        }
    }, [user, navigate]);

    return (
        <main className="py-10">
            <Container>
                <div>
                    <h1 className="text-5xl font-extrabold">Welcome to the Dashboard</h1>

                    <div className="grid grid-cols-1 py-5 md:grid-cols-3 lg:grid-cols-4">
                        <div>Super secret data 1</div>
                        <div>Super secret data 2</div>
                        <div>Super secret data 3</div>
                        <div>Super secret data 4</div>
                    </div>
                </div>
            </Container>
        </main>
    );
}

Dashboard.propTypes = {
    user: PropTypes.object,
};
