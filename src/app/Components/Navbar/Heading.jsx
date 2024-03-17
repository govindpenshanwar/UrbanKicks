"use client"
import main from '@public/Images/main.jpg'
import Image from 'next/image'
import React from 'react'

function Heading() {
  return (
    <>
      <div className='mb-10'>
        <p className='text-center font-bold text-6xl mt-10 mb-6' >Trendy Soles </p>
        <p className='text-center font-bold text-6xl'> Happy Souls</p>
      </div>

      <div className='m-6'>
        <Image
          src={main}
          alt='banner'
          loading='lazy'
          className='object-cover object-center '
          height={1600}
          // width={3000}
          style={{ aspectRatio: '3000/2000' }}
        />
      </div>
    </>

  )
}

export default Heading
