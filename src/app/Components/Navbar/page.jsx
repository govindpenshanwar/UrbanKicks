"use client";

import Logo2 from "../../../../public/Images/Logo2.png";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Drawer from "../Drawer/page";
import Button from '@mui/material/Button';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import axios from "axios";
import toast from "react-hot-toast";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useSession } from "next-auth/react";
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menu, setMenu] = useState(null);
  const open = Boolean(anchorEl);

  const openMenu = Boolean(menu)

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { data: session } = useSession();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuOpen = (event) => {
    setMenu(event.currentTarget);
  };
  const handleMenuClose = () => {
    setMenu(null);
  };



  const router = useRouter();

  const onLogout = async () => {
    try {
      const API = await axios.get('/api/Users/Logout');
      toast.success("Logged Out Successfully !!")
      router.push('/Login');
    } catch (error) {
      console.error("Error at Logout Page => ", error.message);
    }
  }

  const [isCartDrawerOpen, setCartDrawerOpen] = useState(false);

  const handleCartDrawerOpen = () => {
    setCartDrawerOpen(true);
  };

  const handleCartDrawerClose = () => {
    setCartDrawerOpen(false);
  };

  return (
    <>
      <nav
        className="flex flex-row ml-4 font-mono sm:mt-0 mt-4  md:ml-4 sm:flex sm:w-full  gap-2 sm:items-center sm:justify-between px-4 md:px-6 lg:px-16 xl:px-24 2xl:px-48  "
      // className="flex items-center justify-between px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-48"
      >
        <Link href="/">
          <Image src={Logo2} width={130} height={50} alt="logo"
            className="sm:w-40 w-20 "
          />
        </Link>
        {isMobile ? (
          <>
            <Button
              variant="text"
              color="inherit"
              aria-controls={open ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </Button>

            <Menu
              id="fade-menu"
              MenuListProps={{ 'aria-labelledby': 'fade-button' }}
              anchorEl={menu}
              open={openMenu}
              onClose={handleMenuClose}
              TransitionComponent={Fade}
            >
              <Link href="/Men"><MenuItem onClick={handleMenuClose}>Men</MenuItem></Link>
              <Link href="/Women"><MenuItem onClick={handleMenuClose}>Women</MenuItem></Link>
              <Link href="/Kids"><MenuItem onClick={handleMenuClose}>Kids</MenuItem></Link>
              <Link href="/Unisex"><MenuItem onClick={handleMenuClose}>Unisex</MenuItem></Link>
            </Menu>
          </>
        ) : (
          <ul className="flex items-center space-x-6 sm:space-x-8 md:space-x-12 sm:text-xl font-bold sm:font-bold sm:font-mono">
            <li><Link href="/Men">Men</Link></li>
            <li><Link href="/Women">Women</Link></li>
            <li><Link href="/Kids">Kids</Link></li>
            <li><Link href="/Unisex">Unisex</Link></li>
          </ul>
        )}

        {/* <ul
          className="flex items-center space-x-6 sm:space-x-8  md:space-x-12 sm:text-xl font-bold sm:font-bold sm:font-mono"
        //  className="flex flex-wrap flex-row text-base gap-4 text-center  md:flex md:gap-12 font-bold font-mono md:text-xl"
        >
          <li><Link href="/Men">Men</Link></li>
          <li><Link href="/Women">Women</Link></li>
          <li><Link href="/Kids">Kids</Link></li>
          <li><Link href="/Unisex">Unisex</Link></li>
        </ul> */}

        <div className="sm:space-x-10 flex sm:items-center">
          {/* User Menu */}
          <Button
            variant="text"
            color="inherit"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <PersonOutlineIcon className="sm:text-2xl text-base" />
          </Button>

          <Menu
            id="fade-menu"
            MenuListProps={{ 'aria-labelledby': 'fade-button' }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            {session ? <Link href={{
              pathname: "/Components/Profile"
            }}>
              <MenuItem >Profile </MenuItem>
            </Link> :
              null}
            <Link href="/Login"><MenuItem onClick={handleClose}>Login</MenuItem></Link>
            <Link href="/signUp"><MenuItem onClick={handleClose}>SignUp</MenuItem></Link>
            <MenuItem onClick={onLogout}>Logout</MenuItem>
          </Menu>


          <button onClick={handleCartDrawerOpen} className="hover:scale-110 transition-all">
            <ShoppingCartOutlined className="sm:text-2xl text-base" />
          </button>
        </div>

        <Drawer isOpen={isCartDrawerOpen} onClose={handleCartDrawerClose} />
      </nav>
    </>
  );
}

export default Navbar;
