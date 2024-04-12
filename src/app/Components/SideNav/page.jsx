'use client'
import MensPage from "@/app/Men/page";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";


function SideNav({ onSearch, onSortByChange }) {
    const router = useRouter();
    const handleWomenRoute = () => {
        router.push('/Women')
    }
    const handleMenRoute = () => {
        router.push('/Men')
    }
    const handleKidsRoute = () => {
        router.push('/Kids')
    }
    const handleUnisexRoute = () => {
        router.push('/Unisex')
    }

    const [sortingCriteria, setSortingCriteria] = useState("default");
    const [searchQuery, setSearchQuery] = useState("");

    const handleSortByChange = (event) => {
        const newSortingCriteria = event.target.value;
        console.log(newSortingCriteria);
        setSortingCriteria(newSortingCriteria);
        onSortByChange(newSortingCriteria)
    };

    const handleSearch = (event) => {
        const newSearchQuery = event.target.value;
        setSearchQuery(newSearchQuery);
        onSearch(newSearchQuery);
    };

    return (
        <div className="w-auto px-5 sm:px-0 sm:w-44 space-x-2 sm:space-x-0  sm:mx-24">
            <h3 className="mb-3 text-2xl  font-semibold">Search</h3>
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-auto sm:w-full py-1 px-2 mb-2 text-stone-800 rounded-md border"
            />
            <div className="divider w-full sm:w-full  mb-5 bg-opacity-100 bg-slate-700 h-px"></div>
            <h2 className="text-2xl font-semibold mt-3">Filter</h2>
            <div className="divider w-full mt-5 mb-5 bg-opacity-100 bg-slate-700 h-px"></div>

            <h3 className="mb-2 text-xl font-bold">Sort By</h3>

            <select
                value={sortingCriteria}
                onChange={handleSortByChange}
                className="py-1 px-2 space-y-1  text-stone-800 rounded-md border">
                <option value="default">Default</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="A">A...Z</option>
                <option value="Z">Z...A</option>
            </select>
            <div className="divider w-full mt-5 mb-5 bg-opacity-100 bg-slate-700 h-px"></div>

            <h3 className="mb-5 text-xl font-bold">Gender</h3>
            <label className="flex w-max cursor-pointer items-center font-medium text-stone-800 text-xl">
                <input className="mr-2 " type="checkbox" tabIndex="-1"
                    onChange={handleMenRoute}
                />
                Men
            </label>
            <label className="flex w-max cursor-pointer items-center  text-stone-800 font-medium text-xl">
                <input
                    className="mr-2" type="checkbox" tabIndex="-1"
                    onChange={handleWomenRoute}
                />
                Women
            </label>
            <label className="flex w-max cursor-pointer items-center  text-stone-800 font-medium text-xl">
                <input
                    className="mr-2" type="checkbox" tabIndex="-1"
                    onChange={handleUnisexRoute}
                />
                Unisex
            </label>

            <div className="divider w-full mt-5 mb-5 bg-opacity-100 bg-slate-700 h-px"></div>
            <h3 className="mb-5 text-xl font-bold">Kids</h3>
            <label className="flex w-max cursor-pointer items-center  text-stone-800 font-medium text-xl">
                <input className="mr-2" type="checkbox" tabIndex="-1"
                    onChange={handleKidsRoute}
                />
                Boys
            </label>
            <label className="flex w-max cursor-pointer items-center  text-stone-800 font-medium text-xl">
                <input className="mr-2" type="checkbox" tabIndex="-1"
                    onChange={handleKidsRoute}
                />
                Girls
            </label>

            <div className="divider w-full mt-5 mb-5 bg-opacity-100 bg-slate-700 h-px"></div>

            <h3 className="mb-5 text-xl font-bold">Gender</h3>
            <label className="flex w-max cursor-pointer items-center font-medium text-stone-800 text-xl">
                <input className="mr-2 " type="checkbox" tabIndex="-1" />
                Promotion
            </label>
            <span className="mt-2 block text-lg">Range</span>
            <div className="mt-1 flex flex-1">
                <input type="text" className="w-1/2 rounded-md border px-1" />
                <span className="px-2">-</span>
                <input type="text" className="w-1/2 rounded-md border  px-1" />
            </div>
            <div className="divider w-full mt-5 mb-5 bg-opacity-100 bg-slate-700 h-px"></div>
        </div>
    );
}

export default SideNav;


