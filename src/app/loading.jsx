import React from 'react'
import { CircularProgress } from '@mui/material'
function loading() {
    return (
        <div className='flex justify-center items-center mt-56'>
            <CircularProgress
                size={80}
            />
        </div>
    )
}

export default loading
