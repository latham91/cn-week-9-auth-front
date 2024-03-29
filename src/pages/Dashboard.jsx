import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../utils/fetchUsers";
import PropTypes from "prop-types";
import Container from "../components/Container";
import UserCard from "../components/UserCard";

export default function Dashboard({ user }) {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            return navigate("/signin");
        }

        getAllUsers();
    }, [user, navigate]);

    const getAllUsers = async () => {
        const data = await fetchUsers();

        if (!data.success) {
            console.log(data);
            return;
        }

        setUsers(data.users);
    };

    return (
        <main className="py-10">
            <Container>
                <div>
                    <h1 className="text-5xl font-extrabold">Welcome to the Dashboard</h1>
                    <p className="text-lg">This is a list of authors that we contain information for.</p>

                    <div className="grid grid-cols-1 gap-5 mt-6 border-t border-dashed py-7 border-slate-400 md:grid-cols-3">
                        {!users ? (
                            <div>Loading...</div>
                        ) : (
                            users.map((author) => {
                                return <UserCard key={author.id} author={author} />;
                            })
                        )}
                    </div>
                </div>
            </Container>
        </main>
    );
}

Dashboard.propTypes = {
    user: PropTypes.object,
};
