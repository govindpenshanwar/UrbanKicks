import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import shortid from "shortid";

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
});

export function POST(req, res) {
    try {
        const payment_capture = 1;
        const amount = 1000 * 100  //! amount in paisa. In our case it's INR 1
        const currency = "INR";
        const options = {
            key: process.env.RAZORPAY_API_KEY,
            amount: (amount).toString(),
            currency,
            receipt: shortid.generate(),
            payment_capture,
            notes: {
                paymentFor: "example_ebook",
                userId: "user_id_here",
                productId: 'your_product_id'
            }
        };
        return NextResponse.json({ options })

    } catch (error) {
        return console.error("Error at pay route => ", error);
    }
}

