import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function UserCard({ author }) {
    return (
        <div className="flex flex-col justify-between gap-2 p-3 border rounded-md shadow-md bg-slate-100 border-zinc-800 min-h-40">
            <div className="flex items-center justify-between border-b border-slate-800">
                <h2 className="text-xl font-bold">{author.name}</h2>
                <p className="text-sm font-semibold">@{author.username}</p>
            </div>
            <p className="text-sm">
                <span className="font-semibold">Email:</span> {author.email}
            </p>
            <p className="flex items-center gap-1 text-sm">
                <span className="font-semibold">Joined:</span>
                {new Date(author.createdAt).toLocaleDateString()}
            </p>
            <Link to={`/books/${author.id}`} className="">
                <button className="w-full btn-secondary">Books</button>
            </Link>
        </div>
    );
}

UserCard.propTypes = {
    author: PropTypes.object,
};
