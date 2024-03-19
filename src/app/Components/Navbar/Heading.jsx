"use client"
import main from '@public/Images/main.jpg'
import Image from 'next/image'
import React from 'react'

function Heading() {
  return (
    <>
      <div className='mb-10 flex flex-wrap flex-col sm:text-center text-center'>
        <p className='text-center font-bold text-5xl sm:text-6xl mt-10 mb-6' >Trendy Soles </p>
        <p className='text-center font-bold text-5xl sm:text-6xl'> Happy Souls</p>
      </div>

      <div
        className='container sm:mx-16 md:mx-12 mx-1 '
      >
        <Image
          src={main}
          alt='banner'
          loading='lazy'
          className='sm:mx-6 sm:object-cover md::w-full w-max '
          height={1600}
          // width={3000}
          style={{ aspectRatio: '3000/2000' }}
        />
      </div>
    </>

  )
}

export default Heading
