import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function UserCard({ author }) {
    return (
        <div className="flex flex-col gap-3 p-3 border rounded-md border-zinc-800">
            <h2 className="text-2xl font-bold">{author.name}</h2>
            <p className="text-lg">{author.email}</p>
            <Link to={`/books/${author.id}`} className="">
                <button className="w-full btn-secondary">Books</button>
            </Link>
        </div>
    );
}

UserCard.propTypes = {
    author: PropTypes.object,
};
