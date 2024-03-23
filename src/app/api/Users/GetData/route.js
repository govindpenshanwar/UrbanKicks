import { NextRequest, NextResponse } from "next/server";
import { DbConnect } from "@/DBConfig/Config";
import CartData from "@/models/cartModel";
import jwt from "jsonwebtoken";

export async function GET(req = NextRequest) {
  try {
    const authToken = await req.cookies.get('token')?.value;
    const decodedToken = jwt.verify(authToken, process.env.JWT_SECRET);
    const { username } = decodedToken;

    const cartItems = await CartData.find({ username });
    return NextResponse.json({
      message: "Data Fetched",
      cartItems
    })

  } catch (error) {
    return NextResponse.json({
      error: "Err at getData route => " + error.message,
      success: false
    })
  }
}

DbConnect();
