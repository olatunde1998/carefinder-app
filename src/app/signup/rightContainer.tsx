"use client";

import Image from "next/image";
import Button from "../components/buttons/Button";
import { auth } from "../components/firebase/firebase";
import Input from "../components/input/input";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RightContainer() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpWithEmailAndPassword = (e: any) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        const name: string | null = userCredential.user.displayName;
        const email = userCredential.user.email;
        const profilePicture: string | null = userCredential.user.photoURL;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePicture", profilePicture);
        router.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="px-4 text-[#1F4D36] w-full md:w-1/2  flex flex-col justify-center items-center">
      <p className="text-center text-[32px] mb-10 md:hidden ">CareFinder App</p>
      <div className="px-4 w-full lg:w-[90%] xl:w-[60%]">
        <p className="text-center text-[32px] ">
          Welcome Back! {email} {password}
        </p>
        <p className="text-center">Login to your account</p>
        <form onSubmit={signUpWithEmailAndPassword}>
          <div className="mt-4">
            {/* {email} */}
            <Input
              inputIcon
              label=" Your Email"
              type="email"
              placeholder="Enter your email"
              inputValue={email}
              onChangeValue={(e: any) => setEmail(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <Input
              inputIcon
              label="Your Password"
              type="password"
              placeholder="Enter your password"
              inputValue={password}
              onChangeValue={(e: any) => setPassword(e.target.value)}
            />
          </div>

          <div className=" mt-4">
            <Button
              className=" bg-[#1F4D36] text-[20px] text-white rounded-lg w-full hover:bg-white hover:text-[#1F4D36] hover:border-[#1F4D36] border-[.01rem]"
              btnText="Sign Up"
              btnIcon
            />
          </div>
        </form>

        {/* Google Authentication container */}
        <div
          className="mt-4 px-8 py-1 rounded-lg flex items-center justify-center cursor-pointer border-[#1F4D36] border-[.01rem]"
          // onClick={signUpWithgoogleAuthentication}
        >
          <Image
            src="/images/google.png"
            width={100}
            height={100}
            alt="doctor pics"
            className="w-[40px] h-[40px] "
          />
        </div>
      </div>
    </div>
  );
}
