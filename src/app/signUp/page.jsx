'use client'

import { TextField } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { InputAdornment } from '@mui/material';
import { Password, Person } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import Link from 'next/link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import toast from 'react-hot-toast';

function SignUp() {
  const router = useRouter();
  const [data, setData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleSubmit = async () => {
    try {
      const API = await axios.post('/api/Users/signUp', data);
      const response = API.data;
      console.log("User Data => ", response);
      toast.success("Registration Successfull")
      router.push('/Login')

    } catch (error) {
      console.error("Error at signUp : ", error.message);
    }
  }
  return (
    <div className=' flex flex-col justify-center items-center mt-44'>
      <span className='flex flex-col items-center justify-center gap-3' >
        <Avatar sx={{ bgcolor: deepPurple[600] }}>
          <LockOutlinedIcon />
        </Avatar>
        <span className='text-center text-xl font-mono font-bold'>Please SignUp here 👇</span>
      </span>

      <div className='flex flex-col gap-6  w-96 mt-10 justify-center'>
        <TextField
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
          variant='outlined'
          label="Username"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          variant='outlined'
          label="Email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Password />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          variant='outlined'
          label="Password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Password />
              </InputAdornment>
            ),
          }}
        />
        <button
          className='btn w-40 ml-28 text-xl font-bold hover:scale-105 transition-all'
          onClick={handleSubmit}
        >Submit</button>
        <p className='text-base text-zinc-800 ml-24'>Already have an account?</p>
        <Link href={'Login'}> <button className='text-xl font-bold text-zinc-700 ml-40 '>Login</button></Link>
      </div>
    </div>
  )
}

export default SignUp
