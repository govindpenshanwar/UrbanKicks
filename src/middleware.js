
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request = NextRequest) {
    const path = request.nextUrl.pathname;

    const isPublic = path === '/Login' || path === '/signUp';

    const token = request.cookies.get('token')?.value || "";
    const nextAuthToken = request.cookies.get('next-auth.session-token')?.value || "";
    const signInToken = request.cookies.get('__Secure-next-auth.session-token')?.value || "";

    if ((isPublic || path === '/Drawer') && token && nextAuthToken && signInToken) {
        return NextResponse.redirect(new URL('/', request.nextUrl));
    };

    if (!isPublic && !token && !nextAuthToken) {
        return NextResponse.redirect(new URL('/Login', request.nextUrl));
    }
}

export const config = {
    matcher: [
        '/',
        '/Login',
        '/signUp',
        '/Men',
        '/Kids',
        '/Women',
        '/Kids',
        '/Unisex',
        '/Drawer',
        '/checkout'
    ]
}