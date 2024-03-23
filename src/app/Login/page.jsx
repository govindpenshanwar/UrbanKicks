"use client";
import { TextField } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import { Password, Person } from "@mui/icons-material";
import Link from "next/link";
import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import toast from "react-hot-toast";
import { useSession, signIn, } from "next-auth/react";
import google from '@public/Images/google.png';
import Image from "next/image";


function Login() {
  const { data: session } = useSession();
  console.log("Session from login page =>", session);
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const onLogin = async () => {
    try {
      if (user.username === "" || user.password === "") {
        toast.error("Please enter login credentials");
      } else {
        const API = await axios.post("/api/Users/Login", user, { withCredentials: true });
        const response = API.data;
        if (response.status === 400) {
          toast.error(response.message);
        } else {
          toast.success("Logged In Successfully ");
          router.push("/");
        }
      }
    } catch (error) {
      console.error("Error at loginPage : ", error.message);
    }
  };
  return (
    <div className=" flex flex-col justify-center items-center mt-36">
      <span className="flex flex-col items-center justify-center gap-3">
        <Avatar sx={{ bgcolor: deepPurple[600] }}>
          <LockOutlinedIcon />
        </Avatar>
        <span className="text-center text-xl font-mono font-bold">
          Welcome back 👋👋
        </span>
      </span>


      <div className=" flex flex-col gap-6 w-60 sm:w-96 mt-10 justify-center  ">
        <TextField
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          variant="outlined"
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
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          variant="outlined"
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
          className="btn sm:ml-28 sm:w-40 w-36 ml-12 text-xl font-bold hover:scale-105 transition-all"
          onClick={onLogin}
        >
          Continue
        </button>
        <p className="text-base text-zinc-800 ml-8 sm:ml-24">Don`t have an account?</p>
        <Link href={"signUp"}>
          {" "}
          <button className="text-xl font-bold text-zinc-700 ml-20 sm:ml-40 ">
            SignUp
          </button>{" "}
        </Link>

        <div className="flex flex-col items-center justify-center gap-5">
          <button
            className=" flex flex-row border p-2 rounded shadow items-center justify-center gap-1  w-max text-lg font-semibold hover:scale-105 transition-all"
            onClick={() => signIn("google", {
              callbackUrl: '/'
            },)}>
            <Image
              alt="google logo"
              src={google}
              width={30}
              height={30}
            />
            Sign in with Google</button>
          {/* <button onClick={() => signOut()}>Sign Out</button> */}
        </div>

      </div>
    </div>
  );
}

export default Login;
