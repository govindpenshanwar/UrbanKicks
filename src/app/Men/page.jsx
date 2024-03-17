"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/page";
import SideNav from "../Components/SideNav/page";
import Image from "next/image";
import Drawer from "../Components/Drawer/page";
import MenShoes from "@/helpers/MenShoes";
// import axios from 'axios'
// import { Button } from '@mui/material'
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Link from "next/link";
import Footer from "../Footer/page";

function MensPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredShoes, setFilteredShoes] = useState(MenShoes);
  const [sortingCriteria, setSortingCriteria] = useState("default");

  useEffect(() => {
    const filteredAndSortedResults = MenShoes.filter((shoe) =>
      shoe.name.toLowerCase().includes(searchQuery.toLowerCase())
    ).sort((a, b) => {
      switch (sortingCriteria) {
        case "low":
          return a.price - b.price;
        case "high":
          return b.price - a.price;
        case "A":
          return a.name.localeCompare(b.name);
        case "Z":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });
    setFilteredShoes(filteredAndSortedResults);
  }, [searchQuery, sortingCriteria]);


  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  const handleSortByChange = (value) => {
    setSortingCriteria(value);
  };
  return (
    <div>
      <Navbar />
      <div className="flex ">
        <SideNav onSearch={handleSearch} onSortByChange={handleSortByChange} />
        <div className="relative grid  md:grid-cols-2 lg:grid-cols-3   justify-center gap-14">
          {filteredShoes.map((shoe) => (
            <Link
              key={shoe.id}
              href={{
                pathname: "/SingleProduct",
                query: {
                  id: shoe?.id,
                  name: shoe?.name,
                  picture: shoe?.picture,
                  tag: shoe?.tag,
                  price: shoe?.price,
                },
              }}
            >
              <div className="h-max w-max opacity-100 grid  gap-16 object-cover">
                <div className="shadow-md ">
                  <Image
                    className="hover:scale-110 transition-all "
                    height={400}
                    width={300}
                    style={{ height: 'auto', width: 'auto' }}
                    src={shoe.picture}
                    alt="img"
                  />
                </div>
                <div className="-mt-10 flex justify-between px-2">
                  <div>
                    <h4 className="-mb-1 text-lg">{shoe.name}</h4>
                    <h5 className="text-zinc-500">{shoe.tag}</h5>
                  </div>
                  <div className="text-right">
                    <h4 className="-mb-1 text-lg">{shoe.price}</h4>
                    {/* <Button
                  endIcon={<KeyboardArrowRightIcon/>}
                  variant='contained'
                  // onClick={()=> handleBuyNow(shoe)}
                  size='medium'
                  style={{backgroundColor:'#d32f2f', marginTop:'10px', }}
                  >Buy Now</Button> */}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MensPage;