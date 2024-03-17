"use client"

import { store } from '@/Store/UserStore'
import React from 'react'

function page() {
  const count  = store((state) => state.count);
  const increase = store((state) => state.increaseCount);
  const decrease  = store((state) => state.decreaseCount);
  const remove = store((state) => state.remove);
  return (
    <div className='flex flex-col gap-5 mt-10'>
      <h1 className='text-center'>Count : {count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={remove}>Remove</button>

    </div>
  )
}

export default page
