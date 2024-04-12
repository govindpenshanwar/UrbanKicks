"use client";
import React, { useState, useEffect } from "react";
// import Navbar from "../Components/Navbar/page";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import('../Components/Navbar/page'));


function CheckoutPage() {
    const router = useRouter();
    const [data, setData] = useState(null);
    const [itemQuantities, setItemQuantities] = useState({});
    const [toogle, setToogle] = useState(false);

    const [formInfo, setFormInfo] = useState({
        name: '',
        address: '',
        city: '',
        postcode: '',
        country: '',
        email: '',
        phone: ''
    })



    useEffect(() => {
        const fetchData = async () => {
            const Api = await axios.get("/api/Users/GetData");
            const res = Api.data;
            setData(res.cartItems);
            console.log("Data at checkoutPage :", res);
        };
        fetchData();
    }, [toogle]);

    // useEffect(() => {

    // })

    const removeItem = async (id) => {
        try {
            console.log("Deleting id with first :", id);
            const response = await axios.delete("/api/Users/DeleteItem", {
                data: { id },
            });
            if (response.data.success) {
                // setData((prevData) => prevData.filter(item => item.id !== id));
                setData(prevData => prevData.filter(item => item.id !== id));
                console.log("Item Deleted Successfully", response.data.message);
                toast.success("Item Deleted Successfully !!")
                setToogle(prevState => !prevState);

            } else {
                console.log("Unexpected response:", response.data);
            }
        } catch (error) {
            console.error("Error at removeItem", error);
        }
    };

    const handleIncrease = (id) => {
        setItemQuantities((prevQuantities) => {
            const updatedQuantities = { ...prevQuantities };
            updatedQuantities[id] = (updatedQuantities[id] || 0) + 1;
            return updatedQuantities;
        });
    };

    const handleDecrease = (id) => {
        setItemQuantities((prevQuantities) => {
            const updatedQuantities = { ...prevQuantities };
            updatedQuantities[id] = Math.max((updatedQuantities[id] || 1) - 1, 1);
            return updatedQuantities;
        });
    };

    const calculateTotalPrice = () => {
        if (!data || data.length === 0) {
            return 0;
        }

        const total = data
            .reduce((total, item) => {
                const itemPrice = parseFloat(item.price.replace("₹", "").trim());
                const quantity = itemQuantities[item.id] || 1;
                const itemTotal = itemPrice * quantity;

                return total + itemTotal;
            }, 0)
            .toFixed(2);

        console.log(`Total: ₹${total}`);

        return total;
    };

    const handlePayment = () => {
        // Check if any address field is empty
        for (const key in formInfo) {
            if (formInfo[key] === '') {
                toast.error("Please fill in all address fields");
                return; // Stop execution if any field is empty
            }
        }

        // Redirect to payment page if all fields are filled
        // router.push({
        //     pathname: '/Payment',
        //     query: { total: calculateTotalPrice() }
        // });
    };

    const isAddressFilled = () => {
        for (const key in formInfo) {
            if (formInfo[key] === '') {
                return false; // Return false if any field is empty
            }
        }
        return true; // Return true if all fields are filled
    };

    return (
        < >
            <div className='w-full sm:ml-0 ml-36'>
                <Navbar />
            </div>

            <div className=" flex justify-between  ">
                <div className="w-full sm:w-auto flex flex-col sm:ml-36 mt-9  px-6 gap-6 mb-4 ">
                    <h1 className='text-5xl font-bold mb-10'>Your Details</h1>

                    <div className="flex flex-col">
                        <label className='text-xl mb-1 text-zinc-900 font-bold'>Name</label>
                        <input
                            placeholder='Enter your name...'
                            required
                            className='outline-gray-500 text-base text-zinc-800 w-72 px-2 py-1 border rounded'
                            type="text"
                            value={formInfo.name}
                            onChange={(e) => setFormInfo({ ...formInfo, name: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className='text-xl mb-1 text-zinc-900 font-bold'>Address</label>
                        <input
                            placeholder='Enter your address...'
                            required
                            className='outline-gray-500 text-base text-zinc-800 w-72 px-2 py-1 border rounded'
                            type="text"
                            value={formInfo.address}
                            onChange={(e) => setFormInfo({ ...formInfo, address: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className='text-xl mb-1 text-zinc-900 font-bold'>City</label>
                        <input
                            placeholder='Enter your city...'
                            required
                            className='outline-gray-500 text-base text-zinc-800 w-72 px-2 py-1 border rounded'
                            type="text"
                            value={formInfo.city}
                            onChange={(e) => setFormInfo({ ...formInfo, city: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className='text-xl mb-1 text-zinc-900 font-bold'>Post Code</label>
                        <input
                            placeholder='Enter your post code...'
                            required
                            className='outline-gray-500 text-base text-zinc-800 w-72 px-2 py-1 border rounded'
                            type="text"
                            value={formInfo.postcode}
                            onChange={(e) => setFormInfo({ ...formInfo, postcode: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className='text-xl mb-1 text-zinc-900 font-bold'>Country</label>
                        <input
                            placeholder='Enter your country...'
                            required
                            className='outline-gray-500 text-base text-zinc-800 w-72 px-2 py-1 border rounded'
                            type="text"
                            value={formInfo.country}
                            onChange={(e) => setFormInfo({ ...formInfo, country: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className='text-xl mb-1 text-zinc-900 font-bold'>Email</label>
                        <input
                            placeholder='Enter your email...'
                            required
                            className='outline-gray-500 text-base text-zinc-800 w-72 px-2 py-1 border rounded'
                            type="email"
                            value={formInfo.email}
                            onChange={(e) => setFormInfo({ ...formInfo, email: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className='text-xl mb-1 text-zinc-900 font-bold'>Phone</label>
                        <input
                            placeholder='Enter your phone...'
                            required
                            className='outline-gray-500 text-base text-zinc-800 w-72 px-2 py-1 border rounded'
                            type="text"
                            value={formInfo.phone}
                            onChange={(e) => setFormInfo({ ...formInfo, phone: e.target.value })}
                        />
                    </div>
                </div>

                {/*Second Div Starts Here  */}
                <div className="justify-end w-full md:w-3/6 float-right sm:px-16 px-6">
                    <div className="flex flex-col mt-10 space-y-8">
                        {data &&
                            data.map((item) => (
                                <ul className="flex flex-col sm:flex-col items-center md:flex-col lg:flex-row justify-around mb-2" key={item.id}>
                                    <Image
                                        src={item.picture}
                                        alt="Shoe Image"
                                        width={120}
                                        height={120}
                                    />
                                    <div className="flex flex-col text-center">
                                        <li className="text-base font-semibold">{item.name}</li>
                                        <li>{item.tag}</li>

                                        <div className="flex flex-row gap-4 mt-3 items-center justify-center ">
                                            <button onClick={() => handleDecrease(item.id)}>-</button>

                                            <button>{itemQuantities[item.id] || 1}</button>

                                            <button onClick={() => handleIncrease(item.id)}>+</button>
                                        </div>
                                    </div>

                                    <div className="flex flex-col space-y-4">
                                        <li className="text-base font-semibold text-center">{item.price}</li>
                                        <button
                                            className="btn w-max mb-6 h-12 text-center"
                                            onClick={() => {
                                                console.log("Deleting item with id Second:", item._id);
                                                removeItem(item._id);
                                            }}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </ul>
                            ))}
                    </div>
                    <div className="flex-1"></div>

                    <div className="px-2 py-2 sm:px-6 ">
                        <div className="mb-2 flex flex-wrap w-full flex-col items-center  justify-around sm:mb-0 sm:flex-row sm:items-center">
                            <h3 className="text-xl font-semibold ml-4">
                                Total:₹{calculateTotalPrice()}
                                {/* {Array.isArray(selectedItems) ? calculateTotal(selectedItems) : 0} */}
                            </h3>
                            <h4>
                                {/* <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 24 24"
                                    className="mb-[2px] inline"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                ></svg> */}
                                Free shipping
                            </h4>
                        </div>

                    </div>

                    <p className="text-lg text-zinc-900 font-semibold flex justify-center mt-3">
                        Enter Discount Code
                    </p>
                    <div className=" flex gap-3  mt-4 justify-center ">
                        <input
                            type="text"
                            placeholder="Code..."
                            className="outline-none border rounded px-2  py-1 w-36 h-10 mt-1 "
                        />
                        <button className="bg-zinc-950 w-16 px-1 py-2 mt-1 text-white h-10 text-center hover:scale-105">Check</button>
                    </div>
                    {
                        isAddressFilled() &&
                        <Link href={{
                            pathname: '/Payment',
                            query: { total: calculateTotalPrice() }
                        }}>
                            <button
                                // className="btn ml-32 block font-bold text-lg w-4/6 justify-center items-center text-center mt-4 "
                                className="btn ml-auto mr-auto block font-bold text-lg md:w-4/6 w-full justify-center items-center text-center mt-4"

                                onClick={handlePayment}
                            >Pay Now
                            </button>
                        </Link>
                    }
                    {!isAddressFilled() && (
                        <p className="text-red-500 text-center mt-4">Please fill in all address fields to proceed with payment</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default CheckoutPage;
