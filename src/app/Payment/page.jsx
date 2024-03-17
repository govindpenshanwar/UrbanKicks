import React from 'react'
import YourBillingComponent from '../YourBillingComponent/page';
import Navbar from '../Components/Navbar/page';
import Footer from '../Footer/page';

function Payment({searchParams}) {
    const{total} = searchParams;
    console.log("Total Price at Payment => " , total);
  return (
    <div>
      <Navbar/>
    <div className='flex flex-col gap-16 items-center mt-10 '>
      <h1 className='mt-20 text-2xl font-bold text-zinc-700 '>Total : ₹{total}</h1>
      <YourBillingComponent totalAmount = {total}/>
    </div>
    <Footer/>
    </div>
  )
}

export default Payment
