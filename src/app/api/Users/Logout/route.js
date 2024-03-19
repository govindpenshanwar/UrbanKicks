import { NextResponse } from "next/server"


export async function GET() {
    try {
        const response = NextResponse.json({
            message: "Logout Successfull",
            success: true
        });

        // response.cookies.delete("token", {
        //     httpOnly: true,
        //     expires: new Date(0)
        // });
        // response.cookies.delete("next-auth.session-token", {
        //     httpOnly: true,
        //     expires: new Date(0)
        // })
        response.cookies.set("token", "", {
            httpOnly: true,
            expires: new Date(0)
        });
        response.cookies.set("next-auth.session-token", "", {
            httpOnly: true,
            expires: new Date(0)
        })

        return response;

    } catch (error) {
        return NextResponse.json({
            message: "Error at logout route",
            error: error.message
        })
    }
}