import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Container from "../components/Container";
import { useEffect, useState } from "react";
import fetchUsers from "../utils/fetchUsers";

export default function Dashboard({ user }) {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/signin");
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

                    <div className="grid grid-cols-1 gap-5 py-5 md:grid-cols-3 lg:grid-cols-4">
                        {!users ? (
                            <div>Loading...</div>
                        ) : (
                            users.map((item) => {
                                return (
                                    <div
                                        key={item.id}
                                        className="flex flex-col gap-3 p-3 border rounded-md border-zinc-800"
                                    >
                                        <h2 className="text-2xl font-bold">{item.username}</h2>
                                        <p className="text-lg">{item.email}</p>
                                    </div>
                                );
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
