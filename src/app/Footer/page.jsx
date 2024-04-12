import React from "react";
import Logo2 from "@public/Images/Logo2.png";
import Image from "next/image";

function Footer() {
  return (
    <div className=" ">

      <footer className="flex flex-col  md:flex-row justify-center sm:justify-evenly px-4 py-8 md:px-24 md:py-4 mt-10">
        <div className="flex flex-col  items-center text-center md:items-center mb-6 md:mb-0">

          {/* Added md:items-start to align items to the start on medium screens and above */}
          <Image src={Logo2} alt="logo" width={150} />
          <p className="text-lg font-bold text-zinc-700 text-center">©2024 UrbanKicks.in</p>
          <p className="text-center"> All rights reserved.</p>
        </div>
        {/* 
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <h1 className="text-lg font-bold text-zinc-700 mb-2">Quick Links</h1>
          <p>Home</p>
          <p>Cart</p>
          <p>Login</p>
        </div>

        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <h1 className="text-lg font-bold text-zinc-700 mb-2">Services</h1>
          <p>Theme-Theme</p>
        </div>

        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <h1 className="text-lg font-bold text-zinc-700 mb-2">Showcase</h1>
          <p>WidgetKit</p>
          <p>Support</p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-lg font-bold text-zinc-700 mb-2">About Us</h1>
          <p className="text-lg font-bold text-zinc-700 mb-1">Contact Us</p>
          <p className="text-lg font-bold text-zinc-700">Resources</p>
        </div> */}
      </footer>
    </div>
  );
}

export default Footer;
