'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log("Default action prevented");
    }

    return (
        <div className='signup-container'>
            <h1>Hello from SignUp</h1>
            <div className='form-container'>
                <form 
                    method='POST'
                    onSubmit={handleSubmit}
                >
                    <button>Submit me!</button>
                </form>
            </div>
            <Link href="/">Head back home</Link>
        </div>
    );
}
