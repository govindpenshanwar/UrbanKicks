import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { DbConnect } from "@/DBConfig/Config";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

export async function POST(request = NextRequest) {
    try {
        const reqBody = await request.json();
        const { username, password } = reqBody;
        console.log("Local Data => ", username, password);

        const user = await User.findOne({ username });
        if (!user) {
            return NextResponse.json({
                message: "Users Does not Exists",
                status: 400
            });
        };

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return NextResponse.json({
                message: "Invalid Password",
                status: 400
            });
        };
        console.log(user);

        const tokenData = {
            id: user.id,
            username: user.username,
            email: user.email
        }

        const tokenSecret = process.env.JWT_SECRET;

        const token = jwt.sign(tokenData, tokenSecret, { expiresIn: "1d" });
        const response = NextResponse.json({
            message: "Login Successfull",
            success: true
        });

        response.cookies.set("token", token, {
            httpOnly: false
        });

        return response;

    } catch (error) {
        console.error("Error at Login endPoint : ", error);
        return NextResponse.json({
            message: "Something Went wrong",
            success: false
        })
    }
}
DbConnect();