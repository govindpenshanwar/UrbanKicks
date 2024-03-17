// YourBillingComponent.jsx
"use client";
import Script from "next/script";
import toast from "react-hot-toast";

export default function YourBillingComponent({totalAmount}) {

    const makePayment = async ({ productId = null }) => {
        
        const response = await fetch("/api/Users/razorpay2", {
            method: "POST",
            body: JSON.stringify({ productId }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
       
        const options = {
            key: data.options.key,
            name: data.options.name,
            currency: data.options.currency,
            amount : totalAmount * 100,
            // amount: data.options.amount,
            order_id: data.options.id,
            description: data.options.amountDesc,
            method : {
                upi : true,
                upi_qr : true
            },
            handler: function () {
                toast.success("Payment Successfull");
            },
            prefill: {
                name: "Govind Penshanwar",
                email: "test@test.com",
                contact: "9000000000",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();

        paymentObject.on("payment.failed", function (response) {
            alert("Payment failed. Please try again. Contact support for help");
        });
    };

    return (
        <>
            <Script
                id="razorpay-checkout-js"
                src="https://checkout.razorpay.com/v1/checkout.js"
            />

            <button
                onClick={() => {
                    makePayment({ productId: "example_ebook" });
                }}
                className="btn  w-40 hover:scale-105 hover:bg-zinc-800 font-bold text-lg ml-3"
            >
                Pay now
            </button>
        </>
    );
}
