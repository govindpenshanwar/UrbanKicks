"use client"
import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar/page'
import SideNav from '../Components/SideNav/page'
import Image from 'next/image'
import KidsShoes from '@/helpers/KidsShoes'
import Link from 'next/link'
import Footer from '../Footer/page'

function KidsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredShoes, setFilteredShoes] = useState(KidsShoes);
  const [sortingCriteria, setSortingCriteria] = useState("default");

  // useEffect(() => {
  //   const filteredResults = UnisexShoes.filter((shoe) =>
  //     shoe.name.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   setFilteredShoes(filteredResults);
  // }, [searchQuery]);
  useEffect(() => {
    const filteredAndSortedResults = KidsShoes.filter((shoe) =>
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
      <div className='sm:flex flex sm:gap-0  gap-5 '>
        <SideNav onSearch={handleSearch} onSortByChange={handleSortByChange} />
        <div
          // className='relative grid grid-cols-3 justify-center gap-14 2xl:grid-cols-[repeat(auto-fit,24rem mb-10'
          className="relative grid  md:grid-cols-2 lg:grid-cols-3 pr-4 md:pr-0 lg:pr-0  justify-center gap-14"
        >
          {filteredShoes.map((shoe) => (
            <Link key={shoe.id} href={{
              pathname: '/SingleProduct', query:
                { id: shoe?.id, name: shoe?.name, picture: shoe?.picture, tag: shoe?.tag, price: shoe?.price }
            }}  >
              <div className='h-max w-max opacity-100 grid  gap-16 object-cover'>
                <div className='shadow-md '>
                  <Image
                    className='hover:scale-110 transition-all '
                    height={400}
                    width={300}
                    style={{ height: 'auto', width: 'auto' }}
                    src={shoe.picture}
                    alt='img'
                  />
                </div>
                <div className="-mt-10 flex justify-between px-2">
                  <div>
                    <h4 className="-mb-1 text-lg">{shoe.name}</h4>
                    <h5 className="text-zinc-500">{shoe.tag}</h5>
                  </div>
                  <div className="text-right">
                    <h4 className="-mb-1 text-lg">{shoe.price}</h4>
                  </div>
                </div>
              </div>
            </Link>
          ))}


        </div>
      </div>
      <Footer />
    </div>

  )
}

export default KidsPage
