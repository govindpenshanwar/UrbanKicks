"use client"
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { IoCloseOutline } from 'react-icons/io5';



const Drawer = ({ isOpen, onClose, }) => {
  // console.log("Selected from Cart:", selectedItems);
  const [data, setData] = useState(null);
  const [itemQuantities, setItemQuantities] = useState({});
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const Api = await axios.get('/api/Users/GetData');
      const res = Api.data
      setData(res.cartItems);
      console.log("Data got => ", res);
    }
    fetchData();
  }, []);



  const removeItem = async (id) => {
    try {
      console.log("Deleting id with first :", id);
      const response = await axios.delete("/api/Users/DeleteItem", {
        data: { id }
      });
      if (response.data.success) {
        console.log("Item Deleted Successfully", response.data.message);
        toast.success("Item Deleted Successfully");
      } else {
        console.log("Unexpected response:", response.data);
      }
    } catch (error) {
      console.error("Error at removeItem", error);
    }
  }
  const handleIncrease = (id) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
  };

  const handleDecrease = (id) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max((prevQuantities[id] || 1) - 1, 1),
    }));
  };
  const calculateTotalPrice = () => {
    if (!data || data.length === 0) {
      return 0;
    }

    return data.reduce((total, item) => {
      const itemPrice = parseFloat(item.price.replace('₹', '').trim());
      const quantity = itemQuantities[item.id] || 1;
      return total + itemPrice * quantity;
    }, 0).toFixed(2);
  };

  const handleCheckout = () => {
    router.push('/checkout');
  }


  return (

    <div
      className={`fixed inset-0 z-50 overflow-hidden transition-opacity ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-black opacity-75"></div>
        </div>

        <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
          <div className="relative w-screen max-w-md">
            <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
              <div className="px-4 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Cart</h2>
                  <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                  >
                    <IoCloseOutline className="h-6 w-6" />
                  </button>
                </div>
              </div>

              <div className='flex flex-col mt-10 space-y-8'>
                {data && data.map((item) => (
                  <ul
                    className='flex justify-around'
                    key={item.id}>
                    <Image
                      src={item.picture}
                      alt='Shoe Image'
                      width={120}
                      height={120}
                    />
                    <div className='flex flex-col -ml-2'>
                      <li className='text-base font-semibold'>{item.name}</li>
                      <li>{item.tag}</li>

                      <div className='flex flex-row gap-4 mt-3'>
                        <button
                          onClick={() => handleDecrease(item.id)}
                        >-</button>

                        <button>{itemQuantities[item.id] || 1}</button>

                        <button
                          onClick={() => handleIncrease(item.id)}
                        >+</button>
                      </div>
                    </div>

                    <div className='flex flex-col space-y-4'>
                      <li className='text-base font-semibold'>{item.price}</li>
                      <button
                        className='btn w-max mb-6 h-12 text-center'
                        onClick={() => {
                          console.log("Deleting item with id Second:", item._id)
                          removeItem(item._id)
                        }}
                      >Remove</button>
                    </div>
                  </ul>
                ))
                }
              </div>

              <div className="flex-1"></div>

              <div className="px-4 py-2 sm:px-6">
                <div className="mb-2 flex w-full flex-col items-start justify-between sm:mb-0 sm:flex-row sm:items-center">
                  <h3 className="text-xl font-semibold">
                    Total:₹{calculateTotalPrice()}
                    {/* {Array.isArray(selectedItems) ? calculateTotal(selectedItems) : 0} */}
                  </h3>
                  <h4>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="mb-[2px] inline"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                    Free shipping
                  </h4>
                </div>
                <button
                  onClick={handleCheckout}
                  className="btn block font-bold text-lg w-full text-center mt-4">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Drawer;
