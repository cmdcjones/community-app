
export default function AuthLayout({ children }) {
    return (
        <>
            <header>
                <h1>Vibrance</h1>
            </header>
            <main>
                {children}
            </main>
        </>
    );
}
