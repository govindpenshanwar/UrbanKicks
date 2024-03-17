import User from "@/models/userModel";
import { DbConnect } from "@/DBConfig/Config";
import bcryptjs from 'bcryptjs';
import { NextRequest, NextResponse } from "next/server";


export async function POST(request = NextRequest){
try {
    const reqBody = await request.json();
    const {username , email , password} = reqBody;
    console.log("Local User =>" ,reqBody);

    const findUser = await User.findOne({email});
    if(findUser){
        return NextResponse.json({
            message : "User Already Exists",
            status : 400
        });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password,salt);

    const savedUser = new User({
        username,
        email,
        password : hashedPassword
    });

    await savedUser.save();
    console.log("User Stored in DB => ", savedUser);
    return NextResponse.json({
        success : true,
        message : 'User Registered Successfully'
    })
    
} catch (error) {
    return NextResponse.json({
        error : error.message,
        success : false,
    })
    
}
}

DbConnect();