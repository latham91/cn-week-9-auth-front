import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import getBooksByAuthorId from "../utils/fetchBooks";
import Container from "../components/Container";
import BookCard from "../components/BookCard";

export default function Books() {
    const [books, setBooks] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getBooks = async () => {
            // Fetch books from the backend
            const data = await getBooksByAuthorId(id);

            if (!data.success) {
                return navigate("/not-found");
            }

            setBooks(data.user);
        };

        getBooks();
    }, [id, navigate]);

    return (
        <main className="py-10">
            <Container>
                <h1 className="pb-5 text-5xl font-extrabold border-b border-dashed border-slate-400">
                    Showing books from: <span className="ml-5 text-slate-600">{books.name}</span>
                </h1>

                <div className="grid grid-cols-1 gap-3 py-10 md:grid-cols-3">
                    {!books.books ? (
                        <div className="text-lg">Loading...</div>
                    ) : (
                        books.books.map((book) => {
                            return <BookCard key={book.id} book={book} />;
                        })
                    )}
                    {books.books && books.books.length === 0 && (
                        <div className="text-lg">No books found for this author.</div>
                    )}
                </div>
                <Link to="/" className="btn-secondary">
                    Back to dashboard
                </Link>
            </Container>
        </main>
    );
}
