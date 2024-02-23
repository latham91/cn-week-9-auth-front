import PropTypes from "prop-types";

export default function BookCard({ book }) {
    return (
        <div className="p-3 border border-b rounded-md shadow-md bg-slate-100 border-zinc-800">
            <h2 className="pb-2 mb-2 text-2xl font-bold border-b border-dashed border-slate-400">{book.title}</h2>
            <p className="text-lg">
                <span className="mr-2 font-semibold">Author: </span>
                {book.author}
            </p>
            <p className="text-lg">
                <span className="mr-2 font-semibold">Genre: </span>
                {book.genre}
            </p>
            <div className="mt-5">
                <p className="text-lg font-semibold">Cover Image:</p>
                <img src={book.image} alt={book.title} className="w-full h-full" />
            </div>
        </div>
    );
}

BookCard.propTypes = {
    book: PropTypes.object.isRequired,
};
