import PropTypes from "prop-types";

export default function BookCard({ book }) {
    return (
        <div className="p-3 border rounded-md border-zinc-800">
            <h2 className="text-2xl font-bold">{book.title}</h2>
            <p className="text-lg">{book.author}</p>
            <p className="text-lg">{book.genre}</p>
        </div>
    );
}

BookCard.propTypes = {
    book: PropTypes.object.isRequired,
};
