import { NextRequest, NextResponse } from "next/server";
import { DbConnect } from "@/DBConfig/Config";
import CartData from "@/models/cartModel";


export async function DELETE(req = NextRequest) {
    try {
        const reqBody = await req.json();
        const { id } = reqBody
        console.log("Deleting id with server : ", id);

        if (!id) {
            return NextResponse.json({
                success: false,
                message: "Invalid ID",
            });
        }

        const deletedItem = await CartData.findByIdAndDelete(id);

        if (!deletedItem) {
            return NextResponse.json({
                success: false,
                message: "Item Not Found",
            });
        }

        return NextResponse.json({
            success: true,
            message: "Item Deleted Successfully!!",
        });

    } catch (error) {
        console.error("Error at Delete Endpoint:", error.message); // Log the specific error message
        return NextResponse.json({
            success: false,
            error: "Internal Server Error",
        });
    }
}
DbConnect();