"use client"
import { useSession, signOut } from 'next-auth/react'
import React from 'react'
import { Avatar } from '@mui/material';
import Navbar from '../Navbar/page';

function ProfilePage() {
    const { data: session } = useSession();

    const email = session?.user?.email;
    const name = session?.user?.name;
    const image = session?.user?.image;

    if (!email, !name, !image) {
        return <p>no data</p>
    }
    return (
        <>
            <Navbar />
            <div className='flex flex-col items-center justify-center gap-4 mt-20'>

                <Avatar
                    src={image}
                    alt='profile'
                />
                <h1 className='text-black'>Signed in as <strong>{name}</strong></h1>
                <h1>{email}</h1>
                <button
                    className='btn'
                    onClick={() => signOut({ callbackUrl: "/" })}>Sign Out</button>
            </div>
        </>
    )
}

export default ProfilePage;
