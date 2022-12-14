'use client';
import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); 

        try {
            const body = { username, email, firstName, lastName };

            fetch('/api/newuser', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

        } catch (error) {
            console.error(error);
        }

        setUsername('');
        setEmail('');
        setFirstName('');
        setLastName('');
    };

    return (
        <>
            <div className='signup-container'>
                <h1>Sign Up!</h1>
                <div className='form-container'>
                    <form 
                        method='POST'
                        onSubmit={handleSubmit}
                    >
                        <fieldset>
                            <input
                                id='username'
                                type='text'
                                placeholder='Username'
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                                required
                            />
                            <input
                                id='email'
                                type='email'
                                placeholder='Email address'
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                            <input
                                id='first-name'
                                type='text'
                                placeholder='First name'
                                value={firstName}
                                onChange={(event) => setFirstName(event.target.value)}
                                required
                            />
                            <input
                                id='last-name'
                                type='text'
                                placeholder='Last name'
                                value={lastName}
                                onChange={(event) => setLastName(event.target.value)}
                                required
                            />
                        </fieldset>
                        <button>Submit me!</button>
                    </form>
                </div>
            </div>
            <Link href="/">Head back home</Link>
       </>
    );
}
