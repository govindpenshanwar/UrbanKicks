"use client"
// import Navbar from './Components/Navbar/page'
// import Banner from './Components/Banner/page'
// import { CartProvider } from './CartContext/Context'
// import Footer from './Footer/page'
import dynamic from 'next/dynamic'


// const CartProvider = dynamic(() => import('./CartContext/Context'))
const Navbar = dynamic(() => import('./Components/Navbar/page'))
const Banner = dynamic(() => import('./Components/Banner/page'))
const Footer = dynamic(() => import('./Footer/page'))


export default function Home() {

  return (
    <div className='flex flex-col items-center '>
      <Navbar />
      <Banner />
      <Footer />

    </div>
  )
}
