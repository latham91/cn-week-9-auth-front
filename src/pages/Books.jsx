import { useEffect, useState } from "react";
import Container from "../components/Container";
import { useParams } from "react-router-dom";
import getBooksByAuthorId from "../utils/fetchBooks";

export default function Books() {
    const [books, setBooks] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getBooks = async () => {
            // Fetch books from the backend
            const data = await getBooksByAuthorId(id);

            if (!data.success) {
                console.log(data);
                return;
            }

            setBooks(data.user);
        };

        getBooks();
    }, [id]);

    return (
        <main className="py-10">
            <Container>
                <h1 className="text-5xl font-extrabold">Showing books from: {books.name}</h1>

                <div className="grid grid-cols-1 gap-3 py-10 md:grid-cols-3">
                    {!books.books ? (
                        <div>Loading...</div>
                    ) : (
                        books.books.map((book) => {
                            return (
                                <div key={book.id} className="p-3 border rounded-md border-zinc-800">
                                    <h2 className="text-2xl font-bold">{book.title}</h2>
                                    <p className="text-lg">{book.author}</p>
                                    <p className="text-lg">{book.genre}</p>
                                </div>
                            );
                        })
                    )}
                </div>
            </Container>
        </main>
    );
}
