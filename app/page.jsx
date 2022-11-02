import Link from 'next/link';

export default function Home() {
    return (
        <>
            <h1>Hello, Vibrance</h1>
            <h2><Link href="/auth/login">Log In</Link></h2>
            <h2><Link href="/auth/signup">Sign Up</Link></h2>
        </>
    );
}
