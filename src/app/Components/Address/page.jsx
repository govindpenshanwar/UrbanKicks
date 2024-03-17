import React from 'react'

function Address() {
  return (
    <div>
      <div className="w-max flex flex-col ml-20 mt-10 gap-6 mb-4 ">
                <h1 className='text-5xl font-bold mb-10'>Your Details</h1>

                <div className="flex flex-col"> 
                    <label className='text-xl mb-1 text-zinc-900 font-bold'>Name</label>
                    <input
                    placeholder='Enter your name...'
                    required
                    className='outline-gray-500 text-base text-zinc-800 w-72 px-2 py-1 border rounded'
                    type="text" />
                </div>
                <div className="flex flex-col"> 
                    <label className='text-xl mb-1 text-zinc-900 font-bold'>Address</label>
                    <input
                    placeholder='Enter your address...'
                    required
                    className='outline-gray-500 text-base text-zinc-800 w-72 px-2 py-1 border rounded'
                    type="text" />
                </div>
                <div className="flex flex-col"> 
                    <label className='text-xl mb-1 text-zinc-900 font-bold'>City</label>
                    <input
                    placeholder='Enter your city...'
                    required
                    className='outline-gray-500 text-base text-zinc-800 w-72 px-2 py-1 border rounded'
                    type="text" />
                </div>
                <div className="flex flex-col"> 
                    <label className='text-xl mb-1 text-zinc-900 font-bold'>Post Code</label>
                    <input
                    placeholder='Enter your post code...'
                    required
                    className='outline-gray-500 text-base text-zinc-800 w-72 px-2 py-1 border rounded'
                    type="text" />
                </div>
                <div className="flex flex-col"> 
                    <label className='text-xl mb-1 text-zinc-900 font-bold'>Country</label>
                    <input
                    placeholder='Enter your country...'
                    required
                    className='outline-gray-500 text-base text-zinc-800 w-72 px-2 py-1 border rounded'
                    type="text" />
                </div>
                <div className="flex flex-col"> 
                    <label className='text-xl mb-1 text-zinc-900 font-bold'>Email</label>
                    <input
                    placeholder='Enter your email...'
                    required
                    className='outline-gray-500 text-base text-zinc-800 w-72 px-2 py-1 border rounded'
                    type="email" />
                </div>
                <div className="flex flex-col"> 
                    <label className='text-xl mb-1 text-zinc-900 font-bold'>Phone</label>
                    <input
                    placeholder='Enter your phone...'
                    required
                    className='outline-gray-500 text-base text-zinc-800 w-72 px-2 py-1 border rounded'
                    type="text" />
                </div>
                <button>Submit</button>
            </div>
    </div>
  )
}

export default Address
