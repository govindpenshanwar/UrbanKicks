"use client"
import Image from 'next/image'
import React from 'react'
import men from '@public/Images/men.jpg'
import women from '@public/Images/women.jpg'
import kid from '@public/Images/kid.jpg'
import unisex from '@public/Images/unisex.jpg'
import { useRouter } from 'next/navigation'

function CollectionList() {
    const router = useRouter();

    const handleMenClick = () => {
        router.push('/Men');
    }
    const handleWomenClick = () => {
        router.push('/Women');
    }
    const handleKidsClick = () => {
        router.push('/Kids');
    }
    const handleUnisexClick = () => {
        router.push('/Unisex');
    }

    return (
        <>
            <div
                className='md:py-28 py-10 px-10 flex items-center justify-center flex-col md:px-20 md:ml-20 '
            >
                <div className='flex w-full mb-10 md:h-md sm:mb-3 flex-col ml-24 md:ml-32 md:px-16 lg:px-0 '>
                    <div className='flex md:flex-row flex-col   md:h-96 md:gap-6'>
                        <Image
                            src={men}
                            alt='boy'
                            width={400}
                            height={500}
                        />

                        <div className='flex md:items-start flex-col items-center text-center mt-5  md:mt-10 md:text-left space-y-4'>
                            <h2 className='-mb-2 text-3xl font-bold md:text-5xl' >Men</h2>
                            <h3 className=' w-2/3 text-sm'>See our men collection for summer</h3>
                            <button
                                onClick={handleMenClick}
                                className="btn mt-2 w-max hover:scale-105"
                            >Explore</button>
                        </div>
                    </div>
                </div>


                <div className='md:flex-row-reverse mb-10  flex-col md:mt-8  ml-28 md:ml-60 md:pl-24 md:mb-12 flex md:h-96 gap-4 md:gap-8'>
                    <div className='flex md:flex-row flex-col md:h-96 md:gap-6'>
                        <Image
                            src={women}
                            alt='women'
                            width={400}
                            height={500}

                        />
                    </div>

                    <div className='md:mt-10 mt-5 flex flex-col items-center text-center md:items-end md:text-right  space-y-4'>
                        <h2 className='-mb-2 text-3xl font-bold md:text-5xl' >Women</h2>
                        <h3 className=' w-2/3 text-sm'>Fresh summer collection available now</h3>
                        <button
                            onClick={handleWomenClick}
                            className="btn mt-2 w-max hover:scale-105"
                        >Explore</button>
                    </div>

                </div>

                <div
                    className='flex w-full flex-col md:h-96 ml-24 md:mb-3 mb-10 md:ml-32 md:px-16 lg:px-0 '
                // className='flex w-full flex-col ml-32 md:px-16 lg:px-0'
                >
                    <div
                        className='flex md:flex-row flex-col   md:h-96 md:gap-6'
                    // className='flex h-96 gap-6'
                    >
                        <Image
                            src={kid}
                            alt='kid'
                            width={400}
                            height={500}

                        />

                        <div
                            className='flex md:items-start flex-col items-center text-center mt-5  md:mt-10 md:text-left space-y-4'
                        // className='flex items-start flex-col mt-10 text-left space-y-4'
                        >
                            <h2 className='-mb-2 text-3xl font-bold md:text-5xl' >Kids</h2>
                            <h3 className=' w-2/3 text-sm'>See what we offer to kids</h3>
                            <button
                                onClick={handleKidsClick}
                                className="btn mt-2 w-max hover:scale-105"
                            >Explore</button>
                        </div>
                    </div>
                </div>

                <div className='md:flex-row-reverse  flex-col md:mt-8  ml-28 md:ml-72 md:pl-24 md:mb-12 flex md:h-96 gap-4 md:gap-8'>
                    <div className='flex md:flex-row flex-col md:h-96 md:gap-6'>
                        <Image
                            src={unisex}
                            alt='boy'
                            width={400}
                            height={500}
                        />
                    </div>

                    <div className='md:mt-10 mt-5 flex flex-col items-center text-center md:items-end md:text-right  space-y-4'>
                        <h2 className='-mb-2 text-3xl font-bold md:text-5xl' >Unisex</h2>
                        <h3 className=' w-2/3 text-md'>See what we have in our offer</h3>
                        <button
                            onClick={handleUnisexClick}
                            className="btn mt-2 w-max hover:scale-105"
                        >Explore</button>
                    </div>

                </div>

            </div>
        </>

    )
}

export default CollectionList
