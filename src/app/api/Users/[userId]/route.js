// import { DbConnect } from "@/DBConfig/Config";
// // pages/api/cart/[userId].js
// import CartData from "@/models/cartModel";
// import { NextRequest, NextResponse } from "next/server";

// export default async function GET({ searchParams }) {
//     await DbConnect();
//     // const reqBody = NextRequest.json();
//     const { userId } = searchParams;
//     console.log("id :", userId);

//     try {
//         const cartItems = await CartData.find({ user: userId });
//         return NextResponse.status(200).json({ cartItems });
//     } catch (error) {
//         console.error("Error fetching cart items:", error);
//         return NextResponse.status(500).json({ message: "Server error" });
//     }
// }
