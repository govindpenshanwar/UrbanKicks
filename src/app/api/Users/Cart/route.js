import { NextRequest, NextResponse } from "next/server";
import { DbConnect } from "@/DBConfig/Config";
import CartData from "@/models/cartModel";
import jwt from "jsonwebtoken";

export async function POST(req = NextRequest) {
  const authToken = await req.cookies.get('token')?.value;
  try {
    const reqBody = await req.json();
    const [id, name, picture, tag, price] = reqBody;

    const decodedToken = jwt.verify(authToken, process.env.JWT_SECRET);
    const { username } = decodedToken;

    const selectedItems = reqBody.map((item) => ({
      id: item.id,
      username: username,
      name: item.name,
      picture: item.picture,
      tag: item.tag,
      price: item.price,

    }));

    // Saving each item individually
    const savedItems = await Promise.all(
      selectedItems.map(async (item) => {
        const newItem = new CartData(item);
        return await newItem.save();
      })
    );

    console.log("Saved items in cart => ", savedItems);
    return NextResponse.json({ success: true, savedItems });
  } catch (error) {
    console.error("Error at Cart Endpoint:", error);
  }
}


DbConnect();

