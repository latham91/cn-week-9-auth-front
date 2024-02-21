import { Link } from "react-router-dom";
import Container from "../components/Container";

export default function NotFound() {
    return (
        <main className="h-2/5">
            <Container className="flex flex-col items-center justify-center h-full">
                <div className="flex flex-col items-center gap-4">
                    <h1 className="text-5xl font-extrabold">404 Not Found</h1>
                    <p className="text-lg">The page you are looking for does not exist.</p>
                    <Link to="/" className="btn-secondary">
                        Back to dashboard
                    </Link>
                </div>
            </Container>
        </main>
    );
}
