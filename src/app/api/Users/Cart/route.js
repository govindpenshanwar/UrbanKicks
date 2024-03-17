// import { NextRequest, NextResponse } from "next/server";
// import { DbConnect } from "@/DBConfig/Config";
// import CartData from "@/models/cartModel";
// export async function POST(req = NextRequest) {
//     try {
//         const reqBody = await req.json();
//         const {id, name, picture, tag, price} = reqBody;
//         const selectedItems = new CartData ({ id, name, picture, tag, price });
//         await selectedItems.save();
//         console.log(selectedItems);
//         return NextResponse.json({ success: true, selectedItems });
//     } catch (error) {
//         console.error("Error at Cart Endpoint :", error);
//     }
// }

//!First Code  DbConnect();
    
import { NextRequest, NextResponse } from "next/server";
import { DbConnect } from "@/DBConfig/Config";
import CartData from "@/models/cartModel";


export async function POST(req = NextRequest) {
  try {
    const reqBody = await req.json();
    const [ id, name, picture, tag, price ] = reqBody;

    // Assuming reqBody is an array of items
    const selectedItems = reqBody.map((item) => ({
      id: item.id,
      name: item.name,
      picture: item.picture,
      tag: item.tag,
      price: item.price,
    }));

    // Save each item individually
    const savedItems = await Promise.all(
      selectedItems.map(async (item) => {
        const newItem = new CartData(item);
        return await newItem.save();
      })
    );

    console.log(savedItems);
    return NextResponse.json({ success: true, savedItems });
  } catch (error) {
    console.error("Error at Cart Endpoint:", error);
  }
}



// export async function GET(){
// try {
//   const cartItems = await CartData.find();
//    return NextResponse.json({
//     message : "Data Fetched",
//      cartItems
//    })
  
// } catch (error) {
//   console.error("Error at get EndRoue : ", error);
// }
// }

DbConnect();

