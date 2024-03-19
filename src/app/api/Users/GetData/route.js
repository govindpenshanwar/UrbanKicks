import { NextResponse } from "next/server";
import { DbConnect } from "@/DBConfig/Config";
import CartData from "@/models/cartModel";

export async function GET() {
  try {
    const cartItems = await CartData.find();
    return NextResponse.json({
      message: "Data Fetched",
      cartItems
    })

  } catch (error) {
    return NextResponse.json({
      error: "Err ata getdata route => " + error.message,
      success: false
    })
  }
}

DbConnect();
