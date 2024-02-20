import Container from "../components/Container";

export default function Signup() {
    return (
        <main>
            <Container>
                <div className="flex flex-col items-center justify-center w-2/5 py-10 mx-auto">
                    <h1 className="text-3xl font-extrabold">Sign in to your account</h1>
                    <form className="flex flex-col w-full gap-3 py-5">
                        <div className="flex flex-col gap-1">
                            <label id="email" name="email">
                                Email:
                            </label>
                            <input type="email" name="email" id="email" placeholder="example@mail.com" className="" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label id="password" name="password">
                                Email:
                            </label>
                            <input className="" type="email" name="email" id="email" placeholder="example@mail.com" />
                        </div>
                        <span className="text-center text-red-600 animate-pulse">Error message</span>
                        <button type="submit" className="btn-secondary">
                            Sign in
                        </button>
                    </form>
                </div>
            </Container>
        </main>
    );
}
