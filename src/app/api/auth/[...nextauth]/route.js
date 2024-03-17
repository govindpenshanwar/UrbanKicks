import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import nextAuthUsers from "@/models/nextAuthUsers";
import { DbConnect } from "@/DBConfig/Config";
import { NextResponse } from "next/server";


export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),

    ],
    callbacks: {
        async session({ token, user, session }) {
            try {
                const userData = session.user;

                if (!userData || !userData.email) {
                    console.error("Error: Invalid user data received:", userData);
                    return session;
                }
                await DbConnect();
                const exstingUser = await nextAuthUsers.findOne({ email: userData.email })

                if (!exstingUser) {
                    const newUser = new nextAuthUsers({
                        username: userData.name,
                        email: userData.email
                    });
                    await newUser.save();
                }
                return session;

            } catch (error) {
                console.error("Err storing nextauth data => ", error.message);
            }

        }
    },
}

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }


