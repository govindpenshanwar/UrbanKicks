'use client'

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'

function Logout() {
  const router = useRouter();

  const onLogout = async () => {
    try {
      const API = await axios.get('/api/Users/Logout');
      router.push('/Login');
    } catch (error) {
      console.error("Error at Logout Page => ", error.message);
    }
  }
  return (
    <div>
      <h1>Logout Here</h1>
      <button onClick={onLogout}>LogOut</button>
    </div>
  )
}

export default Logout
