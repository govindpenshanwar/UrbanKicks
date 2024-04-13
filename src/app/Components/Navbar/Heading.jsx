"use client"
import main from '@public/Images/main.jpg'
import Image from 'next/image'
import React from 'react'

function Heading() {
  return (
    <div className=' flex flex-col items-center justify-center sm:ml-0  -ml-2'>
      <div className='mb-10 flex flex-wrap flex-col sm:text-center text-center'>
        <p className='text-center font-bold text-5xl sm:text-6xl mt-10 mb-6' >Trendy Soles </p>
        <p className='text-center font-bold text-5xl sm:text-6xl'> Happy Souls</p>
      </div>

      <div
        className='px-4 '
      >
        <Image
          src={main}
          alt='banner'
          loading='lazy'
          className='sm:ml-0 ml-1  sm:object-cover  md:w-full w-max '
          height={1400}
          // width={3000}
          style={{ aspectRatio: '3000/2000' }}
        />
      </div>
    </div>

  )
}

export default Heading
