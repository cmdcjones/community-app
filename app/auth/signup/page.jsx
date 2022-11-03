'use client';
import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Form from './Form';

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    return (
        <>
            <Form
                username={username}
                setUsername={setUsername}
                email={email}
                setEmail={setEmail}
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
            />
            <Link href="/">Head back home</Link>
        </>
    );
}
